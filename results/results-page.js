//import { numOfThrows } from '../app.js';
import { CART } from '../constants.js';
//import { resultsArray } from '../app.js';
import { getLocalStorage } from '../utils.js'; 


const restartButton = document.getElementById('restartButton');
console.log(restartButton);

const pokemonCaptured = [];
const pokemonEncounters = [];
const pokemonLabels = [];


const pokeCart = getLocalStorage(CART);
//onst parsedItem = JSON.parse(pokeCart);
console.log(pokeCart);





for (let i = 0; i < pokeCart.length; i++) {
    const cartItem = pokeCart[i];

    pokemonCaptured.push(cartItem.captured);
    pokemonEncounters.push(cartItem.encountered);
    pokemonLabels.push(cartItem.id);

}
console.log(pokemonCaptured, pokemonEncounters, pokemonLabels);

// export {pokemonEncounters};
// export {pokemonCaptured};
// export {pokemonLabels};

restartButton.addEventListener('click', () => {

    localStorage.clear();
    window.location.href = '../index.html';
   
    
});

// THIS PRINTS TO THE POKEMON ENCOUNTERS DIV:
const encounterPrint = document.getElementById('pokemonEncounters');
encounterPrint.textContent = `Congratulations!!! This Pokemon journey is over. Here are your results:`;
// THIS PRINTS TO THE POKEMON CAPTURED DIV:
// const capturedPrint = document.getElementById('pokemonCaptured');
// capturedPrint.textContent = `Congratulations! You have captured these pokemon: ${pokemonCaptured}`;




// //~~~ BAR CHART HERE ~~~


const pokemonNumbers = pokeCart.map(item => item.captured);
console.log(pokemonNumbers);

const labels = pokeCart.map(item => item.id);

// const colors = [
//     'lavender',
//     'rgba(54, 162, 235, 0.2)',
//     'rgba(255, 206, 86, 0.2)',
//     'rgba(75, 192, 192, 0.2)',
//     'rgba(153, 102, 255, 0.2)',
//     'rgba(255, 159, 64, 0.2)'
// ];
// const borders = [
//     'orange',
//     'rgba(54, 162, 235, 1)',
//     'rgba(255, 206, 86, 1)',
//     'rgba(75, 192, 192, 1)',
//     'rgba(153, 102, 255, 1)',
//     'rgba(255, 159, 64, 1)',
// ];



const onlyCaptures = pokeCart.filter((item) => {
    return item.captured !== 0;
});

const capturedNames = onlyCaptures.map((pokeCart) => {
    return pokeCart.id;
});


const captured = onlyCaptures.map((pokeCart) => {
    return pokeCart.captured;
});




var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {

    type: 'bar',

    data: {
       
        labels: capturedNames,

        datasets: [{

            label: 'Number of Pokemon caught!',

            data: captured,

            // data2: pokemonEncounters,

            backgroundColor: [
                'lavender',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'orange',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 5

        }]
      
    },
    options: {
        scales: {
            // xAxes: [{ stacked: true }],
            yAxes: [{ stacked: false,
                ticks: { beginAtZero: true,
                    stepSize: 1 }, },  
            ]
        }
    }
});
var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {

    type: 'bar',

    data: {
       
        labels: pokemonLabels,

        datasets: [{

            label: 'Times Pokemon were encountered!',

            data: pokemonEncounters,

            // data2: pokemonEncounters,

            backgroundColor: [
                'lavender',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'lavender',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                
            ],
            borderColor: [
                'orange',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'orange',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 5

        }]
      
    },
    options: {
        scales: {
            // xAxes: [{ stacked: true }],
            yAxes: [{ stacked: false,
                ticks: { beginAtZero: true,
                    stepSize: 1 }, },  
            ]
        }
    }
});
