const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]
console.log("inside script file");

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('.active')
});