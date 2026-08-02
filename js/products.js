
/* ==========================================
   MCS Products Controller
========================================== */

const searchInput = document.querySelector("#search input");
const productCards = document.querySelectorAll(".product-card");

/* ==========================================
   Live Search
========================================== */

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        productCards.forEach(card => {

            const productName =
                card.querySelector("h3").textContent.toLowerCase();

            if (productName.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

/* ==========================================
   Product Hover Effect
========================================== */

productCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px) scale(1)";

    });

});

/* ==========================================
   Product Image Zoom
========================================== */

const productImages =
document.querySelectorAll(".product-image img");

productImages.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

/* ==========================================
   WhatsApp Enquiry
========================================== */

const whatsappButtons =
document.querySelectorAll(".product-buttons a:last-child");

whatsappButtons.forEach(button => {

    button.addEventListener("click", function(e){

        e.preventDefault();

        const card =
        this.closest(".product-card");

        const product =
        card.querySelector("h3").textContent;

        const price =
        card.querySelector("h4").textContent;

        const warranty =
        card.querySelector(".warranty").textContent;

        const message =
`Hello MCS,

I am interested in this product.

Product : ${product}

Price : ${price}

Warranty : ${warranty}

Please send more details.`;

        const phone =
"91XXXXXXXXXX";

        window.open(
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`
);

    });

});

/* ==========================================
   Product Details Button
========================================== */

const detailButtons =
document.querySelectorAll(".product-buttons a:first-child");

detailButtons.forEach(button => {

    button.addEventListener("click",(e)=>{

        e.preventDefault();

        alert("Product Details Page Coming Soon");

    });

});

/* ==========================================
   Product Animation
========================================== */

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

productCards.forEach(card=>{

observer.observe(card);

});

/* ==========================================
   End
========================================== */
