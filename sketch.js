let b1;
let y1;
let p1;
let yoyoPos;

let f1;
let p2;
let fishPos;


let hand;
let next = 0;
let lineLength;
let lx, ly;
let box;
let tracks = [];
let armColor;

function setup() {
  createCanvas(1000, 500);
  b1 = new Ball(width*0.2,height/2,50);
  f1 = new Fish(mouseX, mouseY, 50);
  gravity = createVector(0,0.1);
  wind = createVector(1,-1);
  
  
  y1 = new Yoyo(mouseX, mouseY, 50);

  mNow = createVector(0,0);
  mPre = createVector(0,0);
}

function draw() {
  background(225);
  b1.applyForce(gravity);
  b1.update();  
  b1.display();
  b1.edge();
  
  textSize(20);
  noStroke();
  
  p2 = new Player2();
  p2.handDisplay();
  
  armColor = color(200,200,150);
  armColor.setRed(128 + mouseY *sin(millis()/1000))
  fill(armColor);
  textAlign(CENTER);
  // text('CLICK to START ',mouseX,mouseY+70);

  p1 = new Player1();
  p1.armDisplay();
  p1.handDisplay();
  
  if (mouseButton == LEFT) {

  textSize(20);
  noStroke();
  fill(200);
  
  textAlign(CENTER);
  // text('CLICK : HOLDING YOYO ',width/2,height*0.8);

    
  if (mouseIsPressed) {
    
    p2.armDisplay();
    f1.display();
    p1.handDisplay();
    p1.armDisplay();
    y1.display();
    y1.displayShadow()
    ly = ly * 0.7+5;
    lx = lx * 0.7-2;
    p1.handDisplay();
    p2.handDisplay();
    
  } else {

    p1.handDisplay();
    y1.edge();
    y1.applyForce(gravity);
    yoyoPos = y1.pos;
      
    p1.armDisplay();
    p1.line();
  
    y1.update();
    y1.display();
    y1.displayShadow();  
    p1.handDisplay();
    
    y1.applyForce(hand);
    
    f1.edge();
    f1.applyForce(gravity);
    fishPos = f1.pos;
      
    p2.armDisplay();
    p2.line();
  
    f1.update();
    f1.display();
   // f1.displayShadow();  
    p2.handDisplay();
    
    f1.applyForce(hand);

  }
  }
  
    for (let i = 0; i < tracks.length; i++){
    tracks[i].update();
    tracks[i].display();
  }

  
  
}

function mousePressed() {
  b1.applyForce(wind);
  setup();
}

