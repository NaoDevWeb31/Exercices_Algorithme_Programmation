/****************************************** EXERCICE 5 *******************************************/

var nom = "Tya GASTON";
var age = 20;
var sexe = false;

var msg = "Bonjour " + nom + "\n";

if (sexe) { // équivalent de sexe === true
  msg += "Vous êtes un homme";
  if (age >= 18) {
    msg += " majeur";
  } else {
    msg += " mineur";
  }
} else {
  msg += "Vous êtes une femme";
  if (age >= 18) {
    msg += " majeure";
  } else {
    msg += " mineure";
  }
}

console.log(msg);
