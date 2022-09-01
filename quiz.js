const quiz = document.querySelector(".quiz-form");
const check = document.querySelector("#submit-answers-btn");
const output = document.querySelector(".output");

const correctAns = [
    "Pythagoras",
    "120°",
    "Isoceles Triangle",
    "12, 16, 20",
    "Acute triangle",
    "100°",
    "50°",
    "a + b + c",
    "no",
    "45°",
];

function calculateScore() {
    const formResults = new FormData(quiz);
    let score = 0,
        index = 0;
    for (let value of formResults.values()) {
        if (value === correctAns[index]) {
        score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = "Your score is " + score;
}

check.addEventListener("click", calculateScore);