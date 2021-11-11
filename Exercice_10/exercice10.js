/****************************************** EXERCICE 10 *******************************************/

var readline = require("readline-sync");

var nombre = readline.questionInt("Quel nombre voulez-vous ? : ");

console.log("Les 5 nombres précédents sont : ");
for (var cpt = nombre - 1; cpt >= nombre - 5; cpt--) {
  console.log(cpt);
}

console.log("Les 5 nombres suivants sont : ");
for (var cpt = nombre + 1; cpt <= nombre + 5; cpt++) {
  console.log(cpt);
}
