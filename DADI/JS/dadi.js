// DICHIARAZIONE VARIABILI
let numUser;
let numComputer;

// FUNZIONE PER GENERARE NUMERO RANDOM
// ASSEGNO IL VALORE RANDOM ALLE VARIBILI NUMUSER E NUMCOMPUTER
var randInt1 = Math.floor(Math.random() * 7);
numUser = randInt1;
console.log(numUser);
const outUser = document.getElementById("user");
outUser.innerHTML = "il tuo numero è <br>" + numUser;

var randInt2 = Math.floor(Math.random() * 7);
numComputer = randInt2;
console.log(numComputer);
const outPc = document.getElementById("pc");
outPc.innerHTML = "il numero del computer è <br>" + numComputer;

// CONFRONTO I DUE NUMERI E STAMPO IL RISULTATO
// SE VINCE L'UTENTE STAMPO IL MESSAGGIO "HAI VINTO"
if (numUser > numComputer) {
  console.log("Hai vinto");
  const outWinner = document.getElementById("result");
  // AGGIUNGI COLORE VERDE
  outWinner.classList.add("green");
  outWinner.innerHTML = "Hai vinto";
  // SE VINCE IL COMPUTER STAMPO IL MESSAGGIO "HAI PERSO"
} else if (numUser < numComputer) {
  console.log("Hai perso");
  const outWinner = document.getElementById("result");
  // AGGIUNGI COLORE ROSSO
  outWinner.classList.add("red");
  outWinner.innerHTML = "Hai perso";
  // SE PAREGGI IL COMPUTER STAMPO IL MESSAGGIO "HAI PAREGGIATO"
} else {
  console.log("Pareggio");
  const outWinner = document.getElementById("result");
  // AGGIUNGI COLORE GIALLO
  outWinner.classList.add("blue");
  outWinner.innerHTML = "Hai pareggiato";
}
