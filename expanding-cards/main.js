const cards = document.querySelectorAll(".card");

const removeActiveClass = () => {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
};
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    removeActiveClass();
    card.classList.add("active");
  });
});
