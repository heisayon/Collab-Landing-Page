const mainContent = document.getElementById("main-content");
const hamburgerBtn = document.getElementById("hamburger");
const closeHamburgerBtn = document.getElementById("close-btn");
const mobileHamburger = document.getElementById("mobile-hamburger");
hamburgerBtn.addEventListener("click", () => {
  mainContent.style.display = "none";
  mainContent.classList.remove("main-content");
  mobileHamburger.classList.remove("hide");
});

closeHamburgerBtn.addEventListener("click", () => {
  mainContent.style.display = "block";
  mainContent.classList.add("main-content");
  mobileHamburger.classList.add("hide");
});
