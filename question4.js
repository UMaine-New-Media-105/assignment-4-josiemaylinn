let shapes = [drawCircle, drawSquare, drawTriangle];

function setup() {
  createCanvas(400, 400);
  
  rectMode(CENTER)
}

function draw() {
  background(0);

  for (let i = 0; i < shapes.length; i++) {
    let drawShapes = shapes[i];
    drawShapes();
  }
}

function drawCircle() {
  fill('white');
  ellipse(100, 200, 100);
}

function drawSquare() {
  fill('white');
  square(200, 200, 100);
}

function drawTriangle() {
  fill('white');
  triangle(250, 250, 350, 250, 300, 150);
}
