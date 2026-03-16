

/* scroll reveal animation */

const revealElements = document.querySelectorAll(".scroll-left, .scroll-right");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.3});


revealElements.forEach(el=>observer.observe(el));



/* product motion */

const bag = document.getElementById("bag");

window.addEventListener("scroll", () => {

let scroll = window.scrollY;

let rotate = scroll * 0.04;

let float = Math.sin(scroll * 0.01) * 15;

bag.style.transform =
`translateY(${float}px) rotateY(${rotate}deg)`;

});
