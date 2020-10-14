import { numOfThrows } from '../app.js';
import { CART } from './constants.js';

console.log(resultsSpan);
console.log(restartButton);

const item = localStorage.getItem(CART);
const parsedItem = JSON.parse(item);
console.log(item);

const pokemonCaptured = [];
const pokemonEncounters = [];
const pokemonLabels = [];


const restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click', () => {

    localStorage.clear();
    location.href = '../game-page.html';

});
//THIS PRINTS TO THE POKEMON ENCOUNTERS DIV:
// const encounterPrint = document.getElementById('pokemonEncounters');
// encounterPrint.textContent = `${resultsArray}`;
//THIS PRINTS TO THE POKEMON CAPTURED DIV:
// const capturedPrint = document.getElementById('pokemonCaptured');
// capturedPrint.textContent = `${resultsArray}`;

//~~~~FOR LOOP~~~~
for (let i = 0; i < parsedItem.length; i++) {
    const cartItem = parsedItem[i];

    pokemonCaptured.push(cartItem.captured);
    pokemonEncounters.push(cartItem.encountered);
    pokemonLabels.push(cartItem.name);
}


