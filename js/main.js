$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        dots:true,
        dotsEach:true,
        margin:20,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
});

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

var modal1 = document.getElementById("mobMenu");

var btn1 = document.getElementById("mobBtn");

var span1 = document.getElementsByClassName("closed")[0];

btn1.onclick = function() {
  modal1.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

modal1.onclick = function() {
    modal1.style.display = "none";
  }

window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
}
