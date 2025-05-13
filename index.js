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
