// --------------- DOM ---------------
// Document Object Model

// add html code to the end
document.write("<h3>Dynamic Title</h3>");

// get element from DOM
const myList = document.getElementById("list");
const addButton = document.getElementById("add-btn");
const clearButton = document.getElementById("clear-btn");

// додавання обробника події в JS
addButton.onclick = () => {
    // код, який спрацює при нажатті на кнопку (add-btn) 
    let text = prompt("Enter your text:");
    myList.innerHTML += `<li>${text}</li>`;
}

clearButton.onclick = () => {
    myList.innerHTML = "";
}
