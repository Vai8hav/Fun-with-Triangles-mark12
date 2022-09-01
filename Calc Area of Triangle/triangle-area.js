const firstS = document.querySelector("#first-side");
const secondS = document.querySelector("#second-side");
const thirdS = document.querySelector("#third-side");
const check = document.querySelector("#calc-area");
const output = document.querySelector("#output");

function calcArea(x) {
  x.preventDefault();

  const firstSVal = Number(firstS.value);
  const secondSVal = Number(secondS.value);
  const thirdSVal = Number(thirdS.value);

  if (
    firstSVal + secondSVal > thirdSVal && 
    secondSVal + thirdSVal > firstSVal && 
    firstSVal + thirdSVal > secondSVal) {

    const semiPer = (firstSVal + secondSVal + thirdSVal) / 2;

    let final = semiPer * (semiPer - firstSVal) * (semiPer - secondSVal) * (semiPer - thirdSVal)

    const result = Math.sqrt(final).toFixed(2);

    output.innerText = `Area of a triangle using heron's formula is ${result} units`;
  } 
  
  else {
    output.innerText = "Enter valid side lengths.";
  }
}

check.addEventListener("submit", calcArea);