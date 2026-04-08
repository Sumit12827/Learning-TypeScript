let username: string = "Sumit";
let age: number = 21;
let isStudent: boolean = true;

console.log(username, age, isStudent);
// Basic Types in TypeScript:
// - string → text
// - number → integers & decimals
// - boolean → true/false

// Syntax:
// let variableName: type = value;




//type inference: TypeScript automatically infers the type based on the assigned values
let country = "india";
country = "USA"; //valid
// country = 123; //invalid, TypeScript will throw an error because 'country' is inferred as a string




//special types(Important for beginners):
//1.ANY
let data: any = 10;
data = "hello";
data = true;          //avoid this in real projects(not safe)


//2. UNKNOWN
let value: unknown = "Hello";
//You must check type before using:
if (typeof value === "string") {
  console.log(value.toUpperCase());
}


// 3. VOID(for functions)
function logMessage(): void {
    console.log("this function does not return anything");
}


//4. NULL and UNDEFINED
let empty: null = null;
let notAssigned: undefined = undefined;
// in this case, 'empty' can only be assigned null and 'notAssigned' can only be assigned undefined.





//conclusion
// any → disables type checking (avoid)
// unknown → safer version of any
// void → no return from function
// null / undefined → empty values











