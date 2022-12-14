// получаем сообщение из глобальной переменной
process.on('message', (msg) => {
    if (msg == 'disconnect') {
        process.disconnect();   // завершаем процесс
        return;                 // чтобы работа не продолжалась
    }
    console.log('Fork module: ', msg);
    process.send('Pong!');
});
