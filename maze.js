var mazebound;
var start;
var end;
var state;
var checkstart = false;
var win = true;

window.onload = function () {
	mazebound = document.querySelectorAll(".boundary"); //Collects all .boundary CSS Selectors
	state = document.getElementById("status");			//Collects all HTML status
	
	
	start = document.getElementById("start");			//Collects all HTML start
	checkstart = false;
	end = document.getElementById("end");				//Collects all HTML end

	for (var i = 0; i < mazebound.length - 1; i++) {
		mazebound[i].onmouseover = mouseOver;
	}
	
	start.onmouseover = Starter;						//Checks if user hovered over the Start Button
	start.onclick = newGame;							//Click to reset the game
	end.onmouseover = WinCheck;							//Checks if user hovered over the End Button
}

function mouseOver() {
	win = false;
	state.innerText = 'You Lose :( Click the "S" to restart';	
	
	for (var i = 0; i < mazebound.length - 1; i++) {
		mazebound[i].className += " youlose";			//Changes wall colour
	}	
}

function Starter(){
	checkstart = true;
	return checkstart;
}

function WinCheck(){
	if (win){
		if(checkstart && mouseOver) { 
			state.innerText = 'You Win :D      Click "S" to restart.';		
		}
	}
}

function newGame(){
	win = true;
	state.innerText = 'New Game :)';			
	for (var i = 0; i < mazebound.length - 1; i++) {
		mazebound[i].className = "boundary";
	}
}

