//Union = “OR” type
//a variable can be one or serveral types

let id: string | number;

id = 101;      // write
id = "A101";   // write
// id = true; wrong



//real use case when data comes in different formats
type UserId = string | number;
let userId: UserId = "user123";


//there is one problem 
// function printId(id: string | number) {
//   console.log(id.toUpperCase()); //  Error
// }
//because number does not have uppercase method so we need to check type before using it
//solution
// function printId(id: string | number) {
//   if (typeof id === "string") {
//     console.log(id.toUpperCase());
//   } else {
//     console.log(id);
//   }
// }
// Union Types:
// - Use | (OR)
// - Variable can be one of multiple types
// - Requires type checking (narrowing)




2.// Intersection = “AND” type
//a variable must satisfy multiple types at the same time

type Person = {
  name: string;
};

type Employee = {
  salary: number;
};

type Staff = Person & Employee;
let staff1: Staff = {
  name: "Sumit",
  salary: 50000
};
// Intersection Types:
// - Use & (AND)
// - Combines multiple types
// - Must satisfy all properties




