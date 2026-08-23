let display = document.querySelector(".row1");
let cancel = document.querySelector(".cancel");

function appendValue(text) {
  if (
    display.innerText === "0" ||
    display.innerText === "Error" ||
    display.innerText === "Infinity"
  ) {
    display.innerText = text;
    return;
  }
  display.innerHTML = `${display.innerText}${text}`;
}

function clearDisplay() {
  display.innerHTML = "0";
}

function calculate() {
  try {
    let result = eval(display.innerText);
    if (result === undefined || typeof result === "function") {
      display.innerHTML = "Error";
      return;
    }
    display.innerHTML = result;
  } catch (error) {
    display.innerHTML = "Error";
  }
}