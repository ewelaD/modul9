var femaleNames = ['Asia', 'Kasia', 'Ola', 'Magda'], //['Asia', 'Kasia', 'Ola', 'Marysia', 'Magda'],
	maleNames = ['Piotrek', 'Marek', 'Tomek', 'Jarek'],
	allNames = femaleNames.concat(maleNames),
	newName = 'Asia';
	if (allNames.indexOf(newName) === -1) {
		allNames.push('Marysia');
	} else {
		console.log('There is Marysia');
	};
	console.log(allNames);
