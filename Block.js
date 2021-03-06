class Block{
    constructor(x,y,width,height){
      var options ={
          isStatic = true,
      }
      this.body=Bodies.rectangle(x,y,10,10,options);
      this.width = width;
      this.height = height;
      World.add(world,this.body); 
  }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("black");
        ellipse(0,0,this.width,this.height);
        pop();
    }
}