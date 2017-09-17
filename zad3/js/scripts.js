var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
	dinosaur = 'triceratops',
	dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased);
var textCharsAfter = text.replace('Velociraptor', dinosaurUpperCased);
console.log(textCharsAfter);
var showPart = textCharsAfter.slice(0, textCharsAfter.length/2);
console.log(showPart);