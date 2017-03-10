var draw = function() {
    noStroke();
    fill(255);
    background(0);
    quad(200, 100, 300, 200, 200, 300, 100, 200);

    fill(5, 149, 188);
    triangle(100, 0, 300, 0, 200, 100);
    triangle(100, 400, 300, 400, 200, 300);
    triangle(0, 100, 100, 200, 0, 300);
    triangle(400, 100, 300, 200, 400, 300);

    fill(255);
    triangle(0, 0, 0, 100, 100, 0);
    triangle(400, 0, 300, 0, 400, 100);
    triangle(0, 400, 0, 300, 100, 400);
    triangle(400, 400, 300, 400, 400, 300);
};