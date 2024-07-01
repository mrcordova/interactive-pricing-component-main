const inputSlider = document.getElementById("slider");
const toggleDiscount = document.querySelector("input[type=checkbox]");
let discount = 1;
const max = parseInt(inputSlider.max);
const monthlyCharges = {
  0: ["00.00", "0k"],
  11: ["00.00", "0k"],
  22: ["08.00", "10k"],
  33: ["12.00", "50k"],
  44: ["16.00", "100k"],
  55: ["16.00", "100k"],
  66: ["24.00", "500k"],
  77: ["24.00", "500k"],
  88: ["24.00", "500k"],
  100: ["36.00", "1M"],
};
// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month
inputSlider.addEventListener("input", (e) => {
  const style = getComputedStyle(document.body);
  const softCyan = style.getPropertyValue("--Soft-Cyan");
  const lightGrayishBlue = style.getPropertyValue("--Ligh-Grayish-Blue");
  const leftSide = (e.currentTarget.value / max) * 100;
  const rightSide = 100 - leftSide;

  if (leftSide > 50.0) {
    e.currentTarget.style = `background: linear-gradient(to right, ${softCyan}, ${softCyan} ${leftSide}% , ${lightGrayishBlue} ${rightSide}%, ${lightGrayishBlue}`;
  } else {
    e.currentTarget.style = `background: linear-gradient(to left, ${lightGrayishBlue},  ${lightGrayishBlue} ${rightSide}%, ${softCyan} ${leftSide}%, ${softCyan}`;
  }

  const pageViewsAmount = e.currentTarget.parentElement.previousElementSibling;
  const monthlyAmount =
    e.currentTarget.nextElementSibling.querySelector("span");
  //   console.log(leftSide);
  //   console.log(Math.floor(leftSide));
  pageViewsAmount.textContent = `${
    monthlyCharges[Math.floor(leftSide)][1]
  } PAGEVIEWS`;
  monthlyAmount.textContent = `$${
    parseInt(monthlyCharges[Math.floor(leftSide)][0]) * discount
  }.00`;
});

toggleDiscount.addEventListener("click", (e) => {
  discount = e.currentTarget.checked ? 0.75 : 1;
});
