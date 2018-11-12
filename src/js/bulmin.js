const navBurger = document.querySelector(".navbar-burger");
const sidebar = document.querySelector(".sidebar");
navBurger.addEventListener("click", function () {
    navBurger.classList.toggle("is-active");
    sidebar.classList.toggle("active");
});