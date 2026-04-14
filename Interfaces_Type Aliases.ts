// //what is interfaces?

// in simple terms interfaces are like blueprints for objects. They define the structure of an object, specifying what properties and methods it should have, without providing the actual implementation.

// (structure and shape of an object)


interface User {
  name: string;
  age: number;
  isLoggedIn: boolean;
}

let user1: User = {
  name: "Sumit",
  age: 21,
  isLoggedIn: true
};

//it is also used To ensure all objects follow same structure
// Interface:
// - Defines structure of object
// - Used for consistency
// - Helps in large applications


interface User1 {
  name: string;
  age: number;
  isLoggedInn?: boolean;   // ? makes the property optional 
}

let user2: User1 = {
  name: "Sumit",
  age: 21
};





//lets learn new concept which is inherit interfaces
//main concept => one interface can extend another interface

interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  course: string;
}

let student1: Student = {
  name: "Sumit",
  age: 21,
  course: "Computer Science"
};

// Interface can extend another using "extends"
// Helps reuse code







// Type Aliases
// Concept: Create custom type by giving a name to a type definition
// Type Alias = create custom type


type User2 = {
  name: string;
  age: number;
};
let user3: User2 = {
  name: "Sumit",
  age: 21
};
 //its looks same as interface but it is different concept
// Type Aliases:
// - Create custom type names
// - Can represent any type (object, union, primitive)
// - Not extendable like interfaces

//type aliases superpowers

//union types with type aliases
type Status = "success" | "error" | "pending";
let currentStatus: Status = "success";


//function types 
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;


//Primitive Alias
type ID = string | number;
let userId: ID = 101;
// Type Alias:
// - Can represent objects, primitives, unions, functions
// - More flexible than interface









