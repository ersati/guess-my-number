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

 const randomNumber = Math.floor((Math.random() * 20) +1);

 number.textContent = randomNumber

function changeValue(){
if(enterValue.value > number){
    message.textContent = 'more'
} else if(enterValue.value < number){
    message.textContent = 'less'
}else if ( enterValue.value === number){
    message.textContent = 'you won '
}

}

 enterValue.addEventListener('change',changeValue);