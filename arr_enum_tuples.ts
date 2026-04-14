// 1. Arrays in TypeScript
//main concept  => array store multiple values of same types

let numbers: number[] = [12,3,4,5,6];
let names: string[] = ['sumit' , "sandy" , "suk"]

//there is one more syntax
let marks: Array<number> = [90 , 9 , 78];

//operations
numbers.push(56);       // add
numbers.pop();         // remove
//numbers.push("hello"); //  Error
console.log(numbers)
console.log(marks)


// Arrays:
// - Store multiple values
// - All elements must be same type
// Syntax:
// type[] OR Array<type>



//Tuples in TypeScript
//main concept => fixed size + fixed types + fixed order


let user: [number , string] = [1 , "sumit"]; //meaning index 0 = number , index 1 = string 
//and most important oder matters in tuple

//accessing values
console.log(user[0]) // 1
console.log(user[1]) // "sumit"

let product: [number , string , boolean ] = [101 , "laptop" , true];

//Tuples:
//-fixed size , fixed types , fixed order




//Enums in typescript(most important for projects )
//main concept => group of named contants
//use when values are fixed options

enum direction{
    Up,
    down,
    left,
    right
}

let move: direction = direction.Up; 
console.log(move) // 0

//by default enum values start from 0 and increment by 1
//we can also assign custom values to enum members

enum status{
    success = 200,
    error = 500,
    notFound = 404
}

let response: status = status.success;
console.log(response) // 200


//one more example of enum with string values
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let currentRole: Role = Role.Admin;
console.log(currentRole);


// Enums:
// - Used for fixed set of values
// - Can be numeric or string

// Example:
// enum Role { Admin, User }


// When to use what:
// Arrays → list of similar data
// Tuples → fixed structured data (API response, DB row)
// Enums → fixed choices (status, roles, states)













