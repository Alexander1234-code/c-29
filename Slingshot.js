class Slingshot{

constructor(bodyA,pointB){

var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    length:10
}
this.pointB=pointB;
this.shot=Constraint.create(options);
World.add(world,this.shot);

}
fly(){
    this.shot.bodyA=null;
}
display(){

if(this.shot.bodyA){
line(this.shot.bodyA.position.x,this.shot.bodyA.position.y,this.pointB.x,this.pointB.y);
}
}
}
