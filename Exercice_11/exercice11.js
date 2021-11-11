/****************************************** EXERCICE 11 *******************************************/

var readline = require("readline-sync");

var separateur = "*",
  ligneSeparation = "";

for (let cpt = 1; cpt <= 30; cpt++) {
  ligneSeparation += separateur;
}

console.log(ligneSeparation);
console.log("Merci de saisir vos informations personnelles !");
console.log(ligneSeparation);

var prenom = readline.question("Saisir votre prénom : ");
var nom = readline.question("Saisir votre nom : ");
var adresse = readline.question("Saisir votre adresse : ");
var codePostal = readline.questionInt("Saisir votre code postal : ");
var ville = readline.question("Saisir votre ville : ");

console.log(ligneSeparation);
console.log("Vous avez saisi : ");
console.log(prenom + " " + separateur + " " + nom);
console.log(adresse);
console.log(codePostal + " " + separateur + " " + ville);
console.log("À bientôt");
console.log(ligneSeparation);
