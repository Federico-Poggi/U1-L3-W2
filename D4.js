/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
const areaRettangolo = function (l1, l2) {
  let result = l1 * l2;
  return result;
};
// per avere il risultato ho detto di stampare la variabile calcolandola con le proprietà.
console.log(areaRettangolo(6, 5));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (l3, l4) {
  let result = l3 + l4;
  if (l3 === l4) {
    return result * 3;
  } else {
    return result;
  }
};

console.log(crazySum(7, 7));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (y, x = 19) {
  let result = y - x;
  if (y > x) {
    return result * 3;
  } else {
    return result;
  }
};
console.log(crazyDiff(20));
console.log(crazyDiff(18));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if (n > 20 && n <= 100) {
    return true;
  } else if (n === 400) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(500));
console.log(boundary(50));
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
const myString = "";
const epify = function (myString) {
  if (myString === "EPICODE") {
    return myString;
  } else {
    return "EPICODE ".concat(myString);
  }
};
console.log(epify("gianni"));

console.log(epify("EPICODE"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
// let j = "number";
// if (j >= 0) {
//   const check3and7 = function (j) {
// if (j % 3) {
//   return "j is multiple of 3";
// } else if (j % 7) {
//   return "j is multiple of 7";
// } else {
//   return false;
// }
//   };
// }

// const check3and7 = function (j) {
//   let k = 0;
//   const modulo3 = j % 3;
//   const modulo7 = j % 7;
//   if (modulo3 !== k) {
//     if (modulo7 !== k) {
//       console.log("is't multiple of 7 or 3");
//     } else if (modulo7 == k;) {

//       console.log("is multiple of 7");
//     }
//   } else {
//     console.log("is multiple of 3");
//   }
// };

// console.log(check3and7(25));

const check3and7 = function (j) {
  let k = 0;
  const modulo3 = j % 3;
  const modulo7 = j % 7;
  if (modulo3 !== k) {
    if (modulo7 !== k) {
      return "isn'tmultiple of 7";
    } else if (modulo7 == k) {
      return "is multiple of 7";
    }
  } else if (modulo3 == k && modulo7 == k) {
    return "is multiple of 7 and 3";
  } else {
    return "is multiple of 3";
  }
};

console.log(check3and7(21));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
