class String{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.String = Constraint.create(options);
        World.add(world, this.String);
    }

    display(){
        var pointA = this.String.bodyA.position;
        var pointB = this.String.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}