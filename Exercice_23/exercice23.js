/****************************************** EXERCICE 23 *******************************************/

var mois = "Janvier";
var nbJours = nbJoursMensuel(mois, 2019);
if (nbJours != 0) {
  console.log(nbJours + " jours en " + mois + " 2019");
} else {
  console.log("Le mois n'est pas pris en compte");
}

mois = "Février";
nbJours = nbJoursMensuel(mois, 2019);
if (nbJours != 0) {
  console.log(nbJours + " jours en " + mois + " 2019");
} else {
  console.log("Le mois n'est pas pris en compte");
}

mois = "Février";
nbJours = nbJoursMensuel(mois, 2020);
if (nbJours != 0) {
  console.log(nbJours + " jours en " + mois + " 2020");
} else {
  console.log("Le mois n'est pas pris en compte");
}

mois = "Novembre";
nbJours = nbJoursMensuel(mois, 2020);
if (nbJours != 0) {
  console.log(nbJours + " jours en " + mois + " 2020");
} else {
  console.log("Le mois n'est pas pris en compte");
}

function estBissextile(annee) {
  return ((annee % 4 === 0 && annee % 100 != 0) || annee % 400 === 0);
}

function nbJoursMensuel(mois, annee) {
  switch (mois) {
    case "Janvier":
      return 31;
      break;
    case "Février":
      if (estBissextile(annee)) {
        return 29;
      } else {
        return 28;
      }
      break;
    case "Mars":
      return 31;
      break;
    case "Avril":
      return 30;
      break;
    case "Mai":
      return 31;
      break;
    case "Juin":
      return 30;
      break;
    case "Juillet":
      return 31;
      break;
    case "Août":
      return 31;
      break;
    case "Septembre":
      return 30;
      break;
    case "Octobre":
      return 31;
      break;
    case "Novembre":
      return 30;
      break;
    case "Décembre":
      return 31;
      break;
    default:
      return 0;
      break;
  }
}
