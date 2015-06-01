window.addEventListener('load', function () { setup(); }, false);

function setup() {
  // Baseline
  var elements = document.getElementsByClassName("baseline_old");
  for (var i=0; i < elements.length; i++) {
    var element = elements[i];
    var canvas = canvasForElement(element);
        var lineHeight = window.getComputedStyle(element, null).getPropertyValue("line-height");
    drawBaselineOnCanvas(canvas, lineHeight);
  }
}

// Canvas

function drawBaselineOnCanvas(canvas, lineHeight) {
	var context = contextForCanvas(canvas);
	if (context) {
		var width = canvas.offsetWidth;
		var height = canvas.offsetHeight;

		// Border
		context.strokeStyle = "#f00";
		context.lineWidth = 1;
		context.strokeRect(0, 0, width, height);
		// Baseline
		context.strokeStyle = "#D7F1FF";
		var leading = parseInt(lineHeight);
		var lines = Math.floor(height / leading);
		for (var i = 0; i < lines; i++) {
			var y = (i + 1) * leading;
			context.moveTo(0, y);
			context.lineTo(width, y);
			context.stroke();
			context.closePath();
		}
	}
}

Canvas Helpers

function contextForCanvas(canvas) {
	if (canvas && canvas.getContext) {
		return canvas.getContext('2d');
	}
}

function canvasForElement(element) {
	var canvas = document.createElement("canvas");
	element.appendChild(canvas);
	makeContainer(canvas);
	return canvas;
}

