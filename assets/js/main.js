


var typed = new Typed("#typed", {
    strings: ["Designer", "Developer", "Freelance", "Photographer"],
    stringsElement: '#typed-strings',
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    startDelay: 0,
    loop: true
});



// ============= Scroll Nav===========


scrollFunction()

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };


function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        // page scrolled
        document.getElementById("header").classList.add("scrolled-header")
        document.getElementById("scrollToTop").style.display = "block";
    } else {
        // the scroll is 0
        document.getElementById("header").classList.remove("scrolled-header")
        document.getElementById("scrollToTop").style.display = "none";
    }
}

document.getElementById("scrollToTop").addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})



const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },

    slidesPerView: 'auto',

});

