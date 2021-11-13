/****************************************** EXERCICE 4 *******************************************/

var nom = "Tya GASTON";
var age = 20;
var sexe = false;

console.log("Bonjour " + nom);

if (sexe) { // équivalent de sexe === true
  console.log("Vous êtes un homme");
} else {
  console.log("Vous êtes une femme");
}

if (age >= 18) {
  console.log("Vous êtes majeur(e)");
} else {
  console.log("Vous êtes mineur(e)");
}
