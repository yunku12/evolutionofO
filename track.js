class Track {

  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.lifespan = 255.0;
  }
    
  update() {
    this.r = this.r +0.1
    this.y = this.y +0.1;
    this.lifespan -= 1;
  }
  
  display() {
    stroke(255, this.lifespan);
    strokeWeight(1);
    noFill();
    ellipse(this.x,this.y,this.r);
  }

  
}