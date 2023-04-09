colors = ["gold", "purple", "red", "lime", "cyan"];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  for (let starX = 0; starX < 1000; starX += 125) {
    for (let starY = 0; starY < 1000; starY += 125) {
      drawStar(random(colors), starX, starY, random(5, 10));
    }
  }
  noLoop();
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
  pop();
}
