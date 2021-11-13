/****************************************** EXERCICE 12 *******************************************/

var readline = require("readline-sync");

var nombre = readline.questionInt("Saisir le nombre : ");
var puissance = readline.questionInt("Saisir la puissance : ");

var total1 = 1;
for (var cpt = 1; cpt <= puissance; cpt++) {
  total1 *= nombre;
}

var total2 = Math.pow(nombre, puissance);

console.log("Total sans fonction : " + total1);
console.log("Total avec fonction : " + total2);
