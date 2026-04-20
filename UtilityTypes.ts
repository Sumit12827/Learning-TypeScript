 //what are Utility Types in typescript?
//pre-build typescript tools to transform types

// instead to writning types again and again , you reduce and modify them 

//base example (we will use this everyWhere)
type User = {
    id: number;
    name: string;
    email: string;
    password: string;
};


//1.Partial<T>
// makes all properties of type optional

//without Partial
function updateUser(user: User) {
    // requires ALL fields
}
//Problem: You may only want to update one field

//with Partial
function updateUserPartial(user: Partial<User>) {
    // only requires the fields you want to update
}
updateUserPartial({ name: "Sumit" });
updateUserPartial({ email: "test@gmail.com" });

//summary
//Partial<T> = "everything optional"





//2.Pick<T, K>
// creates a new type by picking specific properties from an existing type

type UserPreview = Pick<User, "id" | "name">;

let userPreview: UserPreview = {
    id: 1,
    name: "Sumit"
};

//summary
//Pick<T, K> = "pick specific properties"   




//3.Omit<T, K>
//removes some properties

type SafeUser = Omit<User, "password">;
//result
// {
//   id: number;
//   name: string;
//   email: string;
// }


//real use case ,never sends password to frontend
function getSafeUser(user: User): SafeUser {
    return {
        id: user.id,
        name: user.name,
        email: user.email
    };
}


//Omit<T, K> = “Remove fields”


//4.record<K,T>
//Create object type with dynamic keys


type Roles = "admin" | "user";

const permissions: Record<Roles, string[]> = {
    admin: ["read", "write", "delete"],
    user: ["read"]
};


//whats happening
// {
//   admin: string[];
//   user: string[];
// }

type Status = "loading" | "success" | "error";

const messages: Record<Status, string> = {
    loading: "Please wait...",
    success: "Done!",
    error: "Something went wrong"
};

//Summary
// Record<K, T> = “Create object from keys”


