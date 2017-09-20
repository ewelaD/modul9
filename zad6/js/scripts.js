var list = document.getElementById('list'),
	add = document.getElementById('addElem');
add.addEventListener('click', function() {
	var element = document.createElement('li');
	var elemLength = document.getElementsByTagName('li').length;
	element.innerHTML = 'item ' + elemLength;
		list.appendChild(element);
});
