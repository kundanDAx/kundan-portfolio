// Home Section Typing Animation

const roles = [
    "Data Analyst",
    "MIS Executive",
    "Excel Enthusiast",
    "Python Learner",
    "Power BI Developer"
];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        currentRole.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        speed = 1500;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

// Start animation
document.addEventListener("DOMContentLoaded", function () {
    typeEffect();
});


const themeToggle = document.getElementById("themeToggle");

// Saved theme load karo
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}

if (themeToggle) {
    updateButton();

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        const theme = document.body.classList.contains("light-mode")
            ? "light"
            : "dark";

        localStorage.setItem("theme", theme);
        updateButton();
    });
}

function updateButton() {
    if (!themeToggle) return;

    themeToggle.textContent =
        document.body.classList.contains("light-mode")
            ? "☀️ Day Mode"
            : "🌙 Night Mode";
}