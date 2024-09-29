const fs = require('fs');

// Use 'readFile' function
fs.readFile('paragraph.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    // Output the paragraph to the terminal
    console.log(data);
});
