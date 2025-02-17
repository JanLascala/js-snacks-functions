/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.


function getVowels(str) {
    let numberofvowels = str.match(/[aeiou]/gi);
    return numberofvowels === null ? 0 : numberofvowels.length;

}

console.log(getVowels(word))




// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)