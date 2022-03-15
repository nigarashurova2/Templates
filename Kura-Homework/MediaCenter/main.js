// section-1 toogle
function menuToggle(){
  const toggleMenu = document.querySelector(".dropdown_menu");
  toggleMenu.classList.toggle("active");
}

function menuToggle2(){
  const toggleMenu1 = document.querySelector(".dropdown_menu_2");
  toggleMenu1.classList.toggle("active1");
  
}

function menuToggleNav(){
  const toggleMenuNav1 = document.querySelector(".dropdown_menu-nav");
  toggleMenuNav1.classList.toggle("active-nav");
  
}

function menuToggleNav2(){
  const toggleMenuNav1 = document.querySelector(".dropdown_menu-nav-2");
  toggleMenuNav1.classList.toggle("active-nav");
  
}

function menuToggleNav3(){
  const toggleMenuNav1 = document.querySelector(".dropdown_menu-nav-3");
  toggleMenuNav1.classList.toggle("active-nav");
  
}


// section-1 Slider
let slides = document.querySelectorAll(".slide-container");
let index = 0;
// next function
function next() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

// prev function
function prev() {
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

// autoplay
setInterval(next,6000); //slide her 6 saniyeden bir isleyecek.





// section-3 onclick event
var content1= document.querySelector("#home-page-content-1");
var content2= document.querySelector("#home-page-content-2");
var content3= document.querySelector("#home-page-content-3");

var button1=document.querySelector("#button-1");
var button2=document.querySelector("#button-2");
var button3=document.querySelector("#button-3");


function openContent1() {
  content1.style.display = "block";
  content2.style.display = "none";
  content3.style.display = "none";

  document.querySelector(".link-1").style.padding=" 18px 53px";
  document.querySelector(".link-1").style.background="#59B210";
  document.querySelector(".link-1").style.color="white";

  document.querySelector(".link-2").style.padding=" 14px 39px";
  document.querySelector(".link-2").style.background="#f9f9f9";
  document.querySelector(".link-2").style.color="#3d3d3d";

  document.querySelector(".link-3").style.padding=" 14px 39px";
  document.querySelector(".link-3").style.background="#f9f9f9";
  document.querySelector(".link-3").style.color="#3d3d3d";


}



function openContent2() {
  content1.style.display = "none";
  content2.style.display = "block";
  content3.style.display = "none";
 
  document.querySelector(".link-1").style.padding=" 13px 39px";
  document.querySelector(".link-1").style.background="#f9f9f9";
  document.querySelector(".link-1").style.color="#3d3d3d";

  document.querySelector(".link-2").style.padding=" 18px 53px";
  document.querySelector(".link-2").style.background="#59B210";
  document.querySelector(".link-2").style.color="white";

  document.querySelector(".link-3").style.padding=" 14px 39px";
  document.querySelector(".link-3").style.background="#f9f9f9";
  document.querySelector(".link-3").style.color="#3d3d3d";
}

function openContent3() {
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "block";
 
  document.querySelector(".link-1").style.padding=" 13px 39px";
  document.querySelector(".link-1").style.background="#f9f9f9";
  document.querySelector(".link-1").style.color="#3d3d3d";

  document.querySelector(".link-2").style.padding=" 14px 39px";
  document.querySelector(".link-2").style.background="#f9f9f9";
  document.querySelector(".link-2").style.color="#3d3d3d";

  document.querySelector(".link-3").style.padding=" 18px 53px";
  document.querySelector(".link-3").style.background="#59B210";
  document.querySelector(".link-3").style.color="white";
}