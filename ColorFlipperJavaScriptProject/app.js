// Array containing predefined colors
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Get a reference to the button with the id "btn"
const btn = document.getElementById("btn");

// Get a reference to an HTML element with class "color"
const color = document.querySelector(".color");

// Add a click event listener to the button
btn.addEventListener("click", function () {
    // Get a random number between 0 and the length of the 'colors' array
    const randomNumber = getRandomNumber();

    // Set the background color of the document's body to the randomly selected color
    document.body.style.backgroundColor = colors[randomNumber];

    // Update the text content of the element with class "color" to display the selected color
    color.textContent = colors[randomNumber];
});

// Function to generate a random number within the range of the 'colors' array length
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
