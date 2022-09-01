const inputs = document.querySelectorAll(".angle-input");
const check = document.querySelector("#is-triangle-btn");
const output = document.querySelector(".output");

function sumOfAngles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
}

function isTriangle() {
  const sum = sumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sum === 180) {
    output.innerText = "Yay, the angles form a triangle! :)";
  } else {
    output.innerText = "Oh! The angles don't form a triangle :(";
  }
}

check.addEventListener("click", isTriangle);