var femaleNames = ['Asia', 'Kasia', 'Ola', 'Magda'], //['Asia', 'Kasia', 'Ola', 'Marysia', 'Magda'],
	maleNames = ['Piotrek', 'Marek', 'Tomek', 'Jarek'],
	allNames = femaleNames.concat(maleNames),
	newName = prompt('Enter name');
	if (allNames.indexOf(newName) === -1) {
		allNames.push(newName);
	} else {
		console.log('There is ' + newName);
	};
	console.log(allNames);
