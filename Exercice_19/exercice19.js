/****************************************** EXERCICE 19 *******************************************/

var readline = require("readline-sync");

const DOLLAR = 1.22;
const ROUBLE = 91.14;
const YUAN = 7.89;
const LIVRE = 0.89;

var montant = readline.questionFloat("Saisir la somme en euro à convertir : ");
afficherMenuDevise();

var montantConverti = 0;
var devise;

do {
  devise = readline.question("Saisir la devise souhaitée : ");
  switch (devise) {
    case "$":
      montantConverti = DOLLAR * montant;
      break;
    case "Dollars":
      montantConverti = DOLLAR * montant;
      break;
    case "Roubles":
      montantConverti = ROUBLE * montant;
      break;
    case "Yuans":
      montantConverti = YUAN * montant;
      break;
    case "£":
      montantConverti = LIVRE * montant;
      break;
    case "Libres":
      montantConverti = LIVRE * montant;
      break;
    default:
      console.log("La devise choisie n'est pas prise en compte");
      break;
  }
} while (montantConverti === 0);

console.log(montant + "€ = " + montantConverti + " " + devise);

function afficherMenuDevise() {
  var msg = "****************************************\n";
  msg += "$ ou Dollars (US)\n";
  msg += "Roubles (Russie)\n";
  msg += "Yuans (Chine)\n";
  msg += "£ ou Livres (Royaume-Uni)\n";
  console.log(msg);
}
