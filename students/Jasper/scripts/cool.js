let changeColor = document.getElementById("change-background-color");
let warning = document.getElementById("warning-screen");
let warningText = document.getElementById("warning-text");

function Button() {

    // Show warning
    warning.style.display = "flex";
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "red";
    warningText.innerHTML = "⚠ WARNING ⚠";

    // After 5 seconds, show BOOM
    setTimeout(function () {
        warningText.innerHTML = "💥";
        warning.style.backgroundColor = "orange";
    }, 3000);

    // After 6 seconds, go back to normal
    setTimeout(function () {
        warning.style.display = "none";
        warning.style.backgroundColor = "rgba(255, 0, 0, 0.95)";
        document.body.style.backgroundColor = "rgb(0, 0, 255)";
        document.body.style.backgroundImage =
            "linear-gradient(to bottom, rgb(167, 0, 0), rgb(48, 48, 48))";
    }, 4000);
}

changeColor.addEventListener("click", Button);