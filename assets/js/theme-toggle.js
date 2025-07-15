document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved mode
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    toggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
const resumeToggle = document.getElementById("resume-toggle");
const resumeLinks = document.getElementById("resume-links");

resumeToggle.addEventListener("click", function (e) {
  e.preventDefault();
  resumeLinks.style.display = resumeLinks.style.display === "none" ? "block" : "none";
});
