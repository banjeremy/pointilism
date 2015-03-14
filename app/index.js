var img;
var index = 0;
var pi;
var greeting = 'Time is a flat Circle.';

function setup() {
  noCursor();
  createCanvas(720, 400);
  img = loadImage('img/eso1510a.jpg');
  imageMode(CENTER);
  noStroke();
  background(255);
  frameRate(999);
  loadJSON('/data/pi.json', function(data){
    pi = data.pi;
  });
  fill(0);
  text(greeting, 175, 175, 1000, 1000);
  textSize(150);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont("Helvetica");
}

function draw() {
  index = ++index % pi.length;
  var radius = parseInt(pi.charAt(index));
  radius *= 2;
  console.log(radius);
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, radius, radius);
}
