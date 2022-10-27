// ---------- function ----------
// It is a named code block
// function name(param1, param2...) { ... code ... }

function showGreeting() {
    let login = prompt("Enter your login:");
    console.log(`Hello dear ${login} user!`);
}

// invole function/method: name()
//showGreeting();

// function with parameters
function showCube(num) {
    console.log(`Cude of the ${num} = ${num ** 3}`);
}

// put function parameters
// showCube(7);
// showCube(3);
// showCube(13);

// show square of rectangle
function showSquare(side1, side2) {
    console.log(`Square of the rectangle is ${side1 * side2} cm^2`);
}

//showSquare(14, 9);
//showSquare(45, 20);

// show random number in range
function showRandom(min, max) {
    let random = min + Math.random() * (max - min);
    let rounded = Math.round(random);
    console.log(`Random number = ${rounded}`);
}

// showRandom(0, 100);
// showRandom(5, 10);
// showRandom(300, 500);

// show weekday name
function showWeekdayName(dayNumber) {
    if (dayNumber == 1) console.log("Monday!");
    else if (dayNumber == 2) console.log("Tuesday!");
    else if (dayNumber == 3) console.log("Wednesday!");
    else if (dayNumber == 4) console.log("Thursday!");
    else if (dayNumber == 5) console.log("Friday!");
    else if (dayNumber == 6) console.log("Saturday!");
    else if (dayNumber == 7) console.log("Sunday!");
    else {
        console.error("Invalid day number!");
    }

    // if (dayNumber < 1 || dayNumber > 7) {
    //     console.warn("Invalid day number!");
    // }
}

// valid 
showWeekdayName(4);
showWeekdayName(7);
showWeekdayName(1);
// invalid
showWeekdayName(8);
showWeekdayName(-4);

// show month name
function showMonthName(monthNumber) {

    switch (monthNumber) {
        case 3: console.log("March!");
            break; // завершує констуркцію switch
        case 12: console.log("December!"); break;
        case 7: console.log("July!"); break;
        case 1: console.log("January!"); break;
        case 2: console.log("Febuary!"); break;

        // мітка default виконується якщо жодний case не спрацював
        default:
            console.error("Invalid month number!");
    }
}

let month = +prompt("Enter month number:");
showMonthName(month);