/*
1) change the class name - extends 
2) not change the constructor and the image
3) replace 'this.body = Bodies.rectangle' with super
4) remove 'options' from super
*/

class Bird extends Base {
    constructor(x, y) {
      super(x, y, 50, 50);
      this.image = loadImage("sprites/bird.png")
      World.add(world, this.body);
    };
    display(){
      super.display()
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
     
    };
  };
  