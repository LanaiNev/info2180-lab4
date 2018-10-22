var mazebound;

window.onload = function () {
	mazebound = document.querySelectorAll(".boundary"); //Collects all .boundary CSS Selectors
	
	for (var i = 0; i < mazebound.length - 1; i++) {
		mazebound[i].onmouseover = mouseOver;
	}
	
}

function mouseOver() {
	for (var i = 0; i < mazebound.length - 1; i++) {
		mazebound[i].className += " youlose";
	}	
}

