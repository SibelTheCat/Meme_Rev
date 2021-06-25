document.addEventListener("DOMContentLoaded", function (event) {

    function sendButtonIsClicked() {

        let name = document.getElementById("loginform").elements[0].value;
        let email = document.getElementById("loginform").elements[1].value;
        let password = document.getElementById("loginform").elements[2].value;

        let newUser = {
            nickname: name,
            email: email,
            password: password

        };


        fetch('http://localhost:3000/api/v1/meme/auth', {
            method: 'POST',

            ///WICHTIG
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newUser),
        }).then(function (response){
            alert(response.text());
        });



        //console.log(meme_title);
        // console.log(meme_tag1);
        // console.log(meme_tag2);
        // console.log(meme_tag3);
        //  console.log(category);
    }

    document.getElementById("signup_submit").onclick = function() {sendButtonIsClicked()};

});