document.addEventListener("DOMContentLoaded", function() {
    let darkModeBtn = document.getElementById("darkModeBtn");
    darkModeBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});
