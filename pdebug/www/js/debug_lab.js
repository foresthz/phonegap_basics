
function addEvent(id, event, func) {
	var node = document.getElementById(id);
	node.addEventListener(event,func);
}