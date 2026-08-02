
/* ==========================================
   MCS Hero Controller
========================================== */

const heroTitle = document.querySelector(".hero-left h1");
const heroSubtitle = document.querySelector(".hero-left p");

/* ==========================================
   Hero Text Reveal
========================================== */

window.addEventListener("load", () => {

    if (heroTitle) {

        heroTitle.classList.add("show");

    }

    setTimeout(() => {

        if (heroSubtitle) {

            heroSubtitle.classList.add("show");

        }

    }, 500);

});

/* ==========================================
   Typing Animation
========================================== */

const typingText = [
    "Professional PCB Repair",
    "Refurbished Control Boards",
    "Trusted Electronic Solutions",
    "Warranty Supported Products"
];

let typeIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    if (charIndex < typingText[typeIndex].length) {

        typingElement.innerHTML += typingText[typeIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 80);

    } else {

        setTimeout(eraseEffect, 1800);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        typingElement.innerHTML =
            typingText[typeIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 40);

    } else {

        typeIndex++;

        if (typeIndex >= typingText.length) {

            typeIndex = 0;

        }

        setTimeout(typeEffect, 400);

    }

}

typeEffect();

/* ==========================================
   Floating Logo Animation
========================================== */

const heroLogo = document.querySelector(".hero-right img");

window.addEventListener("mousemove", (e) => {

    if (!heroLogo) return;

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    heroLogo.style.transform =
        `translate(${x}px,${y}px)`;

});

/* ==========================================
   Hero Button Hover
========================================== */

const heroButtons = document.querySelectorAll(".hero-buttons a");

heroButtons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-6px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});

/* ==========================================
   Scroll Indicator
========================================== */

const scrollIcon = document.getElementById("scrollDown");

if (scrollIcon) {

    scrollIcon.addEventListener("click", () => {

        window.scrollTo({

            top: window.innerHeight,

            behavior: "smooth"

        });

    });

}

/* ==========================================
   Hero Parallax
========================================== */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    let offset = window.pageYOffset;

    hero.style.backgroundPositionY = offset * 0.4 + "px";

});

/* ==========================================
   Hero End
========================================== */
