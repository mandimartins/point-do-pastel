const menuCards = document.querySelectorAll(".menu-card");

window.addEventListener("scroll", checkMenuCards);

checkMenuCards();
function checkMenuCards() {
  const triggerPoint = (window.innerHeight / 5) * 4;

  menuCards.forEach((menuCard) => {
    const menuCardRelativeToTop = menuCard.getBoundingClientRect().top;

    if (menuCardRelativeToTop < triggerPoint) {
      menuCard.classList.add("menu-card--show");
    } else {
      menuCard.classList.remove("menu-card--show");
    }
  });
}
