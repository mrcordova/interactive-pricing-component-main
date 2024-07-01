const inputSlider = document.getElementById("slider");
const toggleDiscount = document.querySelector("input[type=checkbox]");
const pageViews = document.querySelector(".pageviews");
const monthlyAmount = document.querySelector("label[for='slider']>span");
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
const updatePageViews = (leftSide) => {
  pageViews.textContent = `${
    monthlyCharges[Math.floor(leftSide)][1]
  } PAGEVIEWS`;
};

const updateMonthlyAmount = (leftSide) => {
  monthlyAmount.textContent = `$${
    parseInt(monthlyCharges[Math.floor(leftSide)][0]) * discount
  }.00`;
};

const updateSlider = () => {
  const style = getComputedStyle(document.body);
  const softCyan = style.getPropertyValue("--Soft-Cyan");
  const lightGrayishBlue = style.getPropertyValue("--Ligh-Grayish-Blue");
  const leftSide = (inputSlider.value / max) * 100;
  const rightSide = 100 - leftSide;

  if (leftSide > 50.0) {
    inputSlider.style = `background: linear-gradient(to right, ${softCyan}, ${softCyan} ${leftSide}% , ${lightGrayishBlue} ${rightSide}%, ${lightGrayishBlue}`;
  } else {
    inputSlider.style = `background: linear-gradient(to left, ${lightGrayishBlue},  ${lightGrayishBlue} ${rightSide}%, ${softCyan} ${leftSide}%, ${softCyan}`;
  }

  updatePageViews(leftSide);
  updateMonthlyAmount(leftSide);
};
inputSlider.addEventListener("input", updateSlider);

toggleDiscount.addEventListener("click", (e) => {
  discount = e.currentTarget.checked ? 0.75 : 1;
  updateSlider();
});
