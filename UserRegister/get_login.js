document.addEventListener("DOMContentLoaded", function (event) {

    function sendButtonIsClicked() {


        let name = document.getElementById("login").elements[0].value;
        let password = document.getElementById("login").elements[1].value;


        let getLogin = {
            nickname: name,
            password: password,
        };

        fetch('http://localhost:3000/api/v1/meme/auth', {
            method: 'GET',

            ///WICHTIG
            headers: {},
        }).then(function (response){
            alert(response.text());
        });


    }

    document.getElementById("signup").onclick = function() {sendButtonIsClicked()};

});