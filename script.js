const fullName = "Aliya Muslimova";
let age = 19;
const isStudent = true;
const favouriteColor = "navy";

console.log(fullName, typeof fullName);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);
console.log(favouriteColor, typeof favouriteColor);

age = 20;

console.log("New age:", age);

const userName = prompt("What is your name?");

alert("Hello, " + userName + "!");

const myName = "Aliya Muslimova";
const myGroup = "MT-2504";

console.log("My name is " + myName + " and my group is " + myGroup);


const firstNum = Number(prompt("Enter the first number:"));
const secondNum = Number(prompt("Enter the second number:"));

const sum = firstNum + secondNum;
const difference = firstNum - secondNum;
const product = firstNum * secondNum;
const quotient = firstNum / secondNum;
const remainder = firstNum % secondNum;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);



console.log("Full name:", fullName);
console.log("Length:", fullName.length);
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First three characters:", fullName.slice(0, 3));

const firstPart = "I am trying";
const secondPart = "my best.";

console.log(firstPart + " " + secondPart);


let counter = 1;

console.log("Starting value:", counter);

counter++;
console.log("After ++:", counter);

counter--;
console.log("After --:", counter);

counter += 5;
console.log("After += 5:", counter);

counter -= 3;
console.log("After -= 3:", counter);

counter *= 2;
console.log("After *= 2:", counter);

counter /= 4;
console.log("After /= 4:", counter);


let dogAge = 3;
let humanAge = (dogAge - 2) * 4 + 21;

console.log("Dog age:", dogAge);
console.log("Human age:", humanAge);

dogAge = 4;
humanAge = (dogAge - 2) * 4 + 21;

console.log("Dog age:", dogAge);
console.log("Human age:", humanAge);


function greetUser(name) {
    console.log("Hello, " + name + "!");
}

greetUser("Aliya");

function calculateSum(a, b) {
    return a + b;
}

console.log("Sum:", calculateSum(10, 5));
console.log("Sum:", calculateSum(6, 7));

function calculateRectangleArea(width, height) {
    return width * height;
}

console.log("Rectangle area:", calculateRectangleArea(4, 5));
console.log("Rectangle area:", calculateRectangleArea(6, 6));