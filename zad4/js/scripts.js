function drawTree(a) {
	for ( var i = 1 ; i <= a; i++ ) {
		var star = "";
		for (var j = 1; j <= i; j++) {
			var	star = star + '*';
		}
		console.log(star);
	}	
}
var draw1Tree = drawTree(5);
	draw2Tree = drawTree(2);
	draw3Tree = drawTree(8);