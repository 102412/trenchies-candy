

/* HERO FADE */

const hero = document.getElementById("heroText");

window.addEventListener("scroll",()=>{

hero.style.opacity = 1 - window.scrollY/200;

});



/* BAG FLOAT */

const bag = document.getElementById("bag");

window.addEventListener("scroll",()=>{

let float = Math.sin(window.scrollY * 0.01) * 10;

bag.style.transform = `translateY(${float}px)`;

});



/* FEATURE REVEAL */

const features = document.querySelectorAll(".feature");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.3});

features.forEach(f=>observer.observe(f));
