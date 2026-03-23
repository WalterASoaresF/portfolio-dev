const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
const interests = document.querySelectorAll(".interest");
const textBox = document.querySelector("#text .title p");

const defaultText = textBox.textContent;

interests.forEach(item => {
  item.addEventListener("mouseenter", () => {
    const text = item.querySelector("p").textContent;
    textBox.textContent = text;
  });

  item.addEventListener("mouseleave", () => {
    textBox.textContent = defaultText;
  });
});
