/****************************************** EXERCICE 26 *******************************************/

var readline = require("readline-sync");

var ligneSeparation = "------------------";

var nombre = readline.questionInt("Quelle est la factorielle voulue ? : ");

console.log(ligneSeparation);
console.log("Version boucle :");
console.log("La factorielle de " + nombre + " = " + factorielleBoucle(nombre));

console.log(ligneSeparation);
console.log("Version récursive :");
console.log(
  "La factorielle de " + nombre + " = " + factorielleRecursive(nombre)
);

function factorielleBoucle(factorielle) {
  var resultat = 1;
  for (var cpt = 1; cpt <= factorielle; cpt++) {
    resultat *= cpt;
  }
  return resultat;
}

function factorielleRecursive(factorielle) {
  if (factorielle <= 1) {
    return 1;
  } else {
    return factorielle * factorielleRecursive(factorielle - 1);
  }
}
