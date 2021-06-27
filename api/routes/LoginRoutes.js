const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const con = require('../../Database/connection_online_database');
const userMiddleware = require('../LogIn/user');
const req = require("express");



router.post('sign-up', userMiddleware.validateRegister, (req, res, next) => {
    con.query(
    `SELECT * FROM users WHERE LOWER(username) = LOWER(${con.escape(
        req.body.username
    )});`,
    (err, result) => {
        if (result.length) {
            return res.status(409).send({
                msg: 'This username is already in use!'
            });
        } else {
            // username is available
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).send({
                        msg: err
                    });
                } else {
                    // has hashed pw => add to database
                    con.query(
                        `INSERT INTO users (id, username, password, registered) VALUES ('${uuid.v4()}', ${con.escape(
                            req.body.username
                        )}, ${con.escape(hash)}, now())`,
                        (err, result) => {
                            if (err) {
                                throw err;
                                return res.status(400).send({
                                    msg: err
                                });
                            }
                            return res.status(201).send({
                                msg: 'Registered!'
                            });
                        }
                    );
                }
            });
        }
    }
);
});

router.post('login', (req, res, next) => {
    con.query(
        `SELECT * FROM users WHERE username = ${con.escape(req.body.username)};`,
        (err, result) => {
            // user does not exists
            if (err) {
                throw err;
                return res.status(400).send({
                    msg: err
                });
            }
            if (!result.length) {
                return res.status(401).send({
                    msg: 'Username or password is incorrect!'
                });
            }
            // check password
            bcrypt.compare(
                req.body.password,
                result[0]['password'],
                (bErr, bResult) => {
                    // wrong password
                    if (bErr) {
                        throw bErr;
                        return res.status(401).send({
                            msg: 'Username or password is incorrect!'
                        });
                    }
                    if (bResult) {
                        const token = jwt.sign({
                                username: result[0].username,
                                userId: result[0].id
                            },
                            'SECRETKEY', {
                                expiresIn: '7d'
                            }
                        );
                        con.query(
                            `UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`
                        );
                        return res.status(200).send({
                            msg: 'Logged in!',
                            token,
                            user: result[0]
                        });
                    }
                    return res.status(401).send({
                        msg: 'Username or password is incorrect!'
                    });
                }
            );
        }
    );


});


router.get('secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
    console.log(req.userData);
    res.send('This is the secret content. Only logged in users can see that!');
});



module.exports = router;