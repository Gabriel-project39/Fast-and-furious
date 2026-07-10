const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


const slides = document.querySelector(".swiper-slides");

if (slides) {

    let currentIndex = 0;
    const totalSlides = document.querySelectorAll(".image-slide").length;

    function showSlide(index, animate = true) {

        slides.style.transition = animate
            ? "transform 1s ease-in-out"
            : "none";

        slides.style.transform = `translateX(-${index * 100}vw)`;

    }

    function nextSlide() {

        currentIndex++;

        if(currentIndex < totalSlides){

            showSlide(currentIndex);

        }else{

            currentIndex = 0;

            showSlide(currentIndex,false);

        }

    }

    setInterval(nextSlide,4000);

    showSlide(currentIndex);

}

const cards = document.querySelectorAll(".card");

if (cards.length) {

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach((entry)=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.2

    });

    cards.forEach(card=>observer.observe(card));

}

/*====================================
      TESTIMONIAL SLIDER
====================================*/

const testimonialTrack = document.querySelector(".testimonial-track");

if (testimonialTrack) {

    const testimonialSlides = document.querySelectorAll(".testimonial-slide");
    const testimonialDots = document.querySelectorAll(".dot");
    const testimonialCards = document.querySelectorAll(".testimonial-card");

    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    let testimonialIndex = 0;
    let testimonialInterval;

    //============================
    // SHOW SLIDE
    //============================

    function showTestimonial(index){

        if(index >= testimonialSlides.length){

            testimonialIndex = 0;

        }

        else if(index < 0){

            testimonialIndex = testimonialSlides.length - 1;

        }

        else{

            testimonialIndex = index;

        }

        testimonialTrack.style.transform =
        `translateX(-${testimonialIndex * 100}%)`;

        testimonialDots.forEach(dot=>dot.classList.remove("active"));

        testimonialCards.forEach(card=>card.classList.remove("active"));

        testimonialDots[testimonialIndex].classList.add("active");

        testimonialCards[testimonialIndex].classList.add("active");

    }

    //============================
    // NEXT
    //============================

    function nextTestimonial(){

        showTestimonial(testimonialIndex + 1);

    }

    //============================
    // PREVIOUS
    //============================

    function previousTestimonial(){

        showTestimonial(testimonialIndex - 1);

    }

    //============================
    // AUTO PLAY
    //============================

    function startTestimonials(){

        testimonialInterval = setInterval(()=>{

            nextTestimonial();

        },5000);

    }

    function restartTestimonials(){

        clearInterval(testimonialInterval);

        startTestimonials();

    }

    //============================
    // BUTTONS
    //============================

    if(nextButton){

        nextButton.addEventListener("click",()=>{

            nextTestimonial();

            restartTestimonials();

        });

    }

    if(prevButton){

        prevButton.addEventListener("click",()=>{

            previousTestimonial();

            restartTestimonials();

        });

    }

    //============================
    // DOTS
    //============================

    testimonialDots.forEach((dot,index)=>{

        dot.addEventListener("click",()=>{

            showTestimonial(index);

            restartTestimonials();

        });

    });

    //============================
    // SMALL CARDS
    //============================

    testimonialCards.forEach((card,index)=>{

        card.addEventListener("click",()=>{

            showTestimonial(index);

            restartTestimonials();

        });

    });

    showTestimonial(0);

    startTestimonials();

}


const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", ()=>{

    nav.classList.toggle("active");

});