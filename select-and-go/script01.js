
window.onload = initForm;
window.onunload = function() {};

function initForm() {
	document.getElementById("newLocation").selectedIndex = 0; // Set the first index to value 0
	document.getElementById("newLocation").onchange = jumpPage; // Activate Function below when the dropdown changes
}

function jumpPage() {

	var newLoc = document.getElementById("newLocation");
	var newPage = newLoc.options[newLoc.selectedIndex].value;

	if(newPage != "") {
		window.location = newPage;
	}

}