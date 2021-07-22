class rope{
	constructor()
	{

	//create rope constraint here
	    Matter.Constraint.create({
        pointA:{x:200,y:20},
        bodyB:ball,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.004
      });

	}


    //create display() here 
    show(){
		
	}
}
