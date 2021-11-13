/****************************************** EXERCICE 6 *******************************************/

var alea = Math.floor(Math.random(0, 1) * 2); // Pour récupérer un nombre entier => Math.floor(Math.random() * max)

if (alea === 0) {
  console.log(alea + " : Pile");
} else {
  console.log(alea + " : Face");
}
