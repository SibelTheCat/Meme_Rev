
let NameOfPic = "";

var loadFile = function(event) {
   //www.webtrickshome.com/faq/how-to-display-uploaded-image-in-html-using-javascript
    var image = document.getElementById('output');
  //  var link_of_image = event.target.files[0];
    image.src = URL.createObjectURL(event.target.files[0]);
    var picName = document.getElementById('picture_name');
    picName.innerHTML = event.target.files[0].name;
    NameOfPic = event.target.files[0].name;
    console.log(event.target.files[0]);
};
//starts only here, otherwise the loadefile funktion would not work

document.addEventListener("DOMContentLoaded", function (event) {

 function sendButtonIsClicked() {
   // console.log('Button Clicked');
    //https://stackoverflow.com/questions/9618504/how-to-get-the-selected-radio-button-s-value
    let category = document.querySelector('input[name="category"]:checked').value;

  //  https://www.w3schools.com/jsref/coll_form_elements.asp
    let meme_title = document.getElementById("myForm").elements[13].value;
    let meme_description = document.getElementById("myForm").elements[14].value;
    let meme_tag1 = document.getElementById("myForm").elements[15].value;
    let meme_tag2 = document.getElementById("myForm").elements[16].value;
    let meme_tag3= document.getElementById("myForm").elements[17].value;


    let newMeme = {
        memeCategory: category,
        memeName: meme_title,
        memePic: "pics/"+NameOfPic,
        memeDescription:meme_description,
        memeTag1: meme_tag1,
        memeTag2:meme_tag2,
        memeTag3:meme_tag3

    };


     fetch('http://localhost:3000/api/v1/meme', {
        method: 'POST',

         ///WICHTIG
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(newMeme),
    }).then(function (response){
        alert(response.text());
     });



    //console.log(meme_title);
   // console.log(meme_tag1);
   // console.log(meme_tag2);
   // console.log(meme_tag3);
  //  console.log(category);
    }

document.getElementById("sendButton").onclick = function() {sendButtonIsClicked()};

});