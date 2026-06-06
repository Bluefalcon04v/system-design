class Base {
  makeSound() {
    console.log("Makes Sound");
  }
}

class Bird extends Base {
  fly() {
    console.log("Bird Fly");
  }
}

class Sparrow extends Bird {
  fly() {
    console.log("Sparrow Fly");
  }
  makeSound() {
    console.log("Sparrow Sound");
  }
}

class Penguin extends Base {
  makeSound() {
    console.log("Penguin Sound");
  }
}

function makeBirdFly(bird) {
  bird.fly();
}

makeBirdFly(new Bird());
makeBirdFly(new Sparrow());
makeBirdFly(new Penguin()); // it will throw an error
