/****************************************** EXERCICE 24 *******************************************/

var readline = require("readline-sync");

var nbMarches = readline.questionInt("Combien de marches ? ");

for (var cpt = 1; cpt <= nbMarches; cpt++) {
  var ligne = "_/";

  for (var cpt2 = nbMarches - 1; cpt2 >= cpt; cpt2--) {
    var decalage = "  ";
    ligne = decalage + ligne;
  }
  console.log(ligne);
}
