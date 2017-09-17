var femaleNames = ['Asia', 'Kasia', 'Ola', 'Magda'], //['Asia', 'Kasia', 'Ola', 'Marysia', 'Magda'],
	maleNames = ['Piotrek', 'Marek', 'Tomek', 'Jarek'],
	allNames = femaleNames.concat(maleNames),
	newName = 'Asia';
	if (allNames.indexOf(newName) === -1) {
		allNames.push('Asia');
	} else {
		console.log('There is ' + newName);
	};
	console.log(allNames);
