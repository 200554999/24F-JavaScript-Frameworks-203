// Importing functions from utils.js
import { printWelcomeMessage, convertCelsiusToFahrenheit, multiplyThreeNumbers, advancedFunction } from './utils.js';

// Call the printWelcomeMessage function
printWelcomeMessage("Vasu", "Naman", "Abhishek");

// Call the conversion function
const fahrenheit = convertCelsiusToFahrenheit(31);
console.log(`31 degrees Celsius is ${fahrenheit} degrees Fahrenheit.`);

// Call the multiplication function
const multiplicationResult = multiplyThreeNumbers(2, 3, 4);
console.log(`The multiplication of 2, 3, and 4 is ${multiplicationResult}.`);

// Call the advanced function
const advancedResult = advancedFunction();
console.log(`Result from advanced function: ${advancedResult}`);
