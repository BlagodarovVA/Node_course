const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const logDbConnection = () => {
    console.log('DB connected');
}


// слушаем событие, если появляется выполняем аргумент 2
myEmitter.addListener('connected', logDbConnection);
// генерируем событие
myEmitter.emit('connected');


// удаление листенеров
myEmitter.removeListener('connected', logDbConnection);
//myEmitter.off('connected', logDbConnection);
//myEmitter.removeAllListeners('connected');
myEmitter.emit('connected');


// подписываемся снова
myEmitter.on('msg', (data) => {
    console.log(`Получил ${data}`);
});

// первый листенер, который отработает
myEmitter.prependListener('msg', (data) => {
    console.log(`Prepend`);
});
myEmitter.emit('msg', 'Привет. Получай сообщение');


// подписка только на 1 события. после его получения листенер удаляется
myEmitter.once('off', () => {
    console.log('off - вызвался 1 раз');
});
myEmitter.emit('off');
myEmitter.emit('off');


// установка макс числа листенеров. по дефолту 10
console.log(myEmitter.getMaxListeners());
myEmitter.setMaxListeners(1);
console.log(myEmitter.getMaxListeners());


// количество существующих листенеров события
console.log(myEmitter.listenerCount('msg'));
console.log(myEmitter.listenerCount('off'));
console.log(myEmitter.listeners('msg'));

// вывод событий, на которые подписаны
console.log(myEmitter.eventNames());


// обработка ошибок
myEmitter.on('error', (err) => {
    console.log(`Произошла ошибка ${err.message}`);
});

myEmitter.emit('error', new Error('BOOOM!'));


const target = new EventTarget();
const logTarget = () => {
    console.log(`Connected to target`);
}

target.addEventListener('connected', logTarget);
// вызов триггера события
target.dispatchEvent(new Event('connected'));