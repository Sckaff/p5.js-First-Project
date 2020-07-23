var c = {
  r: 250,
  b: 40,
  x: 200,
  y: 200,
  d: 20
};

function setup() {
  createCanvas(400, 400);
  background(51);
}

function draw() {

  //Bolas aparecendo aleatoriamente no Canvas 
  noStroke();
  fill(c.r, 0, c.b, 90);
  ellipse(c.x, c.y, c.d, c.d);
  c.r = 120*sin(c.r);
  c.g = 120*sin(c.g);
  c.b = 120*sin(c.b);
  c.x = random(0,400);
  c.y = random(0,400);

  if(mouseIsPressed) {

  //Botão no mouse
  stroke(0);
  fill(0, 255, 0);
  ellipse(mouseX, mouseY, 10, 10);
  
  //Linhas legais
  stroke(mouseX, 255, mouseY);
  line(0, 0, mouseX, mouseY);
  line(0, 400, mouseX, mouseY);
  line(400, 0, mouseX, mouseY);
  line(400, 400, mouseX, mouseY);
  }
  
}

function keyPressed() {
  background(51)
}