const bag = document.getElementById("bag");

window.addEventListener("scroll", () => {

let scrollY = window.scrollY;

let rotate = scrollY * 0.05;
let translate = scrollY * 0.3;

bag.style.transform =
`translateY(${translate}px) rotateY(${rotate}deg) rotateX(${rotate*0.5}deg)`;

});



/* floating card animation */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mousemove", e => {

let rect = card.getBoundingClientRect();

let x = e.clientX - rect.left;
let y = e.clientY - rect.top;

let centerX = rect.width/2;
let centerY = rect.height/2;

let rotateX = -(y-centerY)/10;
let rotateY = (x-centerX)/10;

card.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

});

card.addEventListener("mouseleave", ()=>{
card.style.transform = "rotateX(0) rotateY(0)";
});

});
