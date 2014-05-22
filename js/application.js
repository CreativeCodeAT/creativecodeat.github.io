var canvas;

function setup() {
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	canvas = createCanvas(w, h);
	canvas.id('background');
}

function draw() {
	if (mouseIsPressed()) {
		fill(0);
	} else {
		fill(255);
	}

	ellipse(mouseX, mouseY, 25, 25);
}

// Resize canvas acording to viewport size.
window.onresize = function(event) {
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	canvas.size(w, h);
};