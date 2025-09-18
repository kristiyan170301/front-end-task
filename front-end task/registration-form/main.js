// CANNOT EDIT THIS FILE
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

document.getElementById("registrationForm").addEventListener("submit", (e) => {
  e.preventDefault();
});
