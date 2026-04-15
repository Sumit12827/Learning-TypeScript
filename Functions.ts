//intro to functions
// Function = block of code that performs a task
// In TypeScript, we add types to:
// parameters
// return value

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3));

// Explanation
// a: number, b: number → parameter types
// : number → return type



//Without Types (Bad Practice)
// function add(a, b) {
//   return a + b; //  any type
// }


// Function syntax:
// function name(param: type): returnType






//REST parameters in TypeScript(...)

//Concept => used when number of arguments is unknown

function sum(...numbers: number[]): number {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4));
// Explanation
// ...numbers → collects all values into array
// type → number[]





// Function Overloading in TypeScript
// Concept => multiple function signatures for same function name

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(a: any, b: any): any {
//   if (typeof a === "number" && typeof b === "number") {
    return a + b; // number addition
//   } else if (typeof a === "string" && typeof b === "string") 
    return a + b; // string concatenation
  
}

console.log(combine(2, 3)); // 5
console.log(combine("Hello, ", "world!")); // "Hello, world!"

// Explanation
// Multiple signatures define allowed parameter types and return types
// Implementation uses 'any' and type checks to handle logic