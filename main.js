let rateNumbers = document.querySelectorAll(".a");
let currentRate = document.querySelector("#rate");
let submitButt = document.querySelector("button");
function brush() {
  rateNumbers.forEach((el) => (el.style = ""));
}
rateNumbers.forEach((el) =>
  el.addEventListener("click", (event) => {
    brush();
    event.target.style = "background:gray; color:white";
    currentRate.innerHTML = event.target.innerHTML;
  })
);

submitButt.addEventListener("click", () => {
  document.querySelector(".start").style = "display:none";
  document.querySelector(".end").style = "display:flex";
});
