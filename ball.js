class Ball {
    constructor(x,y){
        var options={isStatic:true}
        this.body = Bodies.rectangle(x,y,40,40,options)
        this.height=height
        this.width=width

        World.add(world,this.body)
    }

    display(){
       var pos=this.body.position
       fill("red")
       ellipseMode(RADIUS)
       ellipse(pos.x,pos.y,40,40)
    }
}