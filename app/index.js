var img;
var smallPoint, largePoint;
var pi = '3.14159265359';
var greeting = 'Time is a flat Circle.';

function windowSize() {

}

function setup() {
  noCursor();
  createCanvas(720, 400);
  img = loadImage('img/eso1510a.jpg');
  imageMode(CENTER);
  noStroke();
  background(255);
  frameRate(999);
  fill(0);
  text(greeting, 175, 175, 1000, 1000);
  textSize(150);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont("Helvetica");
}

function draw() {
  var pointillize = 3;

  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);
}
