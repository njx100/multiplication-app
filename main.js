const btnEl = document.getElementById("btn");
const firstNumberEl = document.getElementById("first-number");
const secondNumberEl = document.getElementById("second-number");
const answerEl = document.getElementById("answer");
const scoreEl = document.getElementById("score");
const plusMinusEl = document.getElementById("plus-minus");
const resetBtnEl = document.getElementById("reset");
const highestScoreEl = document.getElementById("highest-score");

function randNumber() {
    let n = Math.floor(Math.random() * 9) + 1;
    return n;
}

function autoHidePlusMinus() {
    plusMinusEl.style.display = "none";
}

firstNumberEl.innerText = randNumber();
secondNumberEl.innerText = randNumber();

function checkResult() {
    let num1 = firstNumberEl.innerText;
    let num2 = secondNumberEl.innerText;
    let multiple = num1 * num2;

    if (multiple == answerEl.value ) {
        
        plusMinusEl.innerText = "+";
        plusMinusEl.style.display = "inline-block";
        plusMinusEl.style.color = "green";
        setTimeout(autoHidePlusMinus, 500);
        scoreEl.innerText++;
    } else {
        
        plusMinusEl.innerText = "-";
        plusMinusEl.style.display = "inline-block";
        plusMinusEl.style.color = "red";
        setTimeout(autoHidePlusMinus, 500);
        scoreEl.innerText--;
    }
    if (scoreEl.innerText < 0) scoreEl.innerText = 0;
    localStorage.setItem("score", scoreEl.innerText );
    firstNumberEl.innerText = randNumber();
    secondNumberEl.innerText = randNumber();
    answerEl.value = "";
};

function resetScore() {
    localStorage.setItem("score", 0);
    scoreEl.innerText = localStorage.getItem("score");
};

// function checkHighestScore() {
//     let 
//     if ()
// }

scoreEl.innerText = localStorage.getItem("score");

resetBtnEl.addEventListener("click", resetScore);
btnEl.addEventListener("click", checkResult);