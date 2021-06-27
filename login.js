const path = require("express-session");


app.get('/', function (request, response){
    response.sendFile(path.join(__dirname+'/login.html'));
});



app.post('/auth', function (request, response){
    alert("wir sind im server");
    var username= request.body.username;
    var password= request.body.password;
    if(username && password) {
        if (username === "horst") {
            request.session.loggedin = true;
            request.session.username = username;
            response.redirect('login.html');
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