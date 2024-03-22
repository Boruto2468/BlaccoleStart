// keep track of previous scroll position
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', function() {
  // current scroll position
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("nav-bar").style.top = "0px"; // Show navbar
} else {
    document.getElementById("nav-bar").style.top = "-150px"; // Hide navbar
}

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;
console.log(currentSlide);
console.log(typeof currentSlide);



function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000);