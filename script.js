const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    if (body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "🌙"; // Dark mode
    } else {
        toggleBtn.textContent = "🌞"; // Light mode
    }
});
let currentIndex = 0;
const slides = document.querySelector('.swiper-slides');
const totalSlides = document.querySelectorAll('.image-slide').length;

function showSlide(index, animate = true) {
  if (animate) {
    slides.style.transition = 'transform 1s ease-in-out';
  } else {
    slides.style.transition = 'none';
  }
  slides.style.transform = `translateX(-${index * 100}vw)`;
}

function nextSlide() {
  currentIndex++;
  
  if (currentIndex < totalSlides) {
    showSlide(currentIndex);
  } else {
    // Quickly jump back to first slide without animation
    currentIndex = 0;
    showSlide(currentIndex, false);
  }
}

setInterval(nextSlide, 4000);
showSlide(currentIndex);

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

cards.forEach((card)=>{

observer.observe(card);

});