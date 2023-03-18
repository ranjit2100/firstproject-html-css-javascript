console.log('swapping variable');

let num1 = 'one';
let num2 = 'two';

console.log('original value -', num1);
console.log('original value -', num2);

let num3 = num1
num1 = num2;
num2 = num3;

console.log('swap value -', num1);
console.log('swap value -', num2);