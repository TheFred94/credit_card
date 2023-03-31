const cardNumber = document.querySelector("#card");
const month = document.querySelector("#month");
const form = document.querySelector("form");

document.querySelector("#card").addEventListener("input", () => {
  console.log(cardNumber);
  if (cardNumber.value.length === 16) {
    console.log("value");
    form.elements.month.focus();
  }
});
document.querySelector("#month").addEventListener("input", () => {
  console.log(month);
  if (month.value.length === 4) {
    console.log("month");
    form.elements.cvc.focus();
  }
});
document.querySelector("#cvc").addEventListener("input", () => {
  console.log(cvc);
  if (cvc.value.length === 3) {
    console.log("month");
    form.elements.cvc.blur();
  }
});
