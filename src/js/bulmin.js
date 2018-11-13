const navBurger = document.querySelector(".navbar-burger");
const sidebar = document.querySelector(".sidebar");
const nestedLists = document.getElementsByClassName("has-list-child");
console.log(nestedLists);
navBurger.addEventListener("click", function () {
    navBurger.classList.toggle("is-active");
    sidebar.classList.toggle("active");
});