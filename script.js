const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const card = document.getElementById("flipcard");

card.addEventListener("click", () => {
  card.classList.toggle("flip");
});