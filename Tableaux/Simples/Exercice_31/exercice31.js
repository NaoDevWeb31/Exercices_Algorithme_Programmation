/****************************************** EXERCICE 31 *******************************************/

var tabPrix = [5, 50, 23, 11];
var tabQte = [10, 1, 4, 3];
var total = 0;

for (let cpt = 0; cpt < tabPrix.length; cpt++) {
  total = total + tabPrix[cpt] * tabQte[cpt];
}

console.log("Le prix total est de : " + total);
