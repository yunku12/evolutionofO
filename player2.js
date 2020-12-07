

class Player2 {
  
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
        hand.mult(0.001);
    }
  }
  
  handDisplay(){
    this.lpos.x = this.Mpos.x;
    this.lpos.y = this.Mpos.y;
        
     
  }
    armDisplay(){
    this.lpos.x = this.Mpos.x;
    this.lpos.y = this.Mpos.y;
    fill(0);
     
    
    //팔부분
    //let gap = map(mouseX, 0, width, 0.2, 0.5);

    let armColor = color(200,200,150);
    armColor.setRed(128 + mouseY *sin(millis()/1000))

    // noFill();
    // noStroke();
      stroke(0);
    stroke(armColor);

    noFill();
    beginShape();
    vertex(mouseX, mouseY);
    quadraticVertex(width*0.9, height/3, width, height*0.7);
    endShape();
    
  
  }
  
  line() {
    lineLength = p5.Vector.sub(fishPos, p1.Mpos);
    lx = map(lineLength.x, 0, width, 0,10);
    ly = map(lineLength.y, 0, height, 0, 300);
      
    stroke(100);
    strokeWeight(1);

    line (p1.lpos.x, p1.lpos.y,
          p1.lpos.x+lx, p1.lpos.y+ly);
    
  }
  
}

