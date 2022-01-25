
// const $menuToggle = $('.toggle')

// $menuToggle.addEventListener("click", () => {
//     $menuToggle.toggleClass('active');
// })


const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})