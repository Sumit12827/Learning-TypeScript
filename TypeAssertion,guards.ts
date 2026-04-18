//TypeScript means you tell typescript that i know the type better than you do;


// method 1 as keyword 
let value: unknown = "Hello TypeScript";

let strLength = (value as string).length;
console.log(strLength);


//method 2 aangular bracket <>
let strLength1 = (<string>value).length;

//  Why Needed?
//  TypeScript sometimes can’t figure out exact type





// Type Guards in TypeScript
// Concept => runtime checks to narrow down types
//Instead of forcing (assertion), we verify


function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

// Used for: string, boolean, number

//instance of guards
class Dog {
  bark() {
    console.log("Bark");
  }
}

class Cat {
  meow() {
    console.log("Meow");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}


//In operators;
type Admin = { name: string; permissions: string[] };
type User = { name: string };

function check(user: Admin | User) {
  if ("permissions" in user) {
    console.log("Admin:", user.permissions);
  } else {
    console.log("User:", user.name);
  }
}



//Custon Type guard
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}

//explanation
// isFish → custom type guard function
// animal is Fish → return type indicates type guard
// (animal as Fish).swim !== undefined → checks if swim method exists


// Type Guards:
// - typeof → primitive types
// - instanceof → classes
// - in → properties
// - custom guard → advanced logic

