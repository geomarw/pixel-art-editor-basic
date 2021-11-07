let colorSelected = "black";

document.addEventListener("click", function (event) {
  const element = event.target;

  if (element.classList.contains("pixel")) {
    element.style.backgroundColor = colorSelected;
  } else if (element.classList.contains("color")) {
    colorSelected = element.style.backgroundColor;
  }
});
