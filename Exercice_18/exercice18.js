/****************************************** EXERCICE 18 *******************************************/

var readline = require("readline-sync");

do {
  var langue = readline.question(
    "Choisir la langue : AL / EN / ES / PO / IT : "
  );
} while (
  langue != "AL" &&
  langue != "EN" &&
  langue != "ES" &&
  langue != "PO" &&
  langue != "IT"
);

switch (langue) {
  case "AL":
    console.log("Hallo");
    break;
  case "EN":
    console.log("Hello");
    break;
  case "ES":
    console.log("Buenos dias");
    break;
  case "PO":
    console.log("Ola");
    break;
  case "IT":
    console.log("Buongiorno");
    break;
  default:
    console.log("Langue non pris en compte");
}
