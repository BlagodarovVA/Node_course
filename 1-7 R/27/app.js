const {fork} = require('child_process');

const forkProcess = fork('fork.js');    // создаем форк процесс

forkProcess.on('message', (msg) => {
    console.log('msg: ',msg);
});

forkProcess.on('close', (code) => {
    console.log('Exited: ',code);
});

// передаём сообщение
forkProcess.send('Ping');
forkProcess.send('disconnect');