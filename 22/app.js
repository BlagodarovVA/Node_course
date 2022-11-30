const fs = require('fs');


console.log('Init');


setTimeout (() => {
    console.log(performance.now(), 'Timer 0');
}, 100);


setImmediate(() => {
    console.log('Immediate');
});


fs.readFile(__filename, () => {
    console.log('File readed');
});


setTimeout (() => {
    for (let i = 0; i < 3000000000; i++) {
        
    }
    console.log('For - висим');
    Promise.resolve().then(() => {
        console.log('Promise after FOR');
    });
}, 0);


Promise.resolve().then(() => {
    console.log('Promise');
});


process.nextTick(() => console.log('nextTick'));


console.log('Final');