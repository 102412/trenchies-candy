

/* HERO FADE */

const hero = document.getElementById("heroText");

window.addEventListener("scroll", ()=>{

let scroll = window.scrollY;

hero.style.opacity = 1 - scroll / 300;

});



/* BAG DOWNWARD FLOAT */

const bag = document.getElementById("bag");

window.addEventListener("scroll", ()=>{

let scroll = window.scrollY;

let move = scroll * 0.1;

bag.style.transform = `translateY(${move}px)`;

});
