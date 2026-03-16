

/* HERO FADE */

const hero = document.getElementById("heroText");

window.addEventListener("scroll",()=>{

let scroll = window.scrollY;

hero.style.opacity = 1 - scroll/250;

});



/* BAG FLOAT */

const bag = document.getElementById("bag");

window.addEventListener("scroll",()=>{

let scroll = window.scrollY;

let float = Math.sin(scroll*0.01)*20;

bag.style.transform=`translateY(${float}px)`;

});



/* FEATURE REVEAL */

const features=document.querySelectorAll(".feature");

window.addEventListener("scroll",()=>{

let scroll=window.scrollY;

features.forEach((f,i)=>{

if(scroll>400+(i*250)){

f.classList.add("show");

}

});

});



/* MOBILE MENU */

const btn=document.getElementById("menuBtn");
const menu=document.getElementById("menu");

btn.onclick=()=>{

menu.style.display=
menu.style.display==="flex"
? "none"
: "flex";

};
