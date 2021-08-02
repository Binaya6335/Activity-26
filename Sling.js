class Rope {
  constructor(bodyA, pointB, color){
      var rope_options ={
          bodyA: bodyA,
          pointB : pointB,
      }
      this.pointB = pointB;
      this.pointX = bodyA.x;
      this.pointY = bodyA.y-250;
      this.color = color;
      this.body = Constraint.create(rope_options);
      World.add(world, this.body);
  }
  display(){
  if(this.body.bodyA){
      var pointA = this.body.bodyA.position;
      var pointB = this.pointB;
      push();
      strokeWeight(3.5);
      stroke(this.color);
      line(pointB.x, pointB.y, pointA.x, pointA.y);
      pop();
  }
      
  }
}