// We can use these values to change shapes outside of their functions
var circleSize = 40;
var xPosition = 200;
var backgroundColor = 200;
var redValue = 200;

var draw = function() {
    background(255);
    fill(redValue, 0, 0);
    ellipse(xPosition, 200, circleSize, circleSize);
    
    fill(redValue, 0, 0);
    ellipse(xPosition, 300, circleSize, circleSize);
    
    fill(redValue, 0, 0);
    ellipse(xPosition, 100, circleSize, circleSize);
};

// Increase the size of the circle when we click
var mouseClicked = function() {
    circleSize += 1;
};