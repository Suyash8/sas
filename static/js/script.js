const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});