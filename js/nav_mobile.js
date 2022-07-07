const doc = document;
//DOM
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
//EVENT LISTENERS THAT THROWS CALLBACK ON MENU menuOpen ACTION PERFORMED
menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});
//EVENT LISTENERS THAT THROWS CALLBACK ON MENU menuClosed ACTION PERFORMED

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});