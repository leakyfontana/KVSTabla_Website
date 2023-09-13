// JS for bookings button

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//JQuery to open Bookings section from nav-link in Hamburger

$(document).on('click', '#booking-link', function(event) { 
  $("#bookings button").trigger('click'); 
});
