/****************************************** EXERCICE 39 *******************************************/

var readline = require("readline-sync");

var msg = readline.question("Saisir le message : ");

console.log(convertirMessageEnMorse(msg));

function convertirMessageEnMorse(msg) {
  var msgEnMorse = "";
  for (let cpt = 0; cpt < msg.length; cpt++) {
    msgEnMorse = msgEnMorse + lettreVersMorse(msg[cpt]) + " ";
  }
  return msgEnMorse;
}

function lettreVersMorse(lettre) {
  switch (lettre.toLocaleLowerCase()) {
    case "a":
      return ".-";
      break;
    case "b":
      return "-...";
      break;
    case "c":
      return "-.-.";
      break;
    case "d":
      return "-..";
      break;
    case "e":
      return ".";
      break;
    case "f":
      return "..-.";
      break;
    case "g":
      return "--.";
      break;
    case "h":
      return "....";
      break;
    case "i":
      return "..";
      break;
    case "j":
      return ".---";
      break;
    case "k":
      return "-.-";
      break;
    case "l":
      return ".-..";
      break;
    case "m":
      return "--";
      break;
    case "n":
      return "-.";
      break;
    case "o":
      return "---";
      break;
    case "p":
      return ".--.";
      break;
    case "q":
      return "--.-";
      break;
    case "r":
      return ".-.";
      break;
    case "s":
      return "...";
      break;
    case "t":
      return "-";
      break;
    case "u":
      return "..-";
      break;
    case "v":
      return "...-";
      break;
    case "w":
      return ".--";
      break;
    case "x":
      return "-..-";
      break;
    case "y":
      return "-.--";
      break;
    case "z":
      return "--..";
      break;
    case " ":
      return " ";
      break;
    default:
      return "";
      break;
  }
}
