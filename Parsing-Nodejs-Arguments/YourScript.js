#!/usr/local/bin/node
const { exec } = require('child_process');
var yourscript = exec('lbrynet claim list',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
    
            console.log(stdout);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });

module.exports.yourscript
