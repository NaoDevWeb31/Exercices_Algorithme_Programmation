/****************************************** EXERCICE 37 *******************************************/

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
    case 3:
      console.log(tabUtilisateurs);
      var indiceUtilisateurAModifier = recupererUtilisateur(tabUtilisateurs);
      tabUtilisateurs[indiceUtilisateurAModifier][0] = readline.question(
        "Saisir le nouvel identifiant de l'utilisateur : "
      );
      tabUtilisateurs[indiceUtilisateurAModifier][1] = readline.question(
        "Saisir le nouveau password de l'utilisateur : "
      );
      tabUtilisateurs[indiceUtilisateurAModifier][2] = saisirRole();
      console.log(tabUtilisateurs);
      break;
    case 4:
      console.log(tabUtilisateurs);
      var indiceUtilisateurASUpprimer = recupererUtilisateur(tabUtilisateurs);
      for (var cpt = indiceUtilisateurASUpprimer; cpt < tabUtilisateurs.length - 1; cpt++) {
        tabUtilisateurs[cpt] = tabUtilisateurs[cpt + 1];
      }
      tabUtilisateurs.pop();
      console.log(tabUtilisateurs);
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
  msg += "3/ Modifier un utilisateur\n";
  msg += "4/ Supprimer un utilisateur\n";
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

function saisirRole() {
  var role;
  do {
    role = readline.question(
      "Saisir le rôle de l'utilisateur': admin / user / visiteur : "
    );
    if (role != "admin" && role != "user" && role != "visiteur") {
      console.log("Rôle invalide, recommencez !");
    }
  } while (role != "admin" && role != "user" && role != "visiteur");

  return role;
}

function creerUtilisateur() {
  var tabUtilisateur = [];

  tabUtilisateur[0] = readline.question("Saisir le login : ");
  tabUtilisateur[1] = readline.question("Saisir le mot de passe : ");
  tabUtilisateur[2] = saisirRole();

  return tabUtilisateur;
}

function rechercherUtilisateur(tabUtilisateurs, identifiant) {
  for (var cpt = 0; cpt < tabUtilisateurs.length; cpt++) {
    if (tabUtilisateurs[cpt][0] === identifiant) {
      return cpt;
    }
  }
  return -1;
}

function recupererUtilisateur(tabUtilisateurs) {
  var identifiant;
  var indiceTab = -1;
  do {
    identifiant = readline.question("Saisir l'identifiant de l'utilisateur : ");
    indiceTab = rechercherUtilisateur(tabUtilisateurs, identifiant);
    if (indiceTab === -1) {
      console.log("Identifiant inexistant, recommencez !");
    }
  } while (indiceTab === -1);

  return indiceTab;
}
