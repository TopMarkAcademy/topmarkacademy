// ===============================
// TOPMARK ACADEMY JAVASCRIPT
// ===============================

// -------------------------------
// Update Footer Year
// -------------------------------
const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.innerHTML =
        `© ${new Date().getFullYear()} TopMark Academy. All Rights Reserved.`;
}

// -------------------------------
// Countdown Timer
// -------------------------------

// Registration closes on 24 August 2026 at 11:59 PM
const countdownDate = new Date("August 24, 2026 23:59:59").getTime();

// Create countdown element if it doesn't exist
let countdown = document.getElementById("countdown");

if (!countdown) {

    const hero = document.querySelector(".hero-content");

    countdown = document.createElement("div");
    countdown.id = "countdown";

    countdown.style.marginTop = "30px";
    countdown.style.fontSize = "1.2rem";
    countdown.style.fontWeight = "700";
    countdown.style.color = "#D8A437";

    hero.appendChild(countdown);
}

function updateCountdown() {

    const now = new Date().getTime();

    const distance = countdownDate - now;

    if (distance <= 0) {

        countdown.innerHTML = "Registrations have now closed.";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60))
        / (1000 * 60));

    

    countdown.innerHTML =
        `Registration closes in ${days}d ${hours}h ${minutes}m `;
}

updateCountdown();

setInterval(updateCountdown, 1000);

// -------------------------------
// Smooth Scroll
// -------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// -------------------------------
// Fade In Animation
// -------------------------------

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = 1;

            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = 0;

    section.style.transform = "translateY(40px)";

    section.style.transition = "0.8s";

    observer.observe(section);

});

// -------------------------------
// Subject Card Hover Effect
// -------------------------------

document.querySelectorAll(".subject-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

// -------------------------------
// Console Welcome
// -------------------------------

console.log("TopMark Academy Website Loaded Successfully!");
const params = new URLSearchParams(window.location.search);
const selectedSubject = params.get("subject");

if (selectedSubject) {

    const checkbox = document.getElementById(selectedSubject);

    if (checkbox) {

        checkbox.checked = true;

        // Update the total price
        checkbox.dispatchEvent(new Event("change"));

    }

}
function goToPayment() {
    const selectedSubjects = document.querySelectorAll(".subject:checked");

    if (selectedSubjects.length === 0) {
        alert("Please select at least one subject before proceeding to payment.");
        return;
    }

    const termsCheckbox = document.querySelector('input[type="checkbox"][required]');

    if (!termsCheckbox.checked) {
        alert("Please agree to the Terms & Conditions before proceeding.");
        return;
    }

    const subjectCount = selectedSubjects.length;

    const paymentLinks = {
        1: "https://square.link/u/XUX3VKvd",
        2: "https://square.link/u/jnBJYLAN",
        3: "https://square.link/u/7SiStjf0"
    };

    const paymentUrl = paymentLinks[subjectCount];

    if (!paymentUrl) {
        alert("Please contact TopMark Academy to arrange payment for 4 or more subjects.");
        return;
    }

    window.location.href = paymentUrl;
}
console.log("TopMark Academy - fresh GitHub Pages deployment");