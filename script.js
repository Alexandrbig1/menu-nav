const menuBtn = document.querySelector(".menu-btn"),
  menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("change");
});
