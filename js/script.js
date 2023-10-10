const header = document.querySelector("header");

window.addEventListener("scroll", () => {
   header.classList.toggle("sticky", window.scrollY > 0);
});

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
   menuIcon.classList.toggle("bx-x");
   navbar.classList.toggle("open");
};

window.onscroll = () => {
   menuIcon.classList.remove("bx-x");
   navbar.classList.remove("open");
};
