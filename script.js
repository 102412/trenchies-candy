

/* HERO FADE */

const hero=document.getElementById("heroText");

window.addEventListener("scroll",()=>{

hero.style.opacity=1-window.scrollY/200;

});


/* FEATURE REVEAL */

const features=document.querySelectorAll(".feature");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.4});


features.forEach(f=>observer.observe(f));


/* MOBILE MENU */

const btn=document.getElementById("menuBtn");
const dropdown=document.getElementById("dropdown");

btn.onclick=()=>{

dropdown.style.display=
dropdown.style.display==="flex"
? "none"
: "flex";

};
