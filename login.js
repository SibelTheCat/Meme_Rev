app.get('/', function (request, response){
    response.sendFile(path.join(__dirname+'/login.html'));
});


app.post('/auth', function (request, response){
    var username= request.body.username;
    var password= request.body.password;
    if(username && password) {
        if (username === "horst") {
            request.session.loggedin = true;
            request.session.username = username;
            response.redirect('/home');
        } else {
            response.send('incorrect Username and/or Password!');
        }
        response.end();
    }
    else{
        response.send('Please Enter Username and Password');
        response.end;
    }
})