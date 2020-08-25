export default function () {
  console.log('advance.');

  // const pet = getSmallPet();
  // console.log(pet);
  // pet.layEggs();

  // function isFish(pet: Fish | Bird): pet is Fish {
  //   return (pet as Fish).swim !== undefined;
  // }

  // if (isFish(pet)) {
  //   pet.swim();
  // } else {
  //   pet.fly();
  // }

  function sealed(constructor: Function) {
    // console.log('sealed.', constructor);
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    // constructor.greeting = '222';
  }

  @sealed
  class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }

    greet() {
      return `Hello, ${this.greeting}`;
    }
  }

  const greet = new Greeter('ts.');
  // greet.greeting = '12333';
  console.log(greet, greet.greet());
  function classDecorator<T extends {new(...args: any[]): {}}>(constructor: T) {
    console.log('classDecorator');
    return class extends constructor {
      newProperty = 'new property';
      hello = 'override';
    };
  }
  @classDecorator
  class Greeter2 {
    property = 'property';
    hello: string = 'hello';
    constructor(m: string) {
      this.hello = m;
    }
  }

  const greet2 = new Greeter2('ts.');
  // greet.greeting = '12333';
  console.log(greet2);
};
