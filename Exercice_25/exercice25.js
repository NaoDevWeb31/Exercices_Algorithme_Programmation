/****************************************** EXERCICE 25 *******************************************/

var readline = require("readline-sync");

var taille = readline.questionInt("Quelle taille voulez-vous ? ");

var ligne = "";

for (var cpt1 = 1; cpt1 <= taille; cpt1++) {
  ligne = ligne + "**";
}

var hauteur = "";

for (var cpt2 = 1; cpt2 <= taille; cpt2++) {
  if (cpt2 === 1 || cpt2 === taille) { // bordure de gauche || bordure de droite
    hauteur = hauteur + "**";
  } else {
    hauteur = hauteur + "  "; // intérieur du carré
  }
}

for (var cpt0 = 1; cpt0 <= taille; cpt0++) {
  if (cpt0 === 1 || cpt0 === taille) { // bordure du haut || bordure du bas
    console.log(ligne);
  } else {
    console.log(hauteur);
  }
}
