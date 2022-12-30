// doc 
// function declaration in typescript
function intro(name: string, age: number): string {
    return `My name is ${name} and I am ${age} years old`;
}

// function expression in typescript
const intro1=function intro(name: string, age: number): string {
    return `My name is ${name} and I am ${age} years old`;
}

// arrow function
const intro2=(name: string, age: number): string => {
    return `My name is ${name} and I am ${age} years old`;
}


