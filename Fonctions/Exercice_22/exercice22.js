/****************************************** EXERCICE 22 *******************************************/

function estBissextile(annee) {
  return ((annee % 4 === 0 && annee % 100 != 0) || annee % 400 === 0);
}

function affichageAnneeBissextile(annee) {
  var msg = annee + " est une année ";
  if (!estBissextile(annee)) {
    msg += "non ";
  }
  msg += "bissextile";
  console.log(msg);
}

affichageAnneeBissextile(1900);
affichageAnneeBissextile(2000);
affichageAnneeBissextile(2020);
