class Animal {
  speak() {
    console.log("Animals can Speak");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog Bark");
  }
}
class Cat extends Animal {
  speak() {
    console.log("Cat Meows");
  }
}
const animals = [new Dog(), new Cat(), new Animal()];
animals.forEach((animal) => {
  animal.speak();
});
