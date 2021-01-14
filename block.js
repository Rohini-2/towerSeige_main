class Block{
    constructor(x, y, height, angle) {
       var options = {
           'restitution':0.8,
           'friction':1.0,
           'density':1.0
       }
       block = Bodies.rectangle(x,y,width,hieght,options);
       this.width = width;
       this.height = heigh;
       World.add(world, block);
     
       slingshot=new slingshot(this.block,{x:100,y:200});
    }
   
  };