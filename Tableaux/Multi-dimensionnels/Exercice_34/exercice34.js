/****************************************** EXERCICE 34 *******************************************/

var readline = require("readline-sync");

var tabUtilisateurs = [
  ["Tya", "test1", "admin"],
  ["Milo", "test2", "User"],
  ["Lili", "test3", "user"],
];

function estConnecte(tabUtilisateurs, login, password) {
  for (var cpt = 0; cpt < tabUtilisateurs.length; cpt++) {
    if (login === tabUtilisateurs[cpt][0] && password === tabUtilisateurs[cpt][1]) {
      return tabUtilisateurs[cpt][2];
    }
  }
  return "";
}

var login, mdp, role;
var nbEssaisRestants = 1;
const NBESSAITOTAL = 3;

do {
  login = readline.question("Saisir votre login : ");
  mdp = readline.question("Saisir votre password : ");
  role = estConnecte(tabUtilisateurs, login, mdp);

  if (role === "") {
    console.log("Combinaison login / password incorrect, " + (NBESSAITOTAL - nbEssaisRestants) + " essais");
    nbEssaisRestants++;
  }
} while (role === "" && nbEssaisRestants <= NBESSAITOTAL);

if (nbEssaisRestants > NBESSAITOTAL) {
  console.log("Vous avez essayé trop de fois !\nFin du programme !");
} else {
  console.log("Vous êtes connecté et vos accès sont : " + role);
}
