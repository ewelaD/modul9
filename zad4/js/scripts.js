function drawTree(a) {
	for ( var i = 1 ; i <= a; i++ ) {
		var star = "";
		for (var j = 1; j <= i; j++) {
			var	star = star + '*';
		}
		console.log(star);
	}	
}
console.log(drawTree(5));
console.log(drawTree(2));
console.log(drawTree(8));