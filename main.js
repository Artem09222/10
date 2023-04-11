// let getTitle = document.querySelector('.main');
// let getButton = document.querySelector('.but');

// function printInfo(){
//     getTitle.style.color = 'red';
// }

let getButton = document.querySelector(".but");
let getTitle = document.querySelector(".output");
let getInput1 = document.querySelector(".text-input1");
let getInput2 = document.querySelector(".text-input2");

function printInfo() {
  let a = getInput1.value;
  let b = getInput2.value;
  getInput2 = Number(a);
  getInput1 = Number(b);
  let perimetr = (getInput1 + getInput2) * 2;
  getTitle.textContent = perimetr;
}

getButton.addEventListener("click", printInfo);

let getBut = document.querySelector(".button");
let getText = document.querySelector(".out");
let getInputs = document.querySelector(".text-inputs");
let getInput = document.querySelector(".text-input");

function printTitle() {
  let a = getInputs.value;
  let b = getInput.value;
  getInputs = Number(a);
  getInput = Number(b);
  let square = getInputs * getInput;
  getText.textContent = square;
}

getBut.addEventListener("click", printTitle);
