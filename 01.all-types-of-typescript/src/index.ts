// any type
let firstName: any = "Mark";

firstName = 123;

firstName = [5, 4, 8, 4];

// unknown type
function multiByTwo(number: unknown) {
  if (typeof number === "number") {
    return number * 2;
  }
  return "Please provide a valid number";
}

console.log(multiByTwo(4));
console.log(multiByTwo("john"));

// boolean type
let booleanValue: boolean = true;

// Literal values
booleanValue = false;

// expression of true or false
booleanValue = typeof "abc" == "string";
booleanValue = 1 > 0;

/*booleanValue = {};
booleanValue = "New York";

booleanValue = null;
booleanValue = undefined;*/

// number type

let number: number = 100;

number = 28.7;

number = -300;

number = Infinity * 0.01;

number = parseInt("12");

// number = "121";

// big int

let bigInt1 = BigInt(945845);

let biInt2 = 123564564n;
console.log(bigInt1);

const safeInt = Number.MAX_SAFE_INTEGER;

console.log(safeInt);

const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;

console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);

console.log(safeIntPlusOne === safeIntPlusTwo);

let a: bigint = BigInt(1234548);

let b: bigint = 23456465n;

let c: bigint = a - b;

// let e:bigint = 24551.2n;
// let f = Math.log(a);

// string type

let firstNamee: string = "Mark";

let fullName: string = firstNamee + " " + "Doe";

fullName.split(" ");

//fullName = 123456;

// Math.log(fullName);

// type inferance in typescript

let fname = "chaudhuree";
const num1 = 10;
let num2 = 20;
// docs: here we have no need to declare any type of variable
// we can directly declare the variable and assign the value to it
// typescript will automatically detect the type of variable
// but let have a variable name result
let result: number;
// result does not know its type;
// so we have to declare the type of result

result = num1 + num2;
// it is the best practice to let typescript to detect the type of variable
// if it cannot then we will explicitly declare the type of variable

//docs: object in typescript

let person: {
  name: string;
  age: number;
} = {
  name: "Mark",
  age: 35,
};
//imp:
// in case of type declaration we have to use semi colon
// but in case of object declaration we have to use comma

let article: {
  title: string;
  description: string;
  author: string;
  image?: string;
};

article = {
  title: "Typescript",
  description: "Typescript is a superset of javascript",
  author: "Mark",
};

//docs: type alias
type Article = {
  title: string;
  description: string;
  author: string;
  image?: string;
};

let article1: Article = {
  title: "Typescript",
  description: "Typescript is a superset of javascript",
  author: "Mark",
  image: "http://image.com",
};

// docs: union type
type dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type cat = {
  name: string;
  purrs: boolean;
};
// com: add both this property in one type

type pet = dog | cat;

let myPet: pet = {
  name: "Tom",
  barks: true,
  wags: true,
};

let myPetTwo: pet = {
  name: "jerry",
  purrs: true,
};

let myhybridPet: pet = {
  name: "jiko",
  barks: true,
  wags: true,
  purrs: true,
};

// example of union type
type stringOrNumber = string | number;

function addThem(a: stringOrNumber, b: stringOrNumber) {
  if (typeof a === "string" || typeof b === "string") {
    return `${a}${b}`;
  }
  return a.toString() + b.toString();
}

console.log(addThem("Mark", "Doe"));
console.log(addThem(1, 2));
// console.log(addThem(1, null)); // error because null is not a string or number

//docs: type intersection
type dog1 = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type cat1 = {
  name: string;
  purrs: boolean;
};
// com: add both this property in one type

type pet1 = dog1 & cat1;

let myPet1: pet1 = {
  name: "Tom",
  barks: true,
  wags: true,
  purrs: true,
};

// docs: index signature
// imp:

type Airplane = {
  flightName: string;
  airplaneModel: string;
  dateOfDeparture: string;
  timeOfDeparture: string;
  from: string;
  to: string;
  seat: {
    [key: string]: string; //indexing: key is string and value is string
  };
};

let flight: Airplane = {
  flightName: "AI-123",
  airplaneModel: "Boeing 787",
  dateOfDeparture: "12/12/2020",
  timeOfDeparture: "12:00",
  from: "New York",
  to: "London",
  seat: {
    "1A": "Mark",
    "1B": "Doe",
    "1C": "John",
    "1D": "Doe",
  },
};

// docs: array type
let names: string[] = ["Mark", "Doe", "John", "Doe"];
let numbers: number[] = [1, 2, 3, 4, 5];
let numstrings: (string | number)[] = [
  1,
  2,
  3,
  4,
  5,
  "Mark",
  "Doe",
];

// docs: tuple type
// tuple is a fixed length array
let person1: [string, number] = ["Mark", 35];

// example of tuple
// [numberOfStudent:number,passingStatus:boolean,"john","doe"]

type students = [number, boolean, ...string[]];

const passingStudents: students = [
  3,
  true,
  "john",
  "doe",
  "mark",
];
const failingStudents: students = [1, false, "scott"];
