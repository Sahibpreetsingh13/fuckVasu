// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("img01");
var captionText = document.getElementById("caption");

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  img.src = "vasu.png"; // Replace with your image path
  captionText.innerHTML = "<h1 class = heading>Machuda<h1>"; // Replace with your caption
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  