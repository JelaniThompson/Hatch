var xPosition = 275;
var yPosition = 275;

// Here we draw the grass and the sky
var drawBackground = function() {
    noStroke();
    background(125, 255, 255);
    fill(68, 255, 0);
    rect(0,200,400,200);
};

// Here we'll draw the car and position it based on xPosition and yPosition
var drawCar = function() {
    fill(255, 0, 0);
    rect(xPosition, yPosition - 10, 40, 10);
    rect(xPosition + 10, yPosition - 20, 20, 10);
    fill(0, 0, 0);
    ellipse(xPosition + 10, yPosition, 10, 10);
    ellipse(xPosition + 30, yPosition, 10, 10);
};

// Call the functions we made
var draw = function() {
    drawBackground();
    drawCar();  
};