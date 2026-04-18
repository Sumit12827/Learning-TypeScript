//generics = write code once  , use for multiple types
//instead of fixing types , we use a placeholder type

//func without generic 
function identityNumber(val: number): number {
  return val;
}
//it only workk for number type

//func with generic
function identity<T>(val: T): T {
  return val;
}

//usage
console.log(identity<number>(10));
console.log(identity<string>("Hello"));

//explanation
// <T> → generic type parameter
// T → placeholder for actual type
// identity<number> → specify type when calling function



//generics with arrays
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirst<number>([1, 2, 3]));
console.log(getFirst<string>(["a", "b"]));


//generic with objects
function printData<T>(data: T): void {
  console.log(data);
}


//Notes
// Generics:
// - Use <T>
// - Makes code reusable
// - Works with any type



