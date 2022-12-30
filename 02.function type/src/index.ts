// doc
// function declaration in typescript
function intro(name: string, age: number): string {
  return `My name is ${name} and I am ${age} years old`;
}

// function expression in typescript
const intro1 = function intro(
  name: string,
  age: number
): string {
  return `My name is ${name} and I am ${age} years old`;
};

// arrow function
const intro2 = (name: string, age: number): string => {
  return `My name is ${name} and I am ${age} years old`;
};

// default and optional parameters in typescript
function intro3(name: string, age: number = 20): string {
  return `My name is ${name} and I am ${age} years old`;
}

function intro4(name: string, age?: number): string {
  if (age) {
    return `My name is ${name} and I am ${age} years old`;
  }
  return `My name is ${name}`;
}

// custom parameter an return type

enum AgeUnit {
  YEAR = "year",
  MONTH = "month",
}

type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  country: string;
};

function ageYearToMonth(person: Person): Person {
  if (person.ageUnit === AgeUnit.YEAR) {
    person.ageUnit = AgeUnit.MONTH;
    person.age = person.age * 12;
  }
  return person;
}

console.log(
  ageYearToMonth({
    name: "John",
    age: 20,
    ageUnit: AgeUnit.YEAR,
    country: "USA",
  })
);

// function call signature
type Greeting = (greeting: string) => string; //not used, but can use
type AnotherPerson = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  country: string;
  // greet: Greeting;
  greet: (greeting: string) => string;
};

const anotherPerson: AnotherPerson = {
  name: "John",
  age: 20,
  ageUnit: AgeUnit.YEAR,
  country: "USA",
  greet: (greeting) => {
    return `${greeting} ${anotherPerson.name}`;
  },
};
console.log(anotherPerson.greet("Hello"));
