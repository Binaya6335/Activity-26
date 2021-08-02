class Pendulum {
  constructor(x,y,width,height){
      var pendulum_options ={
          restitution:0.8,
          inertia:Infinity,
          slop:1,
          isStatic:false
      }
      this.body = Bodies.rectangle(x,y,width,height, pendulum_options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);
  }
  display(){
      var position = this.body.position;
      var angle = this.body.angle;
      push();
      translate(position.x, position.y);
      rotate(angle);
      fill("#ff0062");
      ellipseMode(CENTER);
      ellipse(0,0, this.width, this.height);
      pop();
  }
}