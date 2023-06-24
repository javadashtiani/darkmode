document.getElementById("toggle").addEventListener("click", function (e) {
  document.getElementsByTagName("body")[0].classList.toggle("bgDark");
  document.getElementsByTagName("h2")[0].classList.toggle("colorTitle");
  e.target.classList.toggle("btnDark");
  document.querySelectorAll("h3").forEach(function (val) {
    val.classList.toggle("titleColor");
  });
  document.querySelectorAll(".time>span").forEach(function (val) {
    val.classList.toggle("spanColor");
  });
  document.querySelectorAll(".content>p").forEach(function (val) {
    val.classList.toggle("colorText");
  });
});
