// арифметичні оператор: + - * /

console.log(5 + 7);  // 12
console.log(40 - 8); // 28 
console.log(2 * 10); // 20
console.log(12 / 4); // 3

// оператор піднесення в степінь: **
console.log(2 ** 8); // 256

// остача від ділення: %
console.log(9 % 3);  // 0
console.log(11 % 3); // 2

// перетворення рядкового значення до числового: +string_value
let salary = +prompt("Enter your salary (UAH): ");

console.log(salary / 40);
console.log(`Your salary in dollars = ${salary / 40} $`);
console.log(`Your salary with bonus = ${salary + 1500} UAH`);

// різниця операцій для різних типів даних
console.log(2 + 2);     // 4
console.log("2" + "2"); // 22

let price = 1000 * 40;

// логічні оператори: > < >= <= == !=
// комбінаційні оператори: && (and) || (or)

console.log("10 > 5: ", 10 > 5); // true
console.log("10 < 5: ", 10 < 5); // false
console.log("10 == 5: ", 10 == 5); // false
console.log("10 != 5: ", 10 != 5); // true

// if (condition) { ... code ... }

let number = +prompt("Enter your number:");

if (number > 0) {
    console.log("Your number is positive!");
}
if (number < 0) {
    console.log("Your number is negative!");
}

let age = +prompt("Enter your age:");

// if { ... true ...} else { ... false ...}

if (age > 0 && age <= 130) {
    console.log("Right value!");
}
else {
    console.warn("Invalid age! Value must be in the range from 0 to 130.");
}

// check if the entered year is leap
let year = +prompt("Enter year:");

if (year % 4 == 0) {
    console.log("Year is a leap!");
}
else {
    console.log("Year is not a leap!");
}