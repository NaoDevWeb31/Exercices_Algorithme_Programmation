/****************************************** EXERCICE 16 *******************************************/

var nombre1 = Math.floor(Math.random() * 20 + 1);
var nombre2 = Math.floor(Math.random() * 20 + 1);
var nombre3 = Math.floor(Math.random() * 20 + 1);

var petit = 0;
var grand = 0;

console.log(
  "nb1 :  " + nombre1 + " - nb2 :  " + nombre2 + " - nb3 :  " + nombre3
);

if (nombre1 <= nombre2 && nombre1 <= nombre3) {
  petit = nombre1;
} else if (nombre2 <= nombre3) {
  petit = nombre2;
} else {
  petit = nombre3;
}

if (nombre1 >= nombre2 && nombre1 >= nombre3) {
  grand = nombre1;
} else if (nombre2 >= nombre3) {
  grand = nombre2;
} else {
  grand = nombre3;
}

console.log(petit + " est le nombre le plus petit");
console.log(grand + " est le nombre le plus grand");
