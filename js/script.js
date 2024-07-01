const inputSlider = document.getElementById("slider");
const max = parseInt(inputSlider.max);
inputSlider.addEventListener("input", (e) => {
  const style = getComputedStyle(document.body);
  const softCyan = style.getPropertyValue("--Soft-Cyan");
  const lightGrayishBlue = style.getPropertyValue("--Ligh-Grayish-Blue");
  const leftSide = (e.currentTarget.value / max) * 100;
  const rightSide = 100 - leftSide;

  console.log("left", leftSide);
  console.log("right", rightSide);
  console.log(e.currentTarget.value);

  if (leftSide > 50.0) {
    e.currentTarget.style = `background: linear-gradient(to right, ${softCyan}, ${softCyan} ${leftSide}% , ${lightGrayishBlue} ${rightSide}%, ${lightGrayishBlue}`;
  } else {
    e.currentTarget.style = `background: linear-gradient(to left, ${lightGrayishBlue},  ${lightGrayishBlue} ${rightSide}%, ${softCyan} ${leftSide}%, ${softCyan}`;
  }
});
