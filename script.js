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

const randomNumber = Math.floor((Math.random() * 20) + 1);
let scoreNumber = 20
number.textContent = randomNumber
score.textContent = scoreNumber
let highscoreNumber = 0;
function changeValue() {
    console.log(!enterValue.value, number, randomNumber)
    if(!enterValue.value){
        message.textContent = 'please put correct number inside the field'
        return
    }
    if (scoreNumber !== 0) {
        if (enterValue.value > randomNumber) {
            message.textContent = 'more'
            scoreNumber--
            score.textContent = scoreNumber
        } else if (enterValue.value < randomNumber) {
            message.textContent = 'less'
            scoreNumber--
            score.textContent = scoreNumber
        } else if (enterValue.value == randomNumber) {
            message.textContent = 'you won '
            document.body.style.backgroundColor = "green";
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

checkButton.addEventListener('click', changeValue);