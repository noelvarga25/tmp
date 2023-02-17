const befunge93 = require('befunge93');
const fs = require('fs');

// Get the filename from the command-line arguments
const filename = process.argv[2];

// Read the contents of the file
fs.readFile(filename, 'utf8', function(err, contents) {
  if (err) {
    console.error(`Error reading file ${filename}: ${err.message}`);
    return;
  }

  // Execute the contents of the file using befunge93
  const result = befunge93(contents);

  // Print the output of the program
  console.log(result);
});