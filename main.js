// let getTitle = document.querySelector('.main');
// let getButton = document.querySelector('.but');

// function printInfo(){
//     getTitle.style.color = 'red';
// }

// getButton.addEventListener('click', printInfo)

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
