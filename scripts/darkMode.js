const modeButton = document.querySelector("#mode");
const body = document.querySelector(".dark-mode");

modeButton.addEventListener("click", () => {
    body.classList.toggle('show');
    modeButton.classList.toggle('open');
});