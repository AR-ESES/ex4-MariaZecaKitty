let espLarg = 5;
let espAltura = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  for (let i = 1; i < espLarg; i++) {
    for (let j = 1; j < espAltura; j++) {
      push();
      translate((i * width) / espLarg, (j * height) / espAltura);
      scale (0.50);
	posX = 0;
	posY = 0;
	noFill();
	stroke(0);
	strokeWeight(5);

    fill(255, 215, 0)
	circle(posX, posY, height/3);

    fill(255)
	circle(posX - height/3/4, posY - height/18, height/12);
	circle(posX + height/3/4, posY - height/18, height/12);

    fill(0)
    circle(posX - height/3/4, posY - height/18, height/20);
	circle(posX + height/3/4, posY - height/18, height/20);

    fill(255,0,0)
    circle(posX + height/3/25, posY - height/70, height/30);
      pop();
    }
  }
}