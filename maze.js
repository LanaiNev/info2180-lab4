var mazebound;
var start;
var end;
var checkstart = false;
var win = true;

window.onload = function () {
	mazebound = document.querySelectorAll(".boundary"); //Collects all .boundary CSS Selectors
	
	start = document.getElementById("start");
	checkstart = false;
	end = document.getElementById("end");

	for (var i = 0; i < mazebound.length - 1; i++) {
		mazebound[i].onmouseover = mouseOver;
	}
	
	start.onmouseover = Starter;
	start.onclick = newGame;
	end.onmouseover = WinCheck;
}

function mouseOver() {	
	win = false;
	for (var i = 0; i < mazebound.length - 1; i++) {
		mazebound[i].className += " youlose";
	}	
}

function Starter(){
	checkstart = true;
	return checkstart;
}

function WinCheck(){
	if (win){
		if(checkstart && mouseOver) { 
			alert ('You Win :D');	
		}
	}
}

function newGame(){
	win = true;	
	for (var i = 0; i < mazebound.length - 1; i++) {
		mazebound[i].className = "boundary";
	}
}

