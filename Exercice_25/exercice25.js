/****************************************** EXERCICE 25 *******************************************/

var readline = require("readline-sync");

var taille = readline.questionInt("Quelle taille voulez-vous ? ");

var ligne = "***************";
console.log(ligne);

for (var cpt = 1; cpt <= taille - 2; cpt++) {
  var hauteur = "**           **";
  console.log(hauteur);
}

console.log(ligne);
