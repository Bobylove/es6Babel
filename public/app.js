'use strict';

var nameTab = [];

document.getElementById('btn').addEventListener('click', function () {

	var lol = document.getElementById('name').value;
	lol = lol.charAt(0).toUpperCase() + lol.substr(1).toLowerCase();

	if (lol === "") {

		document.getElementById("hello").innerHTML = "salut le pere Z'oreils !";
	} else {

		nameTab.push(lol);
		document.getElementById("hello").innerHTML = 'Salut ' + lol;
		var tab = document.body.appendChild(document.createElement('li')).innerHTML = lol;
		console.log(nameTab);
		var prenom = document.getElementById('nom');
		var incName = document.createElement('option');
		var nameSrc = prenom.appendChild(incName).innerHTML = lol;
		console.log(nameSrc);
	}
});
