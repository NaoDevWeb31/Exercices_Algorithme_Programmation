/****************************************** EXERCICE 30 *******************************************/

var tabNotes = [12, 14, 16, 18, 10, 11, 10, 13];
var moyenne = 0;

for (let cpt = 0; cpt < tabNotes.length; cpt++) {
  var note = tabNotes[cpt];
  if (note % 2 != 0) {
    note = note + 1;
  }
  moyenne += note;
}

moyenne /= tabNotes.length;
console.log("La moyenne est de : " + moyenne);
