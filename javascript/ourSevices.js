// JavaScript code for slideshow functionality
var slideIndex = 0;
var slides = document.getElementsByClassName("slideshow")[0].getElementsByTagName("img");

function showSlide(n) {
  if (n < 0) {
    slideIndex = slides.length - 1;
  } else if (n >= slides.length) {
    slideIndex = 0;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  
  slides[slideIndex].classList.add("active");
}

function changeSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

showSlide(slideIndex);