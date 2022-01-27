// N A V B A R  &  M E N U  F U N C T I O N A L I T Y
// Taylor Helped me convert this code from vanilla JS to JQUERY
$(() => {

    const $menuToggle = $('.toggle');
    
    const $menuShowcase = $('.menu');
    
    $menuToggle.click(function (){
        $menuToggle.toggleClass('active');
        $menuShowcase.toggleClass('active');
    })
});

// C A R O U S E L  F U N C T I O N A L I T Y
//  W3 SCHOOLS, Mario also helped me conceptualize the logic. 
let slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("project-item");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}








