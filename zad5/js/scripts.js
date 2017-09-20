var withButtonClass = document.getElementsByClassName('button');
var lengthTable = withButtonClass.length;
console.log(lengthTable);
for (var a = 0; a < lengthTable; a++) {
	alert(withButtonClass[a].innerText);
}