var img;
var index = 0;
var pi;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  img = loadImage('img/eso1510a.jpg');
  imageMode(CENTER);
  noStroke();
  background(255);
  frameRate(999);
  loadJSON('/data/pi.json', function(data){
    pi = data.pi;
  });
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
