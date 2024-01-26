const unemleh = document.getElementById("darah");
let hide = document.getElementById("tomUnemleh");
unemleh.addEventListener("click", () => {
  hide.style.display = "flex";
});
hide.addEventListener("click", () => {
  hide.style.display = "none";
});
