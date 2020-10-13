// import functions and grab DOM elements
import { pokemonData } from './data.js';


const captured = document.querySelector('#capturedPokemon');
const throwButton = document.querySelector('button');
const radios = document.querySelectorAll('input');
const images = document.querySelectorAll('label > img');


// initialize state
let capturedPokemon = 0;
let encounteredPokemon = 0;
//let throws = 0;
//let remainingPokemon = 0;

let capturedPokemonArray = [];
let encounteredPokemonArray = [];


for (let i = 0; i < radios.length; i++) {
    radios[i].disabled = false;
    radios[i].checked = false;
    images[i].style.opacity = 1;
}

function randomPokemon(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

let selectionOne = randomPokemon(pokemonData);
let selectionTwo = randomPokemon(pokemonData);
let selectionThree = randomPokemon(pokemonData);

while (selectionOne.id === selectionTwo.id) {
    selectionOne = randomPokemon(pokemonData);
}
while (selectionTwo.id === selectionThree.id) {
    selectionTwo = randomPokemon(pokemonData);
}
while (selectionThree.id === selectionOne.id) {
    selectionThree = randomPokemon(pokemonData);
}

radios[0].value = selectionOne.id;
images[0].src = selectionTwo.image;

radios[1].value = selectionTwo.id;
images[1].src = selectionTwo.image;

radios[2].value = selectionTwo.id;
images[2].src = selectionTwo.image;


for (let i = 0; i < radios.length; i++) {
radios[i].addEventListener('change', (e) => {
capturedPokemon++;
encounteredPokemon++;
capturedPokemonDiv.classList.toggle('hidden');

for (let i = 0; i < radios.length; i++) {
    radios[i].disabled = true;
    image[i].style.opacity = .5;
}

const userCapturedPokemon = e.target.value === userCapturedPokemon.id;
console.log(userCapturedPokemon);

if (userCapturedPokemon) {
    removeById(e.target.value);
    }

}
