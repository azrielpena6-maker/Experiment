// -----------------------------
// DARK MODE TOGGLE (ALL PAGES SAFE)
// -----------------------------
const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

if (themeSwitch) {

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        themeSwitch.checked = true;
    }

    // Toggle theme
    themeSwitch.addEventListener("change", () => {
        if (themeSwitch.checked) {
            body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    });
}


// -----------------------------
// GSAP ANIMATIONS (HOMEPAGE ONLY)
// -----------------------------
if (document.querySelector(".hero")) {

    gsap.registerPlugin(ScrollTrigger);

    // Hero text animation
    gsap.from(".hero-content h1", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });

    gsap.from(".hero-content p", {
        y: 50,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".hero-content button", {
        y: 30,
        opacity: 0,
        delay: 0.6,
        duration: 1,
        ease: "power3.out"
    });

    // Parallax video zoom
    gsap.to(".hero-video", {
        scale: 1.2,
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // Cards animation
    gsap.from(".card", {
        scrollTrigger: {
            trigger: ".cards",
            start: "top 80%"
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1
    });
}