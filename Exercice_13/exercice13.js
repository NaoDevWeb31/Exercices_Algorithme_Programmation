/****************************************** EXERCICE 13 *******************************************/

var readline = require("readline-sync");

var nombre = -1;
var nbEssai = 0;

do {
  nbEssai++;
  if (nbEssai > 1) {
    console.log("********** Essai numéro " + nbEssai + " **********");
  }

  var nombre = readline.questionInt(
    "Saisir un nombre pair et divisible par 3 : "
  );

  if (nombre % 2 != 0) {
    console.log("Le nombre n'est pas pair !");
  }

  if (nombre % 3 != 0) {
    console.log("Le nombre n'est pas divisible par 3 !");
  }
} while (nombre % 2 != 0 || nombre % 3 != 0);

console.log("******************************");
console.log("Le nombre " + nombre + " est divisible par 2 et par 3");
