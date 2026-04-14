// firat lets understand what is type inference and type annotation in typescript

// Type inference: TypeScript automatically infers the type of a variable based on its initial value
let num = 42; // TypeScript infers that num is of type number
let str = "Hello"; // TypeScript infers that str is of type string
let bool = true; // TypeScript infers that bool is of type boolean

// Type annotation: We can explicitly specify the type of a variable using type annotations
let age: number = 30; // age is explicitly annotated as a number
let name: string = "Alice"; // name is explicitly annotated as a string
let isStudent: boolean = false; // isStudent is explicitly annotated as a boolean

// Type inference is often sufficient, but type annotations can be useful for clarity and to catch errors early




//functions(whrer type annotationis mst important)


function add(a: number, b: number): number {
  return a + b;
}
//if you skips types types becomes (any) which is is bad practice and can lead to runtime errors

// Functions should always use type annotations:
// - parameters
// - return type



