const btnEl = document.getElementById("btn");
const firstNumberEl = document.getElementById("first-number");
const secondNumberEl = document.getElementById("second-number");
const answerEl = document.getElementById("answer");
const scoreEl = document.getElementById("score");
const plusMinusEl = document.getElementById("plus-minus");
const resetBtnEl = document.getElementById("reset");
const highestScoreEl = document.getElementById("highest-score");


// function disableBtn() {
//     while (answerEl.innerText === "") {
//         btnEl.disabled = true;
//     }
//     btnEl.disabled = false;
// }


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
        // plusMinusEl.innerText = "-";
        // plusMinusEl.style.display = "inline-block";
        // plusMinusEl.style.color = "red";
        // setTimeout(autoHidePlusMinus, 500);
        // scoreEl.innerText--;
        resetScore();
    }
    if (scoreEl.innerText < 0) scoreEl.innerText = 0;

    localStorage.setItem("score", scoreEl.innerText );
    checkHighestScore();
    highestScoreEl.innerText = localStorage.getItem("highest");
    firstNumberEl.innerText = randNumber();
    secondNumberEl.innerText = randNumber();
    answerEl.value = "";
    // disableBtn();
};

function resetScore() {
    localStorage.setItem("score", 0);
    scoreEl.innerText = localStorage.getItem("score");
};

function checkHighestScore() {
    let currentScore = localStorage.getItem("score");
    let highestScore = localStorage.getItem("highest");
    if (highestScore <= currentScore) {
        localStorage.setItem("highest", currentScore);
        
    }
};


scoreEl.innerText = localStorage.getItem("score");
highestScoreEl.innerText = localStorage.getItem("highest");
resetBtnEl.addEventListener("click", resetScore);
btnEl.addEventListener("click", checkResult);
answerEl.addEventListener("keyup", (event) => {
    if ( event.key === "Enter") {
      checkResult();
    }
  });