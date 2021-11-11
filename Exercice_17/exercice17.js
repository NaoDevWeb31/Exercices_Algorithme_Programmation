/****************************************** EXERCICE 17 *******************************************/

var alea = Math.floor(Math.random() * 10 + 1);
var romain = "";

console.log("Nombre arabe : " + alea);

switch (alea) {
  case 1:
    romain = "I";
    break;
  case 2:
    romain = "II";
    break;
  case 3:
    romain = "III";
    break;
  case 4:
    romain = "IV";
    break;
  case 5:
    romain = "V";
    break;
  case 6:
    romain = "VI";
    break;
  case 7:
    romain = "VII";
    break;
  case 8:
    romain = "VIII";
    break;
  case 9:
    romain = "IX";
    break;
  case 10:
    romain = "X";
    break;
  default:
    console.log("Nombre non pris en compte");
}

if (romain != "") {
  console.log("Équivalent nombre romain : " + romain);
} else {
  console.log("Le nombre aléatoire généré n'est pas compris entre 1 et 10");
}
