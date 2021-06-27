
//libraries imported: express + body-parser
// stellt funktionen zur verfügung um middelware einzufugen pfade etc...
const express = require('express');
//mein controller wo die ruten definiert sind
const memeRoutes = require('./api/routes/MemeRoutes');

// cors = Cross-Origin Resource Sharing
//middleware-> gibt mir die möglichkeit, dass ich die cors sharing konfigurieren hat, wenn webseite unterschiedliche klients bedient
//der header wird mir im res so gesetzt, dass von allen Quellen geladen werden (allow origin *)
// mir cors erlaubt man alles

const cors = require('cors')
const bodyParser = require("body-parser");
const session = require('express-session');

//Express aplikation wird erstellt

const app = express();

//specify a port and pass it via an environment variable, or predefine it

const port = process.env.PORT || 3000;

//routes get added-> we create our API route
//middleware wird installiert
app.use(cors());

//2 middelwaren,
//middleware-> JSON wird in ein JS Objekt umgewandelt
//beide machen eine Umwandlung.

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Meme routes werden installiert, alle Routen

app.use('/api/v1/meme', memeRoutes);

const router = require('./api/routes/LoginRoutes');
app.use('/api/v1/meme', router);

// Routen werden automatisch dazugef.







app.use(express.json());


app.use(
    session({
        secret: "&_auQHXNCs&G#2*@g_j7G9",
        resave: false,
        saveUninitialized: false,
    })
);

app.get("/", (req, res) => {
    req.session.isAuth = true;
    console.log(req.session);
    console.log(req.session.id);
    res.json({ message: "Session ID Works" });
});


const isAuth= (req,res,next)=>{
    if(res.session.isAuth){
        next();
    }else{
        res.redirect("/login");
    }
};

app.get("/api/v1/meme/auth", (req,res)=>{
    req.session.isAuth =true;
})







// Start Server listening on Port ${port}
// if we have an error we send an error message to our terminal
app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`Server listening at http://localhost:${port}`);
    }
});