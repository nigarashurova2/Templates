const toggle= document.getElementById('toggle');
const navbar = document.querySelector(".list");
const clickSound = new Audio("clickSound.mp3");
const cloneSound = new Audio("cloneSound.mp3");
toggle.onclick = function(){
    toggle.classList.toggle("active");
    navbar.classList.toggle("navbar-style");
    clickSound.play();
}



//text-color-change
const iconSetting = document.querySelector(".icon");
const wrapper = document.querySelector(".text-color-change");
iconSetting.onclick = function(){
    wrapper.classList.toggle("opened");
}

const colors = document.getElementsByClassName("colors");
let i;
for ( i = 0; i < colors.length; i++) {
   colors[i].addEventListener(`click`, changecolor)
    
}

function changecolor() {
    let color = this.getAttribute('data-color');
    document.documentElement.style.setProperty(`--color`,color);
}