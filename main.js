
const menuToggle = document.querySelector('.toggle');
const menuShowcase= document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  menuShowcase.classList.toggle('active');
})