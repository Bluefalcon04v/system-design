class Bird {
  fly() {
    console.log("Bird Fly");
  }
  makeSound() {
    console.log("Makes Sound");
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

class Penguin extends Bird {
  fly() {
    throw new Error("Penguin Cannot Fly");
  }
  makeSound() {
    console.log("Penguin Sound");
  }
}

function makeBirdFly(bird) {
  bird.fly();
}

makeBirdFly(new Penguin());
