// Time to use more complex shapes! 🐱 Meow! :3
var draw = function() {
    strokeWeight(5);
    fill(255, 255, 255);
    
    // Head
    quad(75, 125, 150, 200, 75, 275, 0, 200);
    
    // Ears
    triangle(55, 145, 20, 120, 20, 180);
    triangle(95, 145, 130, 120, 130, 180);
    
    // Body
    quad(110, 240, 350, 240, 300, 330, 170, 330);
    
    // Paws
    triangle(300, 330, 280, 330, 290, 350, 170);
    triangle(170, 330, 190, 330, 180, 350);
    
    // Tail
    quad(300, 210, 349, 239, 340, 150, 380, 200);
    
    // Eyes
    triangle(40, 170, 40, 190, 60, 190);
    triangle(100, 170, 110, 190, 80, 190);
    
    // Nose
    fill(0, 0, 0);
    triangle(70, 210, 90, 210, 80, 220);
};

// Here kitty kitty 🐈