const limitNumForm = document.querySelector("#limitNumForm");
const limitNumInput = document.querySelector("#limitNumForm input");

const guessNumFormBtn = document.querySelector("#guessNumForm button");
const guessNumInput = document.querySelector("#guessNumForm input");

const h3 = document.querySelector("#h3");
const YouWon = document.querySelector("#YouWon");
const YouLost = document.querySelector("#YouLost");

const WRITTEN_LIMIT_NUM = "writtenLimitNum";
const HIDDEN = "hidden";

function handleLimitNumForm(event){
    event.preventDefault();
    const writtenLimitNum = parseInt(limitNumInput.value);

    if (writtenLimitNum < 0 || isNaN(writtenLimitNum)){
        alert("Please write a number over 0");
    } else {
        localStorage.setItem(WRITTEN_LIMIT_NUM, writtenLimitNum);
    }
}

function handleGuessNumFormBtn(event){
    event.preventDefault();
    const writtenLimitNumInLocal = localStorage.getItem(WRITTEN_LIMIT_NUM);
    const machineChoseNum = Math.ceil(Math.random()*writtenLimitNumInLocal);
    const writtenGuessNum = parseInt(guessNumInput.value);

    h3.innerText = `you chose: ${writtenGuessNum}, the machine chose: ${machineChoseNum}.`;

    if (writtenGuessNum === machineChoseNum){
        YouLost.classList.add(HIDDEN);
        YouWon.classList.remove(HIDDEN);
    } else {
        YouWon.classList.add(HIDDEN);
        YouLost.classList.remove(HIDDEN);
    }
}

limitNumForm.addEventListener("submit", handleLimitNumForm);
guessNumFormBtn.addEventListener("click", handleGuessNumFormBtn);