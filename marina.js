const cards = document.querySelectorAll(".section-card");
const backToTopButton = document.createElement("button");

backToTopButton.className = "back-to-top";
backToTopButton.type = "button";
backToTopButton.textContent = "↑";
backToTopButton.setAttribute("aria-label", "Върни се в началото");
document.body.appendChild(backToTopButton);

const showCards = () => {
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 80) {
      card.classList.add("is-visible");
    }
  });
};
const toggleBackToTop = () => {
  if (window.scrollY > 450) {
    backToTopButton.classList.add("is-visible");
  } else {
    backToTopButton.classList.remove("is-visible");
  }
};
window.addEventListener("scroll", () => {
  showCards();
  toggleBackToTop();
});
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

showCards();
toggleBackToTop();
