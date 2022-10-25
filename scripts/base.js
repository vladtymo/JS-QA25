// додавання HTML коду вкінець сторінки
document.write("<h2>Title element from JavaScript</h2>");

// створення змінної: let name = value;
let text = "green red blue";

// показ значення
alert(text);

// запитуємо значення в користувача та зберігаємо в змінну email
let email = prompt("Enter your email:");

// показ значення email на сторінку
document.write("<p>Your email is " + email + "</p>"); // конкатенація - зʼєднання рядків
document.write(`<p>Your email is ${email}</p>`);      // інтерполяція - включення в рядок певного виразу

// типи даних: number string 

console.log(currentYear);       // undefined

var currentYear = 2022;         // number
let currentMonth = "October";   // string
let isLeapYear = true;          // boolean

currentMonth = 10;              // change type to number

let undefinedValue = undefined; // undefined variable
let emptyObject = null;         // value is null

console.log(`Current year: ${currentYear}, type: ${typeof currentYear}`);
console.log(`Current month: ${currentMonth}, type: ${typeof currentMonth}`);
console.log(`Empty object: ${emptyObject}, type: ${typeof emptyObject}`);
console.log(`Is leap year: ${isLeapYear}, type: ${typeof isLeapYear}`);