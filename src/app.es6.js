let nameTab = [];

document.getElementById('btn').addEventListener('click', () => {

	let lol = document.getElementById('name').value;
	lol = lol.charAt(0).toUpperCase() + lol.substr(1).toLowerCase();

	if(lol === "") {

		document.getElementById("hello").innerHTML = "Bonjour le pere noel !";

	} else {

		nameTab.push(lol);
		document.getElementById("hello").innerHTML = `Bonjour ${lol}`;
		let tab =	document.body.appendChild(document.createElement('li')).innerHTML = lol;      
		console.log(nameTab)
		let prenom = document.getElementById('nom');
		let incName = document.createElement('option');
		let nameSrc = prenom.appendChild(incName).innerHTML = lol;
		console.log(nameSrc);

	}
});


