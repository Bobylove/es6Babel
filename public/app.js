"use strict";

var nameTab = [];

var sayMyName = function sayMyName() {
	var lol = document.getElementById('name').value;
	if (lol === "") {
		document.getElementById("hello").innerHTML = "salut le pere Z'oreils !";
	} else {
		document.getElementById("hello").innerHTML = "Salut " + lol;
		var tab = document.body.appendChild(document.createElement('li')).innerHTML = lol;
		nameTab.push(lol);
		console.log(nameTab);
	}
};
