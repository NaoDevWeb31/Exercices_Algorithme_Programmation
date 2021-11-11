/****************************************** EXERCICE 9 *******************************************/

var alea = Math.floor(Math.random() * 20 + 1);

console.log("Nombre : " + alea);
console.log("Le nombre est divisible par : ");

for (var cpt = 0; cpt <= alea; cpt++) {
  if (alea % cpt === 0) {
    console.log(cpt);
  }
}
