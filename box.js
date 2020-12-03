class Box{
    constructor(x,y,width,height)
{
    var options={
        restitution:0.3,
       density: 0.5,
       friction: 1
      }
      this.width=width;
      this.height=height;
      this.body=Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);

}

display()
{
   var angle=this.body.angle;
   var pos=this.body.position;
   push();
   translate(pos.x,pos.y);
   angleMode(RADIANS);
   rotate(angle);
   rectMode(CENTER);
   stroke("red");
   strokeWeight(5)
   fill("white")
   rect(0,0,this.width,this.height);
   pop();
    

}
}