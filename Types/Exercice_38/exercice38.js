/****************************************** EXERCICE 38 *******************************************/

var readline = require("readline-sync");

var alea = Math.floor(Math.random() * 26 + 1);
var lettre = recupererLettre(alea);

var mot;
do {
  mot = readline.question(
    'Saisir un mot en commençant par un : "' + lettre + '" : '
  );

  if (mot[0].toLocaleLowerCase() != lettre) {
    console.log(
      'Le mot saisi ne commence pas par un "' + lettre + '", recommencez !'
    );
  }
} while (mot[0].toLocaleLowerCase() != lettre);

console.log("Parfait !");

function recupererLettre(nombre) {
  switch (nombre) {
    case 1:
      return "a";
      break;
    case 2:
      return "b";
      break;
    case 3:
      return "c";
      break;
    case 4:
      return "d";
      break;
    case 5:
      return "e";
      break;
    case 6:
      return "f";
      break;
    case 7:
      return "g";
      break;
    case 8:
      return "h";
      break;
    case 9:
      return "i";
      break;
    case 10:
      return "j";
      break;
    case 11:
      return "k";
      break;
    case 12:
      return "l";
      break;
    case 13:
      return "m";
      break;
    case 14:
      return "n";
      break;
    case 15:
      return "o";
      break;
    case 16:
      return "p";
      break;
    case 17:
      return "q";
      break;
    case 18:
      return "r";
      break;
    case 19:
      return "s";
      break;
    case 20:
      return "t";
      break;
    case 21:
      return "u";
      break;
    case 22:
      return "v";
      break;
    case 23:
      return "w";
      break;
    case 24:
      return "x";
      break;
    case 25:
      return "y";
      break;
    case 26:
      return "z";
      break;
    default:
      console.log("Lettre inexistante !");
      return "";
      break;
  }
}
