var top_left;
var boundaries;
var all_boundaries;

window.onload = function () {
	top_left = document.getElementById("boundary1");
	boundaries = document.getElementsByClassName("boundary");
	
	 
	top_left.onmouseover = function() {mouseOver_topleft}
	boundaries[0].onmouseover = function() {mouseOver(0)}
	boundaries[1].onmouseover = function() {mouseOver(1)}
	boundaries[2].onmouseover = function() {mouseOver(2)}
	boundaries[3].onmouseover = function() {mouseOver(3)}
	boundaries[4].onmouseover = function() {mouseOver(4)}

	
}



function mouseOver_topleft() {
	top_left.className += " youlose";	
}

function mouseOver(index) {
	boundaries[index].className += " youlose";	
}

