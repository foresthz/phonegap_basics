
function addEvent(id, event, func)  {
	var element = document.getElementById(id);
	element.addEventListener(event, func);
}

