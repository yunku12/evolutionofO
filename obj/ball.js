class Ball {
  constructor (x,y,w) {
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.pos = createVector(this.x,this.y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    
  }
  
  applyForce(force) {
    this.f = force;
    this.acc.add(this.f);
    
  }
  
  display() {
    noFill();
    strokeWeight(2);
    stroke(0);
    ellipse(this.pos.x,this.pos.y,this.w,this.w);
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
  }
  
  edge(){
    if(this.pos.y > height){
      this.vel.mult(-1);
      
      
    }
    
  }
  
}