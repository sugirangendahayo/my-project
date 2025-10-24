const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuToggleBack = document.getElementById("menuToggleBack");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
menuToggleBack.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
