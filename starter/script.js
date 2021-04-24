'use strict';

const diceEl = document.querySelector('.dice');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const currentScorePlayer0El = document.querySelector('#current--0');
const currentScorePlayer1El = document.getElementById('current--1');

let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];


diceEl.classList.add('hide--element');
score0El.textContent = 0;
score1El.textContent = 0;

btnRoll.addEventListener("click", function () {
  
  const randomDiceNumber = Math.trunc((Math.random() * 6)) + 1;
  diceEl.src = `dice-${randomDiceNumber}.png`;
  diceEl.classList.remove('hide--element');
  
  if (randomDiceNumber !== 1) {
    currentScore += randomDiceNumber;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    
    activePlayer = (activePlayer === 0 ? 1 : 0);
    
    // document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
    currentScore = 0;
  }
  
});



