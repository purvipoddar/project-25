class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            density:1.2,
            restituion:0.3,
            friction:0.5,

        }
        this.image = loadImage("paper images.png");
        this.body = Bodies.circle(x,y,20,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        strokeWeight = 1
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,20);
    }
}