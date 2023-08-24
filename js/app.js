const header = document.querySelector('.header');
const nav = document.querySelector('.nav');

// -----------------------------------------------------------
// Navbar Sticky ---------------------------------------------
const navbHight = nav.getBoundingClientRect().height();
console.log(navbHight);

new WOW().init();
$('.demo').percentcircle();
$('.counter').counterUp();
