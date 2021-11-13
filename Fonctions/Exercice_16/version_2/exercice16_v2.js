/****************************************** EXERCICE 16 *******************************************/

function retournerValeurPlusPetite(nb1, nb2, nb3) {
  if (nb1 <= nb2 && nb1 <= nb3) {
    return nb1;
  } else if (nb2 <= nb3) {
    return nb2;
  } else {
    return nb3;
  }
}

function retournerValeurPlusGrande(nb1, nb2, nb3) {
  if (nb1 >= nb2 && nb1 >= nb3) {
    return nb1;
  } else if (nb2 >= nb3) {
    return nb2;
  } else {
    return nb3;
  }
}

var alea1 = Math.floor(Math.random() * 20 + 1);
var alea2 = Math.floor(Math.random() * 20 + 1);
var alea3 = Math.floor(Math.random() * 20 + 1);

var petit = retournerValeurPlusPetite(alea1, alea2, alea3);
var grand = retournerValeurPlusGrande(alea1, alea2, alea3);

console.log("nb1 : " + alea1 + " - nb2 : " + alea2 + " - nb3 :  " + alea3);

console.log(petit + " est le nombre le plus petit");
console.log(grand + " est le nombre le plus grand");
