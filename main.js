const btnEl = document.getElementById("btn");
const firstNumberEl = document.getElementById("first-number");
const secondNumberEl = document.getElementById("second-number");


function randNumber() {
    let n = Math.floor(Math.random() * 9) + 1;
    return n;
}



function checkResult() {
    let num1 = randNumber();
    let num2 = randNumber();
    firstNumberEl.innerText = num1;
    secondNumberEl.innerText = num2;
};



btnEl.addEventListener("click", checkResult);