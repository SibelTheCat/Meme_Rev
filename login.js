document.addEventListener("DOMContentLoaded", function (event) {

    var modal = document.getElementsByClassName('id01');

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});