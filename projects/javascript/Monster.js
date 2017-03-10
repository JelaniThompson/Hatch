// Let's make a monster
var drawBody = function() {
    fill(255, 0, 0);
    ellipse(200, 200, 100, 100);
};

// Eyes
var drawEyes = function(firstX, firstY, secondX, secondY) {
    fill(255, 255, 255);
    ellipse(firstX, firstY, 20, 20);
    fill(0, 0, 0);
    ellipse(firstX, firstY, 5, 5);
    
    fill(255, 255, 255);
    ellipse(secondX, secondY, 20, 20);
    fill(0, 0, 0);
    ellipse(secondX, secondY, 5, 5);
};

// Third eye
var thirdEye = function(thirdX, thirdY) {
    fill(255, 255, 255);
    ellipse(thirdX, thirdY, 20, 20);
    fill(0, 0, 0);
    ellipse(thirdX, thirdY, 5, 5);
};

// Mouth
var drawMouth = function(mouthX, mouthY) {
    fill(255, 0, 255);
    ellipse(mouthX, mouthY, 40, 30);
};

drawBody();
drawEyes(180, 190, 220, 198);
thirdEye(203, 178);
drawMouth(190, 220);