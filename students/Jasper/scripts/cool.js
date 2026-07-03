// ===============================
// Self Destruct System - Part A
// ===============================

const selfDestructButton = document.getElementById("change-background-color");
const warningScreen = document.getElementById("warning-screen");
const hackTitle = document.getElementById("hack-title");
const hackText = document.getElementById("hack-text");

const progressBar = document.getElementById("progress-bar");
const progress = document.getElementById("progress");

const hacked = document.getElementById("hacked");

const missile = document.getElementById("missile");
const boom = document.getElementById("boom");

let running = false;

selfDestructButton.addEventListener("click", startSequence);

// ===============================
// Start
// ===============================

function startSequence() {

    if (running) return;

    running = true;

    warningScreen.style.display = "flex";
    warningScreen.style.background = "red";

    hackTitle.style.display = "block";
    hackTitle.innerHTML = "⚠ WARNING ⚠";

    hackText.style.display = "block";
    hackText.textContent = "";

    hacked.style.display = "none";

    progressBar.style.display = "none";
    progress.style.width = "0%";

    missile.style.display = "none";
    boom.style.display = "none";

    setTimeout(startHack, 3000);

}

// ===============================
// Hacker Terminal
// ===============================

function startHack() {

    warningScreen.style.background = "black";

    hackTitle.style.display = "none";

    progressBar.style.display = "block";

    const lines = [

        "INITIALIZING SYSTEM...",
        "",
        "CONNECTING TO REMOTE SERVER...",
        "",
        "ACCESS GRANTED",
        "",
        "BYPASSING FIREWALL...",
        "",
        "DISABLING SECURITY...",
        "",
        "DOWNLOADING FILES...",
        "",
        "COPYING DATABASE...",
        "",
        "ENCRYPTING FILES...",
        "",
        "SYSTEM COMPROMISED",
        ""

    ];

    let line = 0;

    const typing = setInterval(function () {

        if (line >= lines.length) {

            clearInterval(typing);

            startLoading();

            return;

        }

        hackText.textContent += lines[line] + "\n";

        hackText.scrollTop = hackText.scrollHeight;

        line++;

    }, 350);

}

// ===============================
// Loading Bar
// ===============================

function startLoading() {

    let percent = 0;

    const loading = setInterval(function () {

        percent++;

        progress.style.width = percent + "%";

        if (percent >= 100) {

            clearInterval(loading);

            hacked.style.display = "block";

            setTimeout(startMissile,5000);

        }

    }, 35);

}

// ===============================
// Missile Animation
// ===============================

function startMissile() {

    hacked.style.display = "none";
    hackText.style.display = "none";
    progressBar.style.display = "none";

    missile.style.display = "block";
    missile.style.top = "-200px";

    let y = -200;

    const fly = setInterval(function () {

        y += 15;

        missile.style.top = y + "px";

        // 飛彈飛到畫面中間爆炸
        if (y >= window.innerHeight / 2 - 100) {

            clearInterval(fly);

            explode();

        }

    }, 20);

}

// ===============================
// Explosion
// ===============================

function explode() {

    missile.style.display = "none";

    boom.style.display = "flex";

    document.body.classList.add("shake");

    warningScreen.classList.add("smoke");

    // 白光
    warningScreen.style.background = "white";

    setTimeout(resetPage, 1200);

}

// ===============================
// Reset Everything
// ===============================

function resetPage() {

    document.body.classList.remove("shake");

    warningScreen.classList.remove("smoke");

    warningScreen.style.display = "none";
    warningScreen.style.background = "black";

    hackTitle.style.display = "block";
    hackTitle.innerHTML = "⚠ WARNING ⚠";

    hackText.style.display = "block";
    hackText.textContent = "";

    progressBar.style.display = "none";
    progress.style.width = "0%";

    hacked.style.display = "none";

    missile.style.display = "none";
    boom.style.display = "none";

    // 恢復 Light / Dark Mode
    document.body.style.backgroundColor = "";
    document.body.style.backgroundImage = "";
    document.body.style.transform = "";

    running = false;

}