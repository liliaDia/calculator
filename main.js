const OPPERATIONS_BOX = document.querySelector(".opperations-box");
const CLEAR_BUTTON = document.querySelector(".clear-button");
const EQUAL_BUTTON = document.querySelector(".equal-button");
const NEGATIVE_BUTTON = document.querySelector(".negative-button");

let opperand1 = null;
let opperand2 = null;
let opperator = null;
let shouldClearOperationsBox = false;
let isPositive = true;

const onNumberBtnClicked = (e) => {
  if (shouldClearOperationsBox) {
    OPPERATIONS_BOX.value = "";
    shouldClearOperationsBox = false;
  }

  OPPERATIONS_BOX.value += e.target.innerHTML;
};

const setNumberBtnClickHandlers = () => {
  const numberButtons = document.querySelectorAll(".number-button");

  numberButtons.forEach((button) => {
    button.addEventListener("click", onNumberBtnClicked);
  });
};

const onClearBtnClicked = () => {
  OPPERATIONS_BOX.value = "";
  opperand1 = null;
  opperand2 = null;
  opperator = null;
};

const onNegativeBtnClicked = () => {
  if (opperator) {
    console.log(opperator);
    OPPERATIONS_BOX.value = 0 - OPPERATIONS_BOX.value;
    opperand2 = 0 - OPPERATIONS_BOX.value;
  } else {
    OPPERATIONS_BOX.value = 0 - OPPERATIONS_BOX.value;
    opperand1 = 0 - OPPERATIONS_BOX.value;
  }
};

const onOperatorBtnClicked = (e) => {
  if (!OPPERATIONS_BOX.value) return;

  if (opperand1 && opperator) {
    performCalculation();
  }

  shouldClearOperationsBox = true;
  opperand1 = Number(OPPERATIONS_BOX.value);
  opperator = e.target.innerHTML;
};

const setOpperatorBtnClickHandlers = () => {
  const opperatorButtons = document.querySelectorAll(".opperator-button");

  opperatorButtons.forEach((opperatorButton) => {
    opperatorButton.addEventListener("click", onOperatorBtnClicked);
  });
};

const evaluateExpression = () => {
  switch (opperator) {
    case "+":
      return opperand1 + opperand2;
    case "-":
      return opperand1 - opperand2;
    case "/":
      return opperand1 / opperand2;
    case "*":
      return opperand1 * opperand2;
    default:
      return 0;
  }
};

const performCalculation = () => {
  if (!OPPERATIONS_BOX.value || !opperator) return;
  opperand2 = Number(OPPERATIONS_BOX.value);
  OPPERATIONS_BOX.value = evaluateExpression();
  opperand1 = null;
  opperand2 = null;
  opperator = null;
};

const onEqualBtnClicked = (e) => {
  if (!opperand1 && !opperator) return;
  performCalculation();
};

setNumberBtnClickHandlers();
setOpperatorBtnClickHandlers();
CLEAR_BUTTON.addEventListener("click", onClearBtnClicked);
EQUAL_BUTTON.addEventListener("click", onEqualBtnClicked);
NEGATIVE_BUTTON.addEventListener("click", onNegativeBtnClicked);

/*
when an operator is clicked we should set the first opperand and operator.
when a number is clicked and the operator is set clear input and insert number
*/
