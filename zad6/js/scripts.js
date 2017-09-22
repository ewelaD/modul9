var list = document.getElementById('list'),
	add = document.getElementById('addElem'),
	elemLength = document.getElementsByTagName('li');
add.addEventListener('click', function() {
	var element = document.createElement('li');
	element.innerHTML = 'item ' + elemLength.length;
	list.appendChild(element);
});
