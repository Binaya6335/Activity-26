class Bob {
    constructor(x,y,color){
        var bob_options ={
            restitution:1,
            friction:0,
            frictionAir:0,
            slop:1,
            inertia:Infinity
        }
        this.body = Bodies.rectangle(x,y,40,40,bob_options);
        this.x = x;
        this.y = y;
        this.color = color;
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x, position.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(0,0,60,60);
        pop();
    }
}