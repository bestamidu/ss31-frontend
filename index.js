const toggleBtn = document.getElementById("toggleBtn");
const page = document.getElementById("page");

toggleBtn.addEventListener("click", () => {
  page.classList.toggle("light-mode");
});
