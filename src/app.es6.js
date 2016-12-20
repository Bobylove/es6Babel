let nameTab = [];

document.getElementById('btn').addEventListener('click', () => {

	let lol = document.getElementById('name').value;
	lol = lol.charAt(0).toUpperCase() + lol.substr(1).toLowerCase();

	if(lol === "") {

		document.getElementById("hello").innerHTML = "salut le pere Z'oreils !";
	
	} else {

		nameTab.push(lol);
		document.getElementById("hello").innerHTML = `Salut ${lol}`;
		let tab =	document.body.appendChild(document.createElement('li.name')).innerHTML = lol;      
		console.log(nameTab)
	}
});

// var input = document.getElementById('recherche');
// input.onkeyup = function () {
//     var filter = input.value.toUpperCase();
//     var lis = document.getElementsByTagName('li');
//     for (var i = 0; i < lis.length; i++) {
//         var name = lis[i].getElementsByClassName('name')[0].innerHTML;
//         if (name.toUpperCase().indexOf(filter) == 0) 
//             lis[i].style.display = 'list-item';
//         else
//             lis[i].style.display = 'none';
//     }
// }


