//what are literal types?
//let name: string = "sumit";   this is normal types 

//"sumit" is a value
//string is a type(it can be anything)


//but is you want 
//name can only be "sumit" and not any other string
//then we can use literal types

//step 1: basic literal types;
let direction: "left" = "left"; // direction can only be "left"

// direction = "right"; // Error: Type '"right"' is not assignable to type '"left"'.

// step 2: union of literal types
type Direction = "left" | "right" | "up" | "down";
let move: Direction;

move = "left"; // Valid
move = "right"; // Valid
move = "up"; // Valid
move = "down"; // Valid

// move = "forward"; // Error: Type '"forward"' is not assignable to type 'Direction'.



//Step 3: Literal Types with Numbers
let dice: 1 | 2 | 3 | 4 | 5 | 6;

dice = 3; // Valid
//dice = 7; // invalid Error

// Useful for:
// Ratings (1–5)
// Levels
// Fixed numeric options





//step 4 Boolean literal types
let isEnabled: true;

isEnabled = true; //valid





//step5: Literal Types with Functions

function login(role: "admin" | "user") {
    if (role === "admin") {
        console.log("Full access");
    } else {
        console.log("Limited access");
    }
}
login("admin"); 
//login("guest"); // ❌ Error: Argument of type '"guest"' is not assignable to parameter of type '"admin" | "user'.




//step 6: Literal Types with Type Aliases
type Status = "success" | "error" | "loading";

let s1: Status = "success"; // Valid
let s2: Status = "error"; // Valid
let s3: Status = "loading"; // Valid

// s1 = "pending"; // ❌ Error: Type '"pending"' is not assignable to type 'Status'.




//step 7: Literal Types with objects

type UserRole = "admin" | "user";

type User = {
    name: string;
    role: UserRole;
};

const user: User = {
    name: "Sumit",
    role: "admin"
};

//user.role = "guest"; // ❌ Error: Type '"guest"' is not assignable to type 'UserRole'.



//step8 : Literal types real backend examples
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

function makeRequest(method: HttpMethod) {
    console.log("Request:", method);
}

makeRequest("GET");   // Valid
//makeRequest("PATCH"); // Error: Argument of type '"PATCH"' is not assignable to parameter of type 'HttpMethod'.


