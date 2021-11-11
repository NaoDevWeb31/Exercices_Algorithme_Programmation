/****************************************** EXERCICE 14 *******************************************/

var readline = require("readline-sync");

var alea = Math.floor(Math.random() * 100 + 1);
var nbSaisi = 0;
var nbEssai = 1;

console.log("Devinez le nombre choisi par l'ordinateur entre 1 et 100 !");

do {
  console.log("****************************************");
  console.log("Numéro de l'essai : " + nbEssai);
  nbEssai++;

  nbSaisi = readline.questionInt("Saisir un nombre : ");

  if (nbSaisi > alea) {
    console.log("Trop grand");
  }
  if (nbSaisi < alea) {
    console.log("Trop petit");
  }
} while (nbSaisi !== alea);

console.log("Félicitations ! Le nombre était : " + alea);
