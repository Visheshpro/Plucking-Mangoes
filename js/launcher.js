class launcher{

constructor(bodya, bodyb){

var options={

    bodyA: bodya,
    pointB: bodyb,
    stiffness:0.004
}

this.body = Constraint.create(options)
World.add(world, this.body)
}

display(){
    if(this.body.bodyA){
    var bodyA = this.body.bodyA.position;
    var pointB = this.body.pointB;
    strokeWeight(4);
    line(bodyA.x, bodyA.y, pointB.x, pointB.y);
    }
}

attach(body){

    this.body.bodyA = body
}

fly(){

    this.body.bodyA = null
}

}