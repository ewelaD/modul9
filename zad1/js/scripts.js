function getTriangleArea(a, h) {
	if((a <= 0) || (h <= 0)) {
		return ('Nieprawidłowe dane');
	} else {
		return (a*h/2);
	}
}
console.log( getTriangleArea(10,6) );
var triangle1Area = getTriangleArea(3,7),
	triangle2Area = getTriangleArea(5,12),
	triangle3Area = getTriangleArea(4,6),
	triangle4Area = getTriangleArea(-2,10);