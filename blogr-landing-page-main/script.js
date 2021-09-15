var dropdown = document.getElementsByClassName("togglebtn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        var dropdownContentBlock = document.getElementsByClassName("toggle-content");
        j = 0
        for (j = 0; j < dropdownContentBlock.length; j++) {
            dropdownContentBlock[j].style.display = "none";
            dropdownContentBlock[j].previousElementSibling.style.color = "hsl(208, 49%, 24%)"
        }
        var dropdownContent = this.nextElementSibling;

        dropdownContent.style.display = "block";
        this.style.color = "hsl(207, 13%, 34%)"
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