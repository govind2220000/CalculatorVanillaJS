const display = document.getElementById("input-box");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";
//console.log(input);
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    //If output has '%', replace with '/100' before evaluating.
    output = eval(output);
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    //If DEL button is clicked, remove the last character from the output.
    output = output.toString().slice(0, -1);
  } else {
    //If output is empty and button is specialChars then return
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  console.log(output);
  display.value = output;
};

//Adding event Listener for all the buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    calculate(e.target.dataset.value);
  });
});
