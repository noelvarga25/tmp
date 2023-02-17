const Befunge = require('befunge93');
const fs = require('fs')

let befunge = new Befunge();

befunge.run(fs.readFileSync(process.argv[2]).toString())
    .then((output) => {
        process.stdout.write(output);
    });