//1: arrow function way
// const sum = (a: number, b: number): number => a + b;
//2: named function
// const sum: (a: number, b: number) => number = function (a, b) {
//   return a + b;
// };
//3: direct declaration of function
function sum(a, b) {
    return a + b;
}
// type is defined
console.log(sum(8, 7));
// sum("2", 3);
