//your JS code here. If required.

const element = document.getElementById("level");

// Calculate the DOM level by tracing the parent elements
let level = 0;
let currentElement = element;
while (currentElement) {
  currentElement = currentElement.parentElement; // Go up one level
  level++; // Increment level
}

// Display the result using alert
alert("The level of the element is: " + level);
