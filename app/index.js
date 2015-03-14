var img;
var smallPoint, largePoint;
var pi = '3.14159265359';

function windowSize() {

}


function setup() {
  createCanvas(720, 400);
  img = loadImage('img/eso1510a.jpg');
  smallPoint = 4;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  background(255);
  frameRate(999);
}

function draw() {
  //var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);
}
