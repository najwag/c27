/*
1) change the class name - extends 
2) not change the constructor and the image
3) replace 'this.body = Bodies.rectangle' with super
4) remove 'options' from super
*/


class Box extends Base{
  constructor(x, y, width, height) {
    super(x, y, width, height);
   
    this.image = loadImage("sprites/box.png")
   
  }
};
