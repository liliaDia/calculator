const OPPERATIONS_BOX = document.querySelector(".opperations-box");

const onNumberBtnClicked = (e) => {
  OPPERATIONS_BOX.value += e.target.innerHTML;
};

const numberButtons = document.querySelectorAll(".number-button");

numberButtons.forEach((button) => {
  button.addEventListener("click", onNumberBtnClicked);
});

const onClearBtnClicked = () => {
  OPPERATIONS_BOX.target.innerHTML;
};
