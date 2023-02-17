const Befunge = require('befunge93');
const fs = require('fs')

let befunge = new Befunge();
let rd = process.argv[2];

befunge.run(fs.readFileSync(fileToRead).toString());

befunge.onOutput = (output) => {
    console.log(output);
};