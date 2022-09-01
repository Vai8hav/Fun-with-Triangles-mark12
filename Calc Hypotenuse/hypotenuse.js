const sides = document.querySelectorAll(".side-input");
const check = document.querySelector("#check");
const output = document.querySelector(".output");

function calcSumOfSquare(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calcHypotenuse() {
  const sumOfSquares = calcSumOfSquare(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const hypoLength = Math.sqrt(sumOfSquares);
  output.innerText = "The length of hypotenuse is " + hypoLength;
}

check.addEventListener("click", calcHypotenuse);