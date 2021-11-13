/****************************************** EXERCICE 36 *******************************************/

var readline = require("readline-sync");

var tabUtilisateurs = [
  ["Tya", "test1", "admin"],
  ["Milo", "test2", "User"],
  ["Lili", "test3", "user"],
];

var choix;
do {
  afficherMenuPrincipal();
  choix = readline.questionInt("Quel est votre choix ? : ");

  switch (choix) {
    case 1:
      afficherUtilisateurs(tabUtilisateurs);
      break;
    case 2:
      tabUtilisateurs[tabUtilisateurs.length] =
        creerUtilisateur(tabUtilisateurs);
      break;
    case 9:
      console.log("À +");
      break;

    default:
      console.log("Cas non pris en compte, recommencez !");
      break;
  }
} while (choix != 9);

function afficherMenuPrincipal() {
  var msg = "*************************************************\n";
  msg += "1/ Afficher les utilisateurs\n";
  msg += "2/ Créer un utilisateur\n";
  msg += "9/ Quitter";
  console.log(msg);
}

function afficherUnUtilisateur(utilisateur) {
  console.log("*************************************************");
  console.log("*****************DÉBUT AFFICHAGE*****************");
  console.log("*************************************************");
  console.log("Identifiant de l'utilisateur : " + utilisateur[0]);
  console.log("Mot de passe de l'utilisateur : " + utilisateur[1]);
  console.log("Rôle de l'utilisateur : " + utilisateur[2]);
}

function afficherUtilisateurs(tabUtilisateurs) {
  for (var cpt = 0; cpt < tabUtilisateurs.length; cpt++) {
    if (cpt === tabUtilisateurs.length - 1) {
      afficherUnUtilisateur(tabUtilisateurs[cpt]);
      console.log("-----------------------FIN-----------------------");
    } else {
      afficherUnUtilisateur(tabUtilisateurs[cpt]);
    }
  }
}

function creerUtilisateur() {
  var tabUtilisateur = [];

  tabUtilisateur[0] = readline.question("Saisir le login : ");
  tabUtilisateur[1] = readline.question("Saisir le mot de passe : ");

  var role;
  do {
    role = readline.question("Saisir le rôle : admin / user / visiteur : ");
    if (role != "admin" && role != "user" && role != "visiteur") {
      console.log("Rôle invalide, recommencez !");
    }
  } while (role != "admin" && role != "user" && role != "visiteur");

  tabUtilisateur[2] = role;

  return tabUtilisateur;
}
