/*
1) change the class name - extends 
2) not change the constructor and the image
3) replace 'this.body = Bodies.rectangle' with super
4) remove 'options' from super
5) dont' remove Matter.Body.setAngle command
*/

class Log extends Base {
    constructor(x, y, height, angle) {
 
      super(x, y, 20, height);
      Matter.Body.setAngle(this.body, angle);
      this.image = loadImage("sprites/log.png")
      World.add(world, this.body);
  };
}