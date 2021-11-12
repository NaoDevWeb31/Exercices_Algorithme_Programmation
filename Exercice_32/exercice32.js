/****************************************** EXERCICE 32 *******************************************/

var tabFeu = ["_", "_", "_"];

// Feu rouge
setTimeout(function () {
  tabFeu[0] = "x";
  console.log(tabFeu[0] + " | " + tabFeu[1], " | " + tabFeu[2]);
  console.log("------------------");
}, 2000);

// Feu vert
setTimeout(function () {
  tabFeu[0] = "_";
  tabFeu[2] = "x";
  console.log(tabFeu[0] + " | " + tabFeu[1], " | " + tabFeu[2]);
  console.log("------------------");
}, 4000);

// Feu orange
setTimeout(function () {
  tabFeu[2] = "_";
  tabFeu[1] = "x";
  console.log(tabFeu[0] + " | " + tabFeu[1], " | " + tabFeu[2]);
  console.log("------------------");
}, 4500);
