
console.log("hi");

/*source javascript =  github opdracht responsive disclosure menu*/
var deButton = document.querySelector("header nav button");
deButton.addEventListener("click", toggleMenu);


function toggleMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.toggle("toonMenu");
}

window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}

/*source =  https://www.youtube.com/watch?v=pjm1jKPSGck*/

let img = document.querySelector('.nail');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');

btn1.addEventListener('click', () => {
  img.src = 'images/nailpolish.png'
})

btn2.addEventListener('click', () => {
  img.src = 'images/yellownail.png';
})

btn3.addEventListener('click', () => {
  img.src = 'images/blacknail.png';
})