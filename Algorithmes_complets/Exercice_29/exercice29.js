/****************************************** EXERCICE 29 *******************************************/

var readline = require("readline-sync");

var choixPrincipal;
do {
  afficherMenuPrincipal();
  choixPrincipal = readline.question("Quel est votre choix ? : ");

  switch (choixPrincipal) {
    case "A":
      gererCercle();

      break;
    case "B":
      gererRectangle();

      break;
    case "Q":
      console.log("À + !");
      break;

    default:
      console.log("Cas non pris en compte, recommencez !");
      break;
  }
} while (choixPrincipal != "Q");

function afficherMenuPrincipal() {
  var msg = "------------------------\n";
  msg += "-----Menu Principal-----\n";
  msg += "A : Cercle\n";
  msg += "B : Rectangle\n";
  msg += "Q : Quitter\n";
  msg += "------------------------\n";
  console.log(msg);
}

function afficherMenu() {
  var msg = "------------------------\n";
  msg += "----------Menu----------\n";
  msg += "1 : Périmètre\n";
  msg += "2 : Aire\n";
  msg += "------------------------\n";
  console.log(msg);
}

function calculerAireCercle(rayon) {
  return rayon * rayon * Math.PI;
}

function calculerPerimetreCercle(rayon) {
  return 2 * rayon * Math.PI;
}

function gererCercle() {
  var rayon = readline.questionInt("Quel est le rayon du cercle ? ");

  afficherMenu();
  var saisie;

  do {
    saisie = readline.questionInt("Quel est votre choix ? : ");
  } while (saisie != 1 && saisie != 2);

  switch (saisie) {
    case 1:
      console.log(
        "Le périmètre d'un cercle de rayon " +
          rayon +
          " est de : " +
          calculerPerimetreCercle(rayon)
      );
      break;
    case 2:
      console.log(
        "L'aire d'un cercle de rayon " +
          rayon +
          " est de : " +
          calculerAireCercle(rayon)
      );
      break;
  }
}

function calculerPerimetreRectangle(longueur, largeur) {
  return 2 * (longueur + largeur);
}

function calculerAireRectangle(longueur, largeur) {
  return longueur * largeur;
}

function gererRectangle() {
  var longueur = readline.questionInt("Quelle est la longueur du rectangle ? ");
  var largeur = readline.questionInt("Quelle est la largeur du rectangle ? ");

  afficherMenu();
  var saisie;

  do {
    saisie = readline.questionInt("Quel est votre choix ? : ");
  } while (saisie != 1 && saisie != 2);

  switch (saisie) {
    case 1:
      console.log(
        "Le périmètre d'un rectangle de " +
          longueur +
          " par " +
          largeur +
          " est de " +
          calculerPerimetreRectangle(longueur, largeur)
      );
      break;
    case 2:
      console.log(
        "L'aire d'un rectangle de " +
          longueur +
          " par " +
          largeur +
          " est de " +
          calculerAireRectangle(longueur, largeur)
      );
      break;
  }
}
