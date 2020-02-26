#!/usr/local/bin/node
const { exec } = require('child_process');
var yourscript = exec('lbrynet claim search --text=Kdenlive',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
    
            console.log("Last five lines: \n\n"+ stdout.slice(stdout.length - 78));
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });

module.exports.yourscript
