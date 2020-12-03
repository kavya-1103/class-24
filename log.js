class Log{
    constructor(x,y,height,angle)
{
    var options={
        restitution:0.3,
        density:1.0,
        friction:2
      }
      this.width=15;
      this.height=height;
      this.body=Bodies.rectangle(x,y,15,height,options);
      Matter.Body.setAngle(this.body,angle)
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
   fill("brown")
   rect(0,0,this.width,this.height);
   pop();
}

}
