function searchToggle(){
    const toggleMenu1 = document.querySelector(".menu-search-form");
    toggleMenu1.classList.toggle("active1");

    document.querySelector(".toggle-icon-of").style.display = "block";
    document.querySelector(".toggle-icon-on").style.display = "none";
  }

function menuToggle(){
    const toggleMenu = document.querySelector(".account_holder");
    toggleMenu.classList.toggle("active");
  }

//   drop-menu
function dropMenuToggle(){
    const toggleMenu = document.querySelector(".drop_menu");
    toggleMenu.classList.toggle("active");
  }


  // owl-carousel

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin: 20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

// SECTION-4 PRODUCT SLIDER


const show = document.getElementById('show'),
      img = document.querySelectorAll('.img');

let counter = 1;
function plusSlides(n){
        counter +=n;
        slidefun(counter);
}
function currentSlide(n){
  counter = n;
  slidefun(counter);
}

function slidefun(n){
  let i;
  for ( i = 0; i < img.length; i++) {
    img[i].classList.remove('active'); 
  }
  if(n > img.length) {
    counter = 1;
  }
  if(n < 1){
    counter = img.length;
  }
  img[counter - 1].classList.add('active');
  show.src = img[counter - 1].src;
}


// ------------------------


// slider main-section-1
let slides = document.querySelectorAll(".slide-container1");
let index = 0;
// next function
function next1() {
  slides[index].classList.remove('active1');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active1');
}

// prev function
function prev1() {
  slides[index].classList.remove('active1');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active1');
}

// autoplay
setInterval(next1,5000); //slide her 6 saniyeden bir isleyecek.

// ------------------------------------------------------------------------------------------------------------------



// slider section-6
let slides2 = document.querySelectorAll(".slide-container");
let index2 = 0;
// next function
function next() {
  slides2[index2].classList.remove('active');
  index2 = (index2 + 1) % slides2.length;
  slides2[index2].classList.add('active');
}

// prev function
function prev() {
  slides2[index2].classList.remove('active');
  index2 = (index2 - 1 + slides2.length) % slides2.length;
  slides2[index2].classList.add('active');
}

// autoplay
setInterval(next,5000); //slide her 6 saniyeden bir isleyecek.
// ----------------------------------------------

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');   
    header.classList.toggle("sticky", window.scrollY > 0);
})