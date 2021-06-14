document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("open-button").onclick = function () {openForm()}

   // document.getElementById("demo").onclick = function () {myFunction()}

  //  function myFunction() {
   //     document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
    //}

   function openForm() {
       document.getElementById("myForm").style.display = "block";
    }

    /*
    var modal = document.getElementsByClassName('id01');

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }*/
});