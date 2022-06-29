/* exported setup, draw */
let seed = 12345;

const waterColor = "#6dd0f7";
const skyColorBottom = "#679cf0";
const skyColorTop = "#4287f5";
const icebergColor = "#edf0f5";
const icebergOutline = "#000000";
//const icebergAccentDark = "#b6b6b8";
const icebergAccentDark = [182, 182, 182, 150];
//const icebergAccentLight = "#5cd3e0";
const icebergAccentLight = [92, 211, 224, 80];
const sunColor = [254,254,254,80]; // with opacity

function preload() {
    // runs before setup 
    // use if you want to load any large files and want to make sure they load before setup()
}

function setup() {
  createCanvas(800, 400);
  createButton("reroll").mousePressed(() => seed++);
}

function draw() {
  randomSeed(seed);

  background(100);

  noStroke();

  fill(skyColorBottom);
  rect(0, 0, width, height / 2);
  fill(skyColorTop);
  rect(0, 0, width, height / 4);

  // An example of making something respond to the mouse
  fill(...sunColor);
  ellipse(100,0,30,30);
  ellipse(100,0,50,50);
  ellipse(100,0,100,100);
  ellipse(100,0,200,200);
  

  fill(waterColor);
  rect(0, height / 2, width, height / 2);

  // An example of drawing an irregular polygon
  fill(icebergColor);
  beginShape();
  vertex(175, height / 2);
  var steps = 30;
  for (let i = 0; i < steps / 2; i++) {
    let x = (width * i) / steps;
    let y = height / 2 - (random() * random() * height) / 4 - height / 10;
    vertex(x + 200, y);
  }
  
  vertex(600, height / 2);
  endShape(CLOSE);
  
  fill(icebergAccentLight);
  beginShape();
  vertex(175, height / 2);
  steps = 20;
  for (let i = 0; i < steps / 2; i++) {
    let x = (width * i) / steps;
    let y = height / 2 - (random() * random() * height) / 8 - height / 16;
    vertex(x + 200, y);
  }
  vertex(600, height / 2);
  endShape(CLOSE);
  
  fill(icebergAccentDark);
  beginShape();
  vertex(175, height / 2);
  steps = 20;
  for (let i = 0; i < steps / 2; i++) {
    let x = (width * i) / steps;
    let y = height / 2 - (random() * random() * height) / 8 - height / 32;
    vertex(x + 200, y);
  }
  vertex(600, height / 2);
  endShape(CLOSE);

  drawPolarbear(mouseX, (height/2 + 75), 50, 75);
    
  const icebergs = 5*random();
  for (let i = 0; i < icebergs; i++) {
    drawSmallIceberg();
  }
  
  function drawSmallIceberg(){
    let x = width * random();
    let y = (height/2 + 100) + height/8 * random();
    noStroke ();
    fill(icebergOutline);
    ellipse (x, y, 75, 25);
    fill(icebergColor);
    ellipse (x, y, 74, 24);  
  }
  
  function drawPolarbear(x, y, width, height){
    fill(icebergColor);
    ellipse (x, y, width, height);
    ellipse (x + 21, y - 25, width/8, height/8);
    ellipse (x - 21, y - 25, width/8, height/8);
    fill(icebergOutline);
    ellipse (x + 10, y - 20, width/8, height/8);
    ellipse (x - 10, y - 20, width/8, height/8);
    ellipse (x, y, width/2, height/4);
  }
}

