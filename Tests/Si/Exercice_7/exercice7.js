/****************************************** EXERCICE 7 *******************************************/

var alea = Math.floor(Math.random(0, 20) * 21);
var msg = "";

if (alea < 7) {
  msg += "Bonjour";
} else if (alea < 14) {
  msg += "Salut";
} else {
  msg += "Hello";
}

console.log("Nombre : " + alea + "\n" + msg);
