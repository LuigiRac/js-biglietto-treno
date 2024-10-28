// // Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// // - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

console.log("Hello World")
/* Obbiettivo: output prezzo del viaggio (max 2 decimali)
Variabili: 

Racccolta Dati
1. finalPrice = output finale
2. Constante = prezzo per km (priceKm = 0.21)
3. Constante = discount < 20% (discountJunior)
4. Constante = discount > 40% (discountSenior)
5. Constante = junior age < 18 anni (juniorAge)
6. Constante = Old age > 65 anni (oldAge)
*/

/*  Esecuzione */
const priceKm = 0.21;
const discountJunior = 20;
const discountSenior = 40;
const juniorAge = 17;
const oldAge = 65;

const km = parseInt (prompt("Quanti Km vuoi percorrere?"))
console.log("Kilometri: " + km);


const age = parseInt (prompt("Qual è la tua età"))
console.log("Eta: " + age);

// Calcolare il prezzo intero
let totalPrice = priceKm * km 
console.log(" totale: " + totalPrice)


// Condizioni

if (age < juniorAge) {
    // trovare il prezzo scontato del 20% discountJunior
    const priceKmJunior = (priceKm  - ( discountJunior * priceKm / 100));  // 0,21 - (20 * 0,21 / 100) = 0,21 - 0,042 = 0,168

    // calcolo prezzo scontato del
    totalPrice = priceKmJunior * km;
}


console.log("Prezzo totale: " + totalPrice.toFixed(2) + "€");