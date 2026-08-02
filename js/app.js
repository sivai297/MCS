
/* ==========================================
   MCS MAIN APPLICATION
   Meenakshi Control Systems
========================================== */



"use strict";

/* ==========================================
   DOM READY
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("=================================");
    console.log(" MCS WEBSITE STARTED ");
    console.log("=================================");

    initializeWebsite();

});

/* ==========================================
   INITIALIZE WEBSITE
========================================== */

function initializeWebsite() {

    initLoader();

    initNavbar();

    initHero();

    initSearch();

    initProducts();

    initReviews();

    initWarranty();

    initTheme();

    initScrollTop();

    initCurrentYear();

    console.log("Website Initialized Successfully");

}

/* ==========================================
   LOADER
========================================== */

function initLoader() {

    const loader = document.getElementById("loader");

    if (!loader) return;

    

        setTimeout(() => {

            loader.classList.add("loader-hide");

        }, 800);

   

}

/* ==========================================
   NAVBAR
========================================== */

function initNavbar() {

    const header = document.querySelector("header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

}

/* ==========================================
   SCROLL TO TOP
========================================== */

function initScrollTop() {

    const button = document.getElementById("scrollTop");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.style.display = "flex";

        } else {

            button.style.display = "none";

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================
   CURRENT YEAR
========================================== */

function initCurrentYear() {

    const year = document.getElementById("year");

    if (!year) return;

    year.textContent = new Date().getFullYear();

}

/* ==========================================
   PLACEHOLDER FUNCTIONS
========================================== */

function initHero(){}

function initSearch(){}

function initProducts(){}

function initReviews(){}

function initWarranty(){}

function initTheme(){}

/* ==========================================
   END OF PART 1
========================================== */
/* ==========================================
   APP.JS PART 2
========================================== */

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

function initActiveNavigation() {

    const sections =
    document.querySelectorAll("section");

    const navLinks =
    document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top =
            section.offsetTop - 120;

            const height =
            section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

}

/* ==========================================
   LAZY IMAGE LOADING
========================================== */

function initLazyLoading() {

    const images =
    document.querySelectorAll("img[data-src]");

    if (!images.length) return;

    const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const image = entry.target;

                image.src =
                image.dataset.src;

                image.removeAttribute("data-src");

                observer.unobserve(image);

            }

        });

    });

    images.forEach(image => {

        observer.observe(image);

    });

}

/* ==========================================
   CONNECTION STATUS
========================================== */

function initConnectionStatus() {

    window.addEventListener("offline", () => {

        console.warn("Internet Disconnected");

    });

    window.addEventListener("online", () => {

        console.log("Internet Connected");

    });

}

/* ==========================================
   WINDOW RESIZE
========================================== */

function initResize() {

    window.addEventListener("resize", () => {

        console.log(
            "Width :",
            window.innerWidth
        );

    });

}

/* ==========================================
   INITIALIZE EXTRA
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initActiveNavigation();

    initLazyLoading();

    initConnectionStatus();

    initResize();

});

/* ==========================================
   END APP.JS PART 2
========================================== */

/* ==========================================
   INTRO VIDEO CONTROL
========================================== */

const intro = document.getElementById("intro");
const skipBtn = document.getElementById("skip");
const video = document.getElementById("heroVideo");


if(video){

    video.play().catch(()=>{

        console.log("Video autoplay blocked");

    });

}


if(skipBtn && intro){

    skipBtn.addEventListener("click",()=>{

        intro.classList.add("hide");

    });

}


window.addEventListener("load",()=>{

    if(intro){

        setTimeout(()=>{

            intro.classList.add("hide");

        },5000);

    }

});

