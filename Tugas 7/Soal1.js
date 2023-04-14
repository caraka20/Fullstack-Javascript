const fs = require('fs')

fs.readFile('module.js', 'utf-8', (err, data) => {
    if (err) { console.error(err)};

    console.log("DATA :", data);
})