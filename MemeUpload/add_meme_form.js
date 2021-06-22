var loadFile = function(event) {
    https://www.webtrickshome.com/faq/how-to-display-uploaded-image-in-html-using-javascript
    var image = document.getElementById('output');
  //  var link_of_image = event.target.files[0];
    image.src = URL.createObjectURL(event.target.files[0]);
    var picName = document.getElementById('picture_name');
    picName.innerHTML = event.target.files[0].name;
    console.log(event.target.files[0]);
};
//starts only here, otherwise the loadefile funktion would not work
document.addEventListener("DOMContentLoaded", function (event) {


function sendButtonIsClicked() {
   // console.log('Button Clicked');
    //https://stackoverflow.com/questions/9618504/how-to-get-the-selected-radio-button-s-value
    var category = document.querySelector('input[name="category"]:checked').value;
    var meme_title = document.getElementById("myForm").elements[0].value;
    var meme_tag1 = document.getElementById("myForm").elements[1].value;
    var meme_tag2 = document.getElementById("myForm").elements[2].value;
    var meme_tag3= document.getElementById("myForm").elements[3].value;


    //console.log(meme_title);
   // console.log(meme_tag1);
   // console.log(meme_tag2);
   // console.log(meme_tag3);
    console.log(category);
    }

document.getElementById("sendButton").onclick = function() {sendButtonIsClicked()};

});