/****************************************** EXERCICE 15 *******************************************/

var readline = require("readline-sync");

var nombre1 = saisirNote();
var nombre2 = saisirNote();
var nombre3 = saisirNote();
var moyenne = (nombre1 + nombre2 + nombre3) / 3;

console.log("La moyenne est de " + moyenne);

function saisirNote() {
  var saisie = readline.questionInt("Saisir une note entre 0 et 20 : ");

  while (saisie < 0 || saisie > 20) {
    saisie = readline.questionInt("Mauvaise saisie, recommencez : ");
  }
  return saisie;
}
