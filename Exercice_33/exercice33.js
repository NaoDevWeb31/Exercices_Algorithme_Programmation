/****************************************** EXERCICE 33 *******************************************/

var readline = require("readline-sync");

var tabUtilisateurs = [
  ["Tya", "test1"],
  ["Milo", "test2"],
  ["Lili", "test3"],
];

var login, mdp, estConnecte;

do {
  login = readline.question("Saisir votre login : ");

  mdp = readline.question("Saisir votre mot de passe : ");

  estConnecte = verifierConnexionUtilisateur(tabUtilisateurs, login, mdp);

  if (!estConnecte) {
    console.log("Combinaison login / mot de passe incorrect, recommencez !");
  } else {
    console.log("Vous êtes connecté !");
  }
} while (!estConnecte);

function verifierConnexionUtilisateur(tabUtilisateurs, login, mdp) {
  for (var cpt = 0; cpt < tabUtilisateurs.length; cpt++) {
    if (login === tabUtilisateurs[cpt][0] && mdp === tabUtilisateurs[cpt][1]) {
      return true;
    }
  }
  return false;
}
