AOS.init({
  once: "true",
  offset: 100,
});

let menu = document.getElementById("menu");
let nav = document.getElementById("nav");
let list = document.getElementById("list");
let navbar = document.getElementById("navbar");

let sticky = nav.offsetTop;

menu.addEventListener("click", function () {
  list.classList.toggle("active");
  nav.classList.toggle("active");
});

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onscroll = function () {
  myFunction();
};
