// let day1 = "Monday";
// let day2 = "Tuesday";
// let day3 = "Wednesday";
// let day4 = "Thursday";
// let day5 = "Friday";
// let day6 = "Satureday";
// let day7 = "Sunday";

// console.log(`Weekdays: ${day1}, ${day2}, ${day3}, ${day4}, ${day5}, ${day6}, ${day7}`);

// let dayNumber = +prompt("Enter day number:");

// if (dayNumber == 1) console.log(day1);
// else if (dayNumber == 2) console.log(day2);
// else if (dayNumber == 3) console.log(day3);
// else if (dayNumber == 4) console.log(day4);
// else if (dayNumber == 5) console.log(day5);
// else if (dayNumber == 6) console.log(day6);
// else if (dayNumber == 7) console.log(day7);

// ---------- with arrays
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satureday", "Sunday"];

//console.log(`Weekdays: ${days}`);

//let dayNumber = +prompt("Enter day number (1-7):");

// 1: dayNumber - 1
// 2: days[...]
// 3: console.log(`Day: ${...}`);
//console.log(`Day: ${days[dayNumber - 1]}`);

// ---------------- arrays ----------------
let array = []; // empty array
let numbers = [100, 200, 500, 1000, 2000];

// console.log(`Sertificates: ${numbers}`);
// console.log(`Count: ${numbers.length}`);
showAllSertificates(numbers);

// get element by index (starts with 0)
console.log(`First element: ${numbers[0]} UAH`);
console.log(`Last element: ${numbers[4]} UAH`);

// function - out of the object
// method - in the object
function showAllSertificates(sertificates) {
    console.log(`Sertificates: ${numbers}`);
    console.log(`Count: ${numbers.length}`);
}

// mixed array
let mixedArray = [1, 'hello', true, [1, 2, 3], "red", 555];

mixedArray[0]; // number
mixedArray[1]; // string
mixedArray[2]; // boolean
mixedArray[3]; // array

// ------------ array methods ------------
numbers.pop();       // remove from the end
numbers.push(2500);  // insert element to the end
numbers.shift();     // remove from the beginning
numbers.unshift(50); // insert to the begin

let newValue = +prompt("Enter new sertificate value:");
numbers.push(newValue);

console.log(`Array: ${numbers}`);

console.log(`Splice array: ${numbers.slice(2, 4)}`); // [... 2, 3 ...]
numbers.fill(0, 0, 3); // fill elements (0, 1, 2) with value = 0

console.log(`Array: ${numbers}`);

// ------------ cycles ------------
// for(variable; condition; expression) { ... iteration ... }

// 0

// let counter = 0;
// for(; counter < 10;) {
//     // code
//     ++counter;
// }
// for(let counter = 0; counter < 10; ++counter) {
//     // code
// }

for (let counter = 0; counter < 10; ++counter) {

    console.log(`${counter} Hello for!`);
}

//let summa = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5];
let summa = 0;

for (let index = 0; index < numbers.length; ++index) {
    summa += numbers[index];
}

console.log(`Sertificates summ: ${summa} UAH`);

// while cycle: while(condition) { ... code ...}
let age = +prompt("Enter your age:");
// -12

while (age < 0) {
    console.warn("Invalid age! Try again:");
    age = +prompt("Enter your age:");
}