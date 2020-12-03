class Pig{
    constructor(x,y)
{
    var options={
        restitution:0.3,
        density:1.0,
        friction:0.3
      }
      this.width=45;
      this.height=45;
      this.body=Bodies.rectangle(x,y,45,45,options);
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
   fill("pink")
   rect(0,0,this.width,this.height);
   pop();
}

}
