var withButtonClass = document.getElementsByClassName('button');//szukam po klasach
console.log(withButtonClass);
var lengthTable = withButtonClass.length;
console.log(lengthTable);
for (a = 0; a < lengthTable; a++) {
	/*alert(withButtonClass.innerText);*/
	alert(withButtonClass[a].innerText);
}