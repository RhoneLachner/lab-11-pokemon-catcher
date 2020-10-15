import { pokemonData } from './data.js';
import { CART } from './constants.js';





export function getLocalStorage() {

    // go get localStorageTools from local storage and call them localStorageTools
    let localStorageResults = JSON.parse(localStorage.getItem(CART));

    // if there are no localStorageTools in local storage yet
    // if they've never been to the site
    if (!localStorageResults) {
        // go grab the hard coded localStorageResults, and SEED local storage with them
        const stringyCart = JSON.stringify(pokemonData);

        localStorage.setItem(CART, stringyCart);
        localStorageResults = pokemonData;
    }

    return localStorageResults;
}


export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    
    return JSON.parse(item);
}
    
    // setInLocalStorageFunction BEGINS HERE.
export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);
    
    localStorage.setItem(key, stringyItem);
    
    return value;
}
