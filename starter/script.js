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
let isPlaying = true;

diceEl.classList.add('hide--element');
score0El.textContent = 0;
score1El.textContent = 0;

const switchPlayer = function () {
  
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  
  activePlayer = (activePlayer === 0 ? 1 : 0);
  
  document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
  currentScore = 0;
}

btnRoll.addEventListener("click", function () {
  if (isPlaying) {
    const randomDiceNumber = Math.trunc((Math.random() * 6)) + 1;
    diceEl.src = `dice-${randomDiceNumber}.png`;
    diceEl.classList.remove('hide--element');
    
    if (randomDiceNumber !== 1) {
      currentScore += randomDiceNumber;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer()      
    }
  }
});

btnHold.addEventListener("click", function () {
  if (isPlaying) {    
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];  
    console.log(activePlayer);
    if (scores[activePlayer] >= 10) {
      isPlaying = false;
      diceEl.classList.add('hide--element');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }  
})

btnNew.addEventListener("click", function () {
  
  isPlaying = true;
  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];
  const currentScoreEl = document.getElementsByClassName('current-score');
  const playerScoresEl = document.querySelectorAll('.score');
  for (let i = 0; i < scores.length; i++) {
    currentScoreEl[i].textContent = scores[i];
    playerScoresEl[i].textContent = scores[i];
  };
  
  document.querySelector('.player--0').classList.add('player--active');

  if (activePlayer === 1) {
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  } else {
    document.querySelector(`.player--0`).classList.remove('player--winner');
  };

})


