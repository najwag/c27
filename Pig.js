/*
1) change the class name - c;ass childClass extends parentClass
2) not change the constructor and the image
3) replace 'this.body = Bodies.rectangle' with super
4) remove 'options' from super
*/

class Pig extends Base {
    constructor(x, y) {
      super(x, y, 50, 50);
      this.image = loadImage("sprites/pig.png")
    }
  };
  