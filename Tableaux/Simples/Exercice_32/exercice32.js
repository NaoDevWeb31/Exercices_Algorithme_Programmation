/****************************************** EXERCICE 32 *******************************************/

var tabFeu = ["_", "_", "_"];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function programme() {
  while (true) {
    // Feu rouge
    tabFeu[1] = "_";
    tabFeu[0] = "x";
    console.log(tabFeu[0] + " | " + tabFeu[1], " | " + tabFeu[2]);
    console.log("------------------");
    await sleep(2000);

    // Feu vert
    tabFeu[0] = "_";
    tabFeu[2] = "x";
    console.log(tabFeu[0] + " | " + tabFeu[1], " | " + tabFeu[2]);
    console.log("------------------");
    await sleep(2000);

    // Feu orange
    tabFeu[2] = "_";
    tabFeu[1] = "x";
    console.log(tabFeu[0] + " | " + tabFeu[1], " | " + tabFeu[2]);
    console.log("------------------");
    await sleep(500);
  }
}

programme();
