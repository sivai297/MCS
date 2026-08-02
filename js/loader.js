
/* ==========================================
   MCS - Loader & Intro Controller
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const intro = document.getElementById("intro");

    setTimeout(() => {

        loader.classList.add("loader-hide");

    }, 2500);

    setTimeout(() => {

        loader.style.display = "none";

    }, 3300);

    setTimeout(() => {

        if (intro) {

            intro.classList.add("intro-show");

        }

    }, 3300);

});

/* ==========================================
   Skip Intro
========================================== */

const skipButton = document.getElementById("skip");

if (skipButton) {

    skipButton.addEventListener("click", () => {

        document.getElementById("intro").style.display = "none";

    });

}

/* ==========================================
   Intro Auto Close
========================================== */

setTimeout(() => {

    const intro = document.getElementById("intro");

    if (intro) {

        intro.classList.add("intro-hide");

        setTimeout(() => {

            intro.style.display = "none";

        },1000);

    }

},7000);

/* ==========================================
   Hero Fade Animation
========================================== */

const hero = document.querySelector(".hero");

if(hero){

hero.classList.add("hero-active");

}

/* ==========================================
   Logo Hover Animation
========================================== */

const logos=document.querySelectorAll("img");

logos.forEach((logo)=>{

logo.addEventListener("mouseenter",()=>{

logo.style.transform="scale(1.05) rotate(2deg)";

});

logo.addEventListener("mouseleave",()=>{

logo.style.transform="scale(1)";

});

});

/* ==========================================
   Loader Progress Animation
========================================== */

let progress=0;

const bar=document.querySelector(".loading-bar span");

const timer=setInterval(()=>{

progress++;

if(bar){

bar.style.width=progress+"%";

}

if(progress>=100){

clearInterval(timer);

}

},25);

/* ==========================================
   Welcome Message
========================================== */

console.log("===================================");

console.log("MCS Website Initialized");

console.log("Meenakshi Control System");

console.log("Professional PCB Solutions");

console.log("===================================");

/* ==========================================
   End
========================================== */
