class Flower {
    constructor(x, y, width, height) {
      var options = {
          restitution:0.3,
          friction:0.5,
          density:0.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("flowerImage.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
     }
  };
  