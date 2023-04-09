function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  drawStar("gold", 200, 200, 10);
}

function drawStar(color, x, y, points) {
  push();
  translate(x, y);

  for (let numberOfPoints = 0; numberOfPoints < points; numberOfPoints++) {
    rotate(360 / points);
    noStroke();
    fill(color);
    triangle(0, 0, -25, 50, -25, -50);
  }
}
