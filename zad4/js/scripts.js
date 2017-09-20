function drawTree(a) {
	for ( var i = 1 ; i <= a; i++ ) {
		var star = "";
		for (var j = 1; j <= i; j++) {
				star = star + '*';
		}
		console.log(star);
	}	
}
drawTree(5);
drawTree(2);
drawTree(8);