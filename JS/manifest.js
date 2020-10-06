var slideIndex = 0; //setting slide show index at zero
showSlides(); ///calling function

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides"); //targeting "mySlides Class"
  var dots = document.getElementsByClassName("dot"); // targeting "dot class"
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

    // for-loop targeting the ID's and adding a slide
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;

    // if statement looping through "slides" object
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000);

  //   changing image every 3 seconds
}
