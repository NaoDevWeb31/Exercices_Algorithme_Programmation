/****************************************** EXERCICE 32 *******************************************/

// Récupérer les feux
var feuRouge = document.querySelector("#feu-rouge");
var feuOrange = document.querySelector("#feu-orange");
var feuVert = document.querySelector("#feu-vert");

// Donner couleurs off
feuRouge.classList.add("red-off");
feuOrange.classList.add("orange-off");
feuVert.classList.add("vert-off");

var tabFeu = ["_", "_", "_"];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function programme() {
  while (true) {
    // Feu rouge
    feuRouge.classList.remove("red-off");
    feuRouge.classList.add("red-on");
    feuOrange.classList.remove("orange-on");
    feuOrange.classList.add("orange-off");
    await sleep(2000);

    // Feu vert
    feuRouge.classList.add("red-off");
    feuRouge.classList.remove("red-on");
    feuVert.classList.remove("green-off");
    feuVert.classList.add("green-on");
    await sleep(2000);

    // Feu orange
    feuVert.classList.remove("green-off");
    feuVert.classList.add("green-on");
    feuOrange.classList.remove("orange-off");
    feuOrange.classList.add("orange-on");
    await sleep(500);
  }
}

programme();
