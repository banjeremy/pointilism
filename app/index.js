var img;
var index = 0;
var pi;

function setup() {
  noCursor();
  createCanvas(windowWidth, windowHeight);
  img = loadImage('img/eso1510a.jpg');
  imageMode(CENTER);
  noStroke();
  background(255);
  frameRate(60);
  loadJSON('/data/pi.json', function(data){
    pi = data.pi;
  });
}

function draw() {
  if (pi) {
    for (var i = 0; i < 200; i++) {
      index = ++index % pi.length;
      var radius = parseInt(pi.charAt(index));
      radius *= Math.PI;
      var x = floor(random(img.width));
      var y = floor(random(img.height));
      var pix = img.get(x, y);
      fill(pix, 128);
      ellipse(x, y, radius, radius);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
