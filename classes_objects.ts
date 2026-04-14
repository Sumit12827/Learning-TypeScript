//classes and objects in typescript
// class = blueprint(template)
// object = real instance of that blueprint

class Person {
    // name: string;
    // age: number;

    constructor(public name: string, public age: number) {
        // this.name = name;
        // this.age = age;
    }

    greet() {
        console.log("hello");
    }
}

//name , age = properties
//greet = method

let p1 = new Person("sumit" , 20);
console.log(p1)
p1.greet() //hello      
//think like this => class = blueprint , object = real instance of that blueprint


//constructor is a special method that is called when we create an object of a class
//it is used to initialize the properties of the class

class Person1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello " + this.name);   //this refers to the current object
  }
}
let p2 = new Person1("Sumit", 21);
p2.greet();

// Constructor:
// - special method
// - initializes object
// - runs automatically


//access modifiers in typescript
//main concept => control visibility of class members

class Person2 {
    public name: string; // can be accessed anywhere
    private age: number; // can only be accessed within the class
    protected email: string; // can be accessed within the class and its subclasses

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

let p3 = new Person2("Sumit", 22, "hi@gmail.com");
console.log(p3.name) // accessible
// console.log(p3.age) // Error: age is private
// console.log(p3.email) // Error: email is protected

// Access Modifiers:
// - public: accessible everywhere
// - private: accessible only within class
// - protected: accessible within class and subclasses





//short constructor syntax in typescript(cleaner code)
class Student {
  constructor(public name: string, public age: number) {}

  show() {
    console.log(this.name, this.age);
  }
}
//no need to write properties separately





//optional properties in typescript(classes)
//some properties may not always present in every object
// use ? to make property optional

class User {
  name: string;
  age?: number; // optional

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(this.name, this.age);
  }
}

let u1 = new User("Sumit");
let u2 = new User("Rahul", 22);

u1.show();
u2.show();
// Optional property → use ?
// May or may not be provided




//Parameters properties(impotant)
//main concept => shortcut to define + initialize properties in constructor

class Personn {
  namee: string;
  agee: number;

  constructor(name: string, age: number) {                     //old way                
    this.namee = name;
    this.agee = age;
  }
}


// class Person {
//   constructor(public name: string, public age: number) {}                //new way (short constructor syntax)
// }


// Parameter properties:
// - use access modifiers in constructor
// - automatically creates + assigns properties






//getters and setters in typescript
//main concept => control how properties reads and updated

class BankAccount {
  private balance: number = 0;

  get getBalance() {
    return this.balance;
  }

  set setBalance(amount: number) {
    if (amount > 0) {
      this.balance = amount;
    }
  }
}

let acc = new BankAccount();

acc.setBalance = 5000;
console.log(acc.getBalance);
// get → read value
// set → update value with control






//static members in typescript
//main concept => belong to class not instance

class MathUtils {
  static add(a: number, b: number): number {
    return a + b;
  }
}

console.log(MathUtils.add(2, 3));

let m = new MathUtils();
// m.add(2,3);  Error

//  static:
// - accessed using class name
// - not tied to object





//Abstract classses in typescript
//main concept => cannot be instantiated directly , must be extended by subclasses
abstract class Animal {
  abstract makeSound(): void;

  move() {
    console.log("Moving...");
  }
}
class Dog extends Animal {
  makeSound() {
    console.log("Bark");
  }
}

let d = new Dog();
d.makeSound();
d.move();

// Abstract class:
// - cannot create object
// - must be extended
// - can have abstract + normal methods


