const backToTopButton = document.createElement("button");
backToTopButton.className = "back-to-top";
backToTopButton.type = "button";
backToTopButton.textContent = "↑";
backToTopButton.setAttribute("aria-label", "Върни се в началото");
document.body.appendChild(backToTopButton);
const toggleBackToTopButton = () => {
  if (window.scrollY > 450) {
    backToTopButton.classList.add("is-visible");
  } else {
    backToTopButton.classList.remove("is-visible");
  }
};
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
window.addEventListener("scroll", toggleBackToTopButton);
toggleBackToTopButton();
