class Player1 {
  
  constructor (){
    
    this.lpos = createVector(width/2,height/3);
    this.Mpos = createVector(mouseX,mouseY);

    this.w = 30;

    if (millis() > next) {
        mNow.x = mouseX;
        mNow.y = mouseY;
        next = millis() + 1;
        mPre.x = mNow.x;
        mPre.y = mPre.y;
        hand = p5.Vector.sub(mNow, mPre);
        hand.mult(0.009);
    }
  }
  
  handDisplay(){
    this.lpos.x = this.Mpos.x;
    this.lpos.y = this.Mpos.y;
    fill(255);
    
    
    //손부분
    
    //손가락
    let t1 = map(mouseY, 0, height, 27, 13);
    let t2 = map(mouseY, 0, height, 31, 15);
    let t3 = map(mouseY, 0, height, 17, 0);
    
    
    strokeWeight(6);
    strokeCap(ROUND);
    stroke(50);
    line(mouseX-7,mouseY-10, mouseX-t1,mouseY-7);
    line(mouseX-5,mouseY-10, mouseX-t2,mouseY+5);
    line(mouseX,mouseY-10, mouseX-t2,mouseY+15);
    line(mouseX,mouseY, mouseX-t1+3,mouseY+19);
    line(mouseX,mouseY, mouseX+t3,mouseY+20);
    
    //손바닥
    noStroke();
    fill(50);
    ellipse (this.Mpos.x, this.Mpos.y, this.w);
    
    
     
  }
    armDisplay(){
    this.lpos.x = this.Mpos.x;
    this.lpos.y = this.Mpos.y;
    fill(255);
     
    
    //팔부분
    let gap = map(mouseX, 0, width, 0.2, 1);

    noFill();
    noStroke();
    point(mouseX, mouseY);
    point(width*gap, height/3);
    point(width, height/3);
    stroke(armColor);
    strokeWeight(15);
    
    beginShape();
    vertex(mouseX, mouseY);
    quadraticVertex(width*0.7, height/3, width*0.6, height/3);
    endShape();
    
  
  }
  
  line() {
    lineLength = p5.Vector.sub(yoyoPos, p1.Mpos);
    lx = map(lineLength.x, 0, width, 0,10);
    ly = map(lineLength.y, 0, height, 0, 200);
      
    stroke(100);
    strokeWeight(1);

    line (p1.lpos.x, p1.lpos.y,
          p1.lpos.x+lx, p1.lpos.y+ly);
    
  }
  
}
