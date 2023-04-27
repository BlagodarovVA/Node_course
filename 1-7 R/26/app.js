//const {exec} = require('child_process');
const {spawn} = require('child_process');

// const childProcess = exec('dir', (err, stdout, stderr) => {
//     if (err) {
//         console.error('err: ',err.message);
//     }
//     console.log(`stdout: ${stdout}`);   // аутпут процесса
//     console.log(`stderr: ${stderr}`);   // аутпут ошибки
// });
const childProcess = spawn('dir');

childProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

childProcess.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});


childProcess.on('exit', (code) => {
    console.log(`Код выхода: ${code}`);
});