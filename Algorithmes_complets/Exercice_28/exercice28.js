/****************************************** EXERCICE 28 *******************************************/

var readline = require("readline-sync");

var longueur = readline.questionInt("Quelle est la longueur du rectangle ? ");
var largeur = readline.questionInt("Quelle est la largeur du rectangle ? ");

afficherMenu();

do {
  var saisie = readline.questionInt("Quel est votre choix ? : ");
} while (saisie != 1 && saisie != 2);

switch (saisie) {
  case 1:
    console.log(
      "Le périmètre d'un rectangle de " +
        longueur +
        " par " +
        largeur +
        " est de " +
        calculerPerimetre(longueur, largeur)
    );
    break;
  case 2:
    console.log(
      "L'aire d'un rectangle de " +
        longueur +
        " par " +
        largeur +
        " est de " +
        calculerAire(longueur, largeur)
    );
    break;
}

function afficherMenu() {
  var msg = "------------------------\n";
  msg += "----------Menu----------\n";
  msg += "1 : Périmètre\n";
  msg += "2 : Aire\n";
  msg += "------------------------\n";
  console.log(msg);
}

function calculerPerimetre(longueur, largeur) {
  return 2 * (longueur + largeur);
}

function calculerAire(longueur, largeur) {
  return longueur * largeur;
}
