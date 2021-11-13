/****************************************** EXERCICE 21 *******************************************/

var readline = require("readline-sync");

const TVA = 20;

console.log("Voici la liste des produits :");
console.log("1 - TV : 400€");
console.log("2 - Ordinateur : 700€");
console.log("3 - Téléphone : 200€");
console.log("4 - Portable : 900€");

var choix = 0;
var prix = 0;

while (choix < 1 || choix > 4) {
  var choix = readline.questionInt("Quel produit voulez-vous acheter ? ");
  switch (choix) {
    case 1:
      prix = 400;
      break;
    case 2:
      prix = 700;
      break;
    case 3:
      prix = 200;
      break;
    case 4:
      prix = 900;
      break;
    default:
      console.log("Produit inexistant, recommencez");
      break;
  }
}

var nbProduits = 0;

while (nbProduits <= 0) {
  var nbProduits = readline.questionInt("Combien de produit voulez-vous ? ");
}

console.log("Total HT : " + prix * nbProduits + "€");
console.log("Total TTC : " + prix * nbProduits * (1 + TVA / 100) + "€");
