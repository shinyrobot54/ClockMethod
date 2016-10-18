/**
 *   @author Jarvenpaa, Josiah (josiahjarvenpaa@live.com)
 *   @version 0.0.1
 *   @summary Clock || created: 10.18.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

function main() {
    for (let hours = 0; hours < 24; hours++){
        for (let minutes = 0; minutes < 60; minutes++) {
            for (let seconds = 0; seconds < 60; seconds++){
                if (seconds < 10) {
                    if (minutes < 10) {
                        if (hours < 10) {
                            console.log(`\n 0${hours} :0${minutes} :0${seconds} `);
                        }
                        console.log(`\n ${hours} :0${minutes} :0${seconds} `);
                    }
                    console.log(`\n ${hours} :${minutes} :0${seconds} `);
                }
                else (console.log(`\n ${hours} :${minutes} :${seconds} `));
            }
        }
    }
}

main();