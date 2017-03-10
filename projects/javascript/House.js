var draw = function() {
  // Sun
  stroke(0, 0, 0);
  fill(255, 255, 0);
  ellipse(50, 50, 50, 50);
  
  // Ground
  stroke(0, 0, 0);
  fill(255, 255, 255);
  rect(0, 300, 400, 200);
  
  // House
  stroke(0, 0, 0);
  fill(255, 255, 255);
  rect(100, 150, 200, 200);
  
  // Door
  stroke(0, 0, 0);
  fill(255, 255, 255);
  rect(175, 250, 50, 100);
  
  // Windows
  stroke(0, 0, 0);
  fill(255, 255, 255);
  rect(130, 180, 50, 50);
  
  stroke(0, 0, 0);
  fill(255, 255, 255);
  rect(220, 180, 50, 50);
  
  // We can make clouds by joining three circles
  stroke(0, 0, 0);
  fill(255, 255, 255);
  ellipse(200, 70, 70, 40);
  
  stroke(0, 0, 0);
  fill(255, 255, 255);
  ellipse(250, 70, 70, 40);
  
  stroke(0, 0, 0);
  fill(255, 255, 255);
  ellipse(230, 40, 70, 40);
  
  // Join the clouds
  noStroke();
  fill(255, 255, 255);
  ellipse(230, 60, 70, 50);
  
  // Rose
  stroke(0, 0, 0);
  fill(255, 0, 0);
  rect(45, 250, 30, 30);
  
  stroke(0, 0, 0);
  fill(0, 100, 0);
  rect(55, 270, 10, 70);
};