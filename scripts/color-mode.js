let button = document.getElementById("color-mode-button");

function toggleColorMode(event) {
    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Dark mode";

        document.body.classList.replace("dark-mode", "light-mode")

    } else {
        button.textContent = "Light mode";
        document.body.classList.replace("light-mode", "dark-mode")


    }uuu

    console.log("event =", event);

}

