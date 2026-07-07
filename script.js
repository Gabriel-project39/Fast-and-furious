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
