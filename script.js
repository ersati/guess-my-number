'use strict';
/* Elements */


const headline = document.querySelector('h1');
const reset = document.querySelector('.again');
const number = document.querySelector('.number');
const enterValue = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

let randomNumber = generateNumber();
let scoreNumber = 20
score.textContent = scoreNumber
let highscoreNumber = 0;

function generateNumber() {
    return Math.floor((Math.random() * 20) + 1)
}
function changeValue() {
    console.log(!enterValue.value, number, randomNumber)
    if(!enterValue.value){
        message.textContent = 'please put correct number inside the field'
        return
    }
    if (scoreNumber !== 0) {
        if (enterValue.value > randomNumber) {
            message.textContent = 'less'
            scoreNumber--
            score.textContent = scoreNumber
        } else if (enterValue.value < randomNumber) {
            message.textContent = 'more'
            scoreNumber--
            score.textContent = scoreNumber
        } else if (enterValue.value == randomNumber) {
            message.textContent = 'you won '
            document.body.style.backgroundColor ="green";
            number.textContent = randomNumber;
            checkButton.disabled = true;
            if(highscoreNumber < scoreNumber){
                highscoreNumber = scoreNumber;
                highscore.textContent = highscoreNumber;
            }
        }
    } else {
        message.textContent = 'you lost';
        document.body.style.backgroundColor = "red";
        checkButton.disabled = true;
    }
}

function resetGame() {
    randomNumber = generateNumber()
    number.textContent = '?';
    score.textContent = 20;
    scoreNumber = 20
    document.body.style.backgroundColor = "#222";
    message.textContent = 'Start guessing...';
    checkButton.disabled = false;
}

checkButton.addEventListener('click', changeValue);
reset.addEventListener('click', resetGame);