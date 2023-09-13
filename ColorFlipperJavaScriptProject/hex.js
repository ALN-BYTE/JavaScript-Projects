// Array of hexadecimal characters and numbers
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Get a reference to the button with the id "btn"
const btn = document.getElementById("btn");

// Get a reference to an HTML element with class "color"
const color = document.querySelector(".color");

// Add a click event listener to the button
btn.addEventListener("click", function () {
    let hexColor = "#"; // Initialize the hex color with "#"

    // Generate a random 6-character hex color code
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]; // Append a random character/number from the 'hex' array
    }

    // Update the text content of the element with class "color" to display the generated hex color
    color.textContent = hexColor;

    // Set the background color of the document's body to the generated hex color
    document.body.style.backgroundColor = hexColor;
});

// Function to generate a random number within the range of the 'hex' array length
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
