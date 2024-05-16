const burgerBtn = document.querySelector(".button-burger");
const nav = document.querySelector(".nav");
// const navItem = document.querySelectorAll(".nav__item");

const setActive = () => {
   burgerBtn.classList.toggle("active");
   nav.classList.toggle("active");
};

burgerBtn.onclick = setActive;
// navItem.forEach((item) => {
//    item.onclick = setActive;
// });

window.addEventListener("scroll", () => {
   burgerBtn.classList.remove("active");
   nav.classList.remove("active");
});
