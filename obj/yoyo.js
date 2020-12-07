class Yoyo {
  
  constructor (x,y,m){
    this.pos = createVector(x,y);
    this.x = 0;
    this.y = 0;
    this.w = m;
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.op = 0;
  }
  
  applyForce(force){
    this.f = force;
    this.acc.add(this.f);
    
  }
  
  update(){
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);

    
  }
  
  display(){
    noStroke();
    this.op = 255;
    fill(random(255),255,100,this.op);
    ellipse(this.x+mouseX+lx,this.y+mouseY+ly,this.w);
  }
  displayShadow() {
    
    noStroke();
    this.op = 160;
    fill(random(255),255,100,this.op);
    ellipse(mouseX+lx+5,mouseY+ly-5,this.w);
  }
  edge(){
        
    if(this.pos.y > height || this.pos.y < 0){
      this.vel.mult(-1);
      let r = random(10,50);
      let t = new Track(this.x+mouseX+lx,this.y+mouseY+ly,r);
      tracks.push(t);
  }

    if(this.pos.x > width-this.w/2){
      this.vel.mult(-1);
    } else if (this.pos.x < this.w/2){
      this.vel.mult(-1);
    }
    
        
  }
  
}