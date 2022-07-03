"use strict";

/* global XXH */
/* exported --
    p3_preload
    p3_setup
    p3_worldKeyChanged
    p3_tileWidth
    p3_tileHeight
    p3_tileClicked
    p3_drawBefore
    p3_drawTile
    p3_drawSelectedTile
    p3_drawAfter
*/

function p3_preload() {}

function p3_setup() {}

let worldSeed;

function p3_worldKeyChanged(key) {
  worldSeed = XXH.h32(key, 0);
  noiseSeed(worldSeed);
  randomSeed(worldSeed);
}

function p3_tileWidth() {
  return 64;
}
function p3_tileHeight() {
  return 64;
}

let [tw, th] = [p3_tileWidth(), p3_tileHeight()];

let clicks = {};

function p3_tileClicked(i, j) {
  let key = [i, j];
  clicks[key] = 1 + (clicks[key] | 0);
  console.log(i, j);
}

function p3_drawBefore() {}

function p3_drawTile(i, j) {
  stroke(255);
  let tile = noise(i,j) * 3;

  push();
  if(tile < 1){
    push();
    drawpurple();
    if(noise(i-1, j) * 3 >= 1 && noise(i-1,j) * 3 < 2){ //west
      push();
      autotileredwest();
      pop();
    }
    if(noise(i+1, j) * 3 >= 1 && noise(i+1,j) * 3 < 2){ //east
      push();
      autotileredeast();
      pop();
    }
    if(noise(i, j-1) * 3 >= 1 && noise(i,j-1) * 3 < 2){ //north
      push();
      autotilerednorth();
      pop();
    }
    if(noise(i, j+1) * 3 >= 1 && noise(i,j+1) * 3 < 2){ //south
      push();
      autotileredsouth();
      pop();
    }
    pop();
  } else if(tile < 2){
    push();
    drawpinkred();
    pop();  
  } else{
    push();
    drawyellow();
    pop();
  }

  let n = clicks[[i, j]] | 0;
  if (n % 2 == 1) {
    fill(0, 255, 255, 180);
    beginShape();
    vertex(0, 0);
    vertex(0, tw);
    vertex(th, tw);
    vertex(th, 0);
    ellipse(0,0);
    endShape(CLOSE);
  }

  pop();
  
}

function p3_drawSelectedTile(i, j) {
  noFill();
  stroke(0, 255, 255, 128);

  beginShape();
  vertex(0, 0);
  vertex(0, tw);
  vertex(th, tw);
  vertex(th, 0);
  endShape(CLOSE);

  noStroke();
  fill(0);
  text("(" + [i, j] + ")", 0, 0);
}

function p3_drawAfter() {}

function drawpinkred(){
  fill('#db1665')
  noStroke();
  beginShape();
  vertex(0, 0);
  vertex(0, tw);
  vertex(th, tw);
  vertex(th, 0);
  ellipse(0,0);
  endShape(CLOSE);
}

function drawpurple(){
  fill('#9a16db')
  noStroke();
  beginShape();
  vertex(0, 0);
  vertex(0, tw);
  vertex(th, tw);
  vertex(th, 0);
  ellipse(0,0);
  endShape(CLOSE);
}

function drawyellow(){
  fill('#e1eb34')
  noStroke();
  beginShape();
  vertex(0, 0);
  vertex(0, tw);
  vertex(th, tw);
  vertex(th, 0);
  ellipse(0,0);
  endShape(CLOSE);
}

function autotileredwest(){
  fill('#db1665')
  noStroke();
  beginShape();
  vertex(0,0);
  vertex(16,0);
  vertex(16,64);
  vertex(0,64);
  endShape();
}
function autotileredeast(){
  fill('#db1665')
  noStroke();
  beginShape();
  vertex(64,0);
  vertex(48,0);
  vertex(48,64);
  vertex(64,64);
  endShape();
}
function autotilerednorth(){
  fill('#db1665')
  noStroke();
  beginShape();
  vertex(0,0);
  vertex(0,16);
  vertex(64,16);
  vertex(64,0);
  endShape();
}
function autotileredsouth(){
  fill('#db1665')
  noStroke();
  beginShape();
  vertex(0,64);
  vertex(0,48);
  vertex(64,48);
  vertex(64,64);
  endShape();
}