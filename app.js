// import functions and grab DOM elements
import { pokemonData } from './data.js';


const throwButton = document.querySelector('button');
const radios = document.querySelectorAll('input');
const images = document.querySelectorAll('label > img');

const resultsArray = [];

// initialize state
//let throws = 0;
//let remainingPokemon = 0;




export function getRandomPokemon(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}
refreshPokemon();
export function refreshPokemon() {
    //console.log(resultsArray);
    let selectionOne = getRandomPokemon(pokemonData);
    let selectionTwo = getRandomPokemon(pokemonData);
    let selectionThree = getRandomPokemon(pokemonData);

    //console.log(selectionTwo, selectionThree, selectionOne);


    while (selectionOne.id === selectionTwo.id || selectionTwo.id === selectionThree.id || selectionThree.id === selectionOne.id) {
        selectionTwo = getRandomPokemon(pokemonData);  
        selectionThree = getRandomPokemon(pokemonData);
    }
    // while (selectionTwo.id === selectionThree.id) {
    //     selectionTwo = getRandomPokemon(pokemonData);
    // }
    // while (selectionThree.id === selectionOne.id) {
    //     selectionThree = getRandomPokemon(pokemonData);
    // }

    radios[0].value = selectionOne.id;
    images[0].src = selectionOne.image;

    radios[1].value = selectionTwo.id;
    images[1].src = selectionTwo.image;

    radios[2].value = selectionThree.id;
    images[2].src = selectionThree.image;

    for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = false;
        radios[i].checked = false;
        images[i].style.opacity = 1;
    }

}

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];

        if (item.id === someId) {
            return item;
        }
    }
}

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', (e) => {
        // capturedPokemon++;
        // encounteredPokemon++;
        // capturedPokemonDiv.classList.toggle('hidden');

        radios.forEach ((radio) => {
            let pokemon = findById(resultsArray, (radio.value));
          //  console.log(radio.value);

            if (!pokemon) {
                //const newPokemon = 
                findById(pokemonData, (radio.value));
                pokemon = {
                    id: (radio.value),
                    //name: newPokemon.pokemon,
                    encountered: 1,
                    captured: 0,
                };
                resultsArray.push(pokemon);
            } else {
                pokemon.encountered++;
            } 
            for (let i = 0; i < radios.length; i++) {
                radios[i].disabled = false;
                radios[i].checked = false;
                images[i].style.opacity = 1;
            }

        });

        const capturedPokemon = findById(resultsArray, (e.target.value));
        if (capturedPokemon) {
            capturedPokemon.captured++;
        } console.log(capturedPokemon, resultsArray, 'look here!');


        for (let i = 0; i < radios.length; i++) {
            images[i].style.opacity = .5;
        }
    });
    console.log(radios);
}

throwButton.addEventListener('click', () => {
    //totalRounds++;
    refreshPokemon();

    //results.classlist.toggle('hidden');

    for (let i = 0; i < radios.length; i++) {
        images[i].style.opacity = 1;
    }
});
    







    // for (let i = 0; i < radios.length; i++) {
    //         radios[i].addEventListener('click', (e) => {
    //             // capturedPokemon++;
    //             // encounteredPokemon++;
    //             // capturedPokemonDiv.classList.toggle('hidden');
        
        // radios.forEach ((radio) => {
        //     let pokemon = findById(resultsArray, (radio.value));
        //     console.log(radio.value);
        
        
       
        
        //capturedPokemon = {
        //     id: (radio.value),
        //     name: capturedPokemon.pokemon,
        //     encountered: 1,
        //     captured: 1,
        //};
        //     resultsArray.push(capturedPokemon);
        // });
    


     
    // find out which radio button is checked
    // get the value of that radio button
    // find by ID that pokemon in results array
    // increment capture of that pokemon

     
        // function handleClick(radios) {
        //     alert('Old value: ' + currentValue);
        //     alert('New value: ' + myRadio.value);
        //     capturedPokemon = radios.value;
        // }

        // if (totalRounds === 10) {
        //     location.href = './results-page.html';
        // }
   

//randomPokemon();
//encounteredPokemon.push(

/*
function encounteredPokemonResult(array) {
let encounteredPokemonResult = (selectionOne && selectionTwo && selectionThree);
return array
};

function capturedPokemonResult(array) {
let capturedPokemonResult = encounteredPokemonResult.shuffle[2];
return array;
};
*/

//nextButton.addEventListener(click, []) 
// RECORDS ENCOUNTERED RESULT AND CAPTURED RESULT, AND RESETS VISIBLE ARRAY FOR NEXT CLICK. 
// AT TENTH CLICK SHOW ALL RESULTS ON RESULT PAGE.


        //LOCAL STORAGE???
/*
        throwButton.textContent = 'Add to cart';

        throwButton.addEventListener('click', () => {
            // get or initialize the cart
            // MAGIC STRING
            const encounteredPokemonLog = encounteredPokemonArray;
    
            // itemInCart will be either { id: 'apple', quantity: 2}, or undefined 
            const capturedPokemonLog = findById(cart, book.id);
    
            // is this the first apple in the cart?
            if (itemInCart === undefined) {
                // if its not in the cart, this is our first apple
                // so make a new cart item and put it in the array with quantity 1
    
                const newCartItem = {
                    id: book.id,
                    quantity: 1, 
                };
    
                cart.push(newCartItem);
            } else {
                // however, if i already have an apple, just increment the quantity of apples in the cart    
                itemInCart.quantity++;
            }
    
            setInLocalStorage(CART, cart);
        }) */
    



