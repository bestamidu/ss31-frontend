let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");
let modal = document.getElementById("myModal");
openBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});
