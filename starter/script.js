'use strict';

const diceEl = document.getElementsByClassName('dice');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const btnNewGame = document.querySelector('.btn--new');

diceEl[0].classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;

// btnNewGame.addEventListener('click', function () {

// });

