var dropdown = document.getElementsByClassName("togglebtn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

var x = true;
var dropdownMobileContent = document.getElementById("content_mobile")
 
  function hover(element) {
    if (dropdownMobileContent.style.display === "flex") {
        element.setAttribute('src', './images/icon-hamburger.svg');
        dropdownMobileContent.style.display = "none"
    } else {
        dropdownMobileContent.style.display = "flex"
        element.setAttribute('src', './images/icon-close.svg');

    }
  }