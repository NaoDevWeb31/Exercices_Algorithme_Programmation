/****************************************** EXERCICE 20 *******************************************/

var readline = require("readline-sync");

var nombre1 = Math.floor(Math.random() * 20 + 1);
var nombre2 = Math.floor(Math.random() * 20 + 1);
var operation = Math.floor(Math.random() * 4 + 1);
var bonResultat = 0;

console.log("Quel est le résultat du calcul suivant : ");

switch (operation) {
  case 1:
    console.log(nombre1 + " + " + nombre2 + " = ");
    bonResultat = nombre1 + nombre2;
    break;
  case 2:
    console.log(nombre1 + " - " + nombre2 + " = ");
    bonResultat = nombre1 - nombre2;
    break;
  case 3:
    console.log(nombre1 + " * " + nombre2 + " = ");
    bonResultat = nombre1 * nombre2;
    break;
  case 4:
    console.log(nombre1 + " / " + nombre2 + " = ");
    bonResultat = nombre1 / nombre2;
    break;

  default:
    console.log("Erreur");
    break;
}

var reponseUtilisateur;
do {
  reponseUtilisateur = readline.questionInt("Quelle est votre réponse ? ");
  if (reponseUtilisateur === bonResultat) {
    console.log("Bonne réponse, félicitations !");
  } else {
    console.log("Mauvaise réponse, recommencez !");
  }
} while (reponseUtilisateur !== bonResultat);
