/****************************************** EXERCICE 8 *******************************************/

var alea = Math.floor(Math.random() * 9 + 1);
var resultat = 0;

for (var cpt = 1; cpt <= 10; cpt++) {
  resultat = alea * cpt;
  console.log(alea + " * " + cpt + " = " + resultat);
}
