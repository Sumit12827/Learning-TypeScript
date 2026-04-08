//what are Premetives types in TypeScript?
//1. String
//2. Number
//3. Boolean
//4. Null
//5. Undefined
//6. Symbol (ES6)
//7. BigInt (ES2020)


//Key Concept = they are copied by values

let a: number = 10;
let b = a;

b = 20; // this does not change the value of 'a' because 'b' is a copy of 'a', not a reference to the same memory location.

console.log(a); // 10
console.log(b); // 10

// Primitive Types:
// - Stored directly in memory
// - Copied by value
// - Changing one does NOT affect another



//REFERENCE TYPES
//1. Object
//2. Array
//3. Function

//Key Concept = they are copied by reference

let obj1 = { value : 10};
let obj2 = obj1; // this does not create a new object, but rather a reference to the same object in memory.

obj2.value = 20;

console.log(obj1.value); // 20
console.log(obj2.value); //20
// Reference Types:
// - Stored as memory reference
// - Copied by reference
// - Changing one affects the other




//ARRAYS also use REFERENCE types
let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);

console.log(arr1); // [1,2,3,4]
console.log(arr2); // [1,2,3,4]
// Arrays are reference types, so modifying 'arr2' also modifies 'arr1' since they reference the same array in memory.


//How to avoid this == USe spread operator to copy properly

let arr3 = [...arr1];
arr3.push(5);
console.log(arr1); // [1,2,3,4]


//Same for objects 
let user1 = { name: "Sumit" };
let user2 = { ...user1 };

user2.name = "Rahul";

console.log(user1.name); // Sumit
console.log(user2.name); // Rahul


