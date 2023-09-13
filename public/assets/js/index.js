// JS for Hamburger

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


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


//Instantiate lazy-load

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();