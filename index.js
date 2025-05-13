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
const slides = document.querySelector('.swiper-slide');
const totalSlides = document.querySelectorAll('.image-slide').length;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // loop back to 0
  showSlide(currentIndex);
}

setInterval(nextSlide, 4000); // Change slide every 4 seconds

// Show first slide on load
showSlide(currentIndex);
