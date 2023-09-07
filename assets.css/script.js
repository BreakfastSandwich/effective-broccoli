const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]
// console.log(navbar-Links);

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
    navbarLinks.classList.toggle("hide")
    console.log("taco")
});