/****************************************** EXERCICE 40 *******************************************/

var readline = require("readline-sync");

afficherMenu();

const MSGCODE = "-... --- -. -. .  ..-. --- .-. -- .- - .. --- -.";
var choix;

do {
  choix = readline.questionInt("Quel est votre choix ? : ");

  switch (choix) {
    case 1:
      var msg = readline.question("Saisir le message : ");
      console.log(convertirMessageEnMorse(msg));
      break;
    case 2:
      console.log(decodeMessageMorse(MSGCODE));
      break;
    case 0:
      console.log("À +");
      break;
    default:
      console.log("Invalide, recommencez !");
      break;
  }
} while (choix != 0);

function afficherMenu() {
  var msg = "******************************\n";
  msg += "1/ Encoder un message\n";
  msg += "2/ Décoder un message\n";
  msg += "0/ Quitter\n";
  msg += "******************************";
  console.log(msg);
}

function convertirMessageEnMorse(msg) {
  var msgEnMorse = "";
  for (let cpt = 0; cpt < msg.length; cpt++) {
    msgEnMorse = msgEnMorse + lettreVersMorse(msg[cpt]) + " ";
  }
  return msgEnMorse;
}

function decodeMessageMorse(msg) {
  var msgDecode = "";
  var lettreMorse = "";

  for (let cpt = 0; cpt < msg.length; cpt++) {
    if (msg[cpt] != " ") {
      lettreMorse = lettreMorse + msg[cpt];
    }
    if (msg[cpt] === " " && msg[cpt - 1] === " ") {
      msgDecode = msgDecode + " ";
    }
    if (msg[cpt] === " " || cpt === msg.length - 1) {
      msgDecode = msgDecode + morseVersLettre(lettreMorse);
      lettreMorse = "";
    }
  }
  return msgDecode;
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

function morseVersLettre(symbole) {
  switch (symbole) {
    case ".-":
      return "a";
      break;
    case "-...":
      return "b";
      break;
    case "-.-.":
      return "c";
      break;
    case "-..":
      return "d";
      break;
    case ".":
      return "e";
      break;
    case "..-.":
      return "f";
      break;
    case "--.":
      return "g";
      break;
    case "....":
      return "h";
      break;
    case "..":
      return "i";
      break;
    case ".---":
      return "j";
      break;
    case "-.-":
      return "k";
      break;
    case ".-..":
      return "l";
      break;
    case "--":
      return "m";
      break;
    case "-.":
      return "n";
      break;
    case "---":
      return "o";
      break;
    case ".--.":
      return "p";
      break;
    case "--.-":
      return "q";
      break;
    case ".-.":
      return "r";
      break;
    case "...":
      return "s";
      break;
    case "-":
      return "t";
      break;
    case "..-":
      return "u";
      break;
    case "...-":
      return "v";
      break;
    case ".--":
      return "w";
      break;
    case "-..-":
      return "x";
      break;
    case "-.--":
      return "y";
      break;
    case "--..":
      return "z";
      break;
    case " ":
      return " ";
      break;
    default:
      return "";
      break;
  }
}
