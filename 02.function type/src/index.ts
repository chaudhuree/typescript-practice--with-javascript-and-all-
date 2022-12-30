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


