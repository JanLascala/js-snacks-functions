/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
console.log(name)


// Dichiara la funzione qui.

function greet(name) {
    let day = new Date();
    let hour = day.getHours();
    if (hour > 18) {
        console.log("buona sera" + " " + (name));
    } else {
        console.log("buongiorno" + " " + (name));

    }

}


/* best i could do*/



// Invoca la funzione qui e stampa il risultato in console

greet(name)

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.