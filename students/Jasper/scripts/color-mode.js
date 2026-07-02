const colorModeButton = document.getElementById("color-mode-button");

function toggleColorMode(event) {
    const clickedButton = event.target;

    if (document.body.classList.contains("dark-mode")) {
        clickedButton.textContent = "Dark mode";
        document.body.classList.replace("dark-mode", "light-mode");
    } else {
        clickedButton.textContent = "Light mode";
        document.body.classList.replace("light-mode", "dark-mode");
    }

    console.log("event =", event);
}

colorModeButton.addEventListener("click", toggleColorMode);