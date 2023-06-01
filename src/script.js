const linhas = document.querySelector(".linhas");
const nav = document.querySelector(".nav-menu");

linhas.addEventListener("click", () => {
  linhas.classList.toggle('active');
  nav.classList.toggle('active');
});