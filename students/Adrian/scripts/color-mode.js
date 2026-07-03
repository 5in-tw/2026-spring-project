
var button = document.getElementById("color-mode-button");
console.log(document.body.classList.contains("dark-mode"));

function toggleColorMode(event) {
    
    
    if (document.body.classList.contains("dark-mode")) {
        console.log("high")
        button.textContent = "Dark mode";
        document.body.classList.replace("dark-mode", "light-mode"); 
    } else {
    
        button.textContent = "Light mode"; 
        document.body.classList.replace("light-mode", "dark-mode"); 
    }

   
    console.log("event =", event);



}
button.addEventListener("click", toggleColorMode);
