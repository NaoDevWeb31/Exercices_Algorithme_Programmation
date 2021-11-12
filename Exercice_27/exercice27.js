/****************************************** EXERCICE 27 *******************************************/

var readline = require("readline-sync");

var rayon = readline.questionInt("Quel est le rayon du cercle ? ");

afficherMenu();

do {
  var saisie = readline.questionInt("Quel est votre choix ? : ");
  switch (saisie) {
    case 1:
      console.log(
        "Le périmètre d'un cercle de rayon " +
          rayon +
          " est de : " +
          calculerPerimetre(rayon)
      );
      break;
    case 2:
      console.log(
        "L'aire d'un cercle de rayon " +
          rayon +
          " est de : " +
          calculerAire(rayon)
      );
      break;
  }
} while (saisie != 1 && saisie != 2);

function afficherMenu() {
  var msg = "------------------------\n";
  msg += "----------Menu----------\n";
  msg += "1 : Périmètre\n";
  msg += "2 : Aire\n";
  msg += "------------------------";
  console.log(msg);
}

function calculerAire(rayon) {
  return rayon * rayon * Math.PI;
}

function calculerPerimetre(rayon) {
  return 2 * rayon * Math.PI;
}
