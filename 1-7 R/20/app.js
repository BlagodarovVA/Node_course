// Установка таймеров

// const start = performance.now();
// setTimeout(() => {
//     console.log(performance.now() - start);
//     console.log('Прошла 1 сек');
// }, 1000)


// function myFunc(arg) {
//     console.log(`Аргумент => ${arg}`);
// }

// setTimeout(myFunc, 1500, 'Класс');


// Отмена таймера
// const timerId = setTimeout(() => {
//     console.log('BOOOMB');
// }, 5000)

// setTimeout(() => {
//     clearTimeout(timerId);
//     console.log('Таймер очищен');
// }, 1000);


// интервал работает аналогично
// const intervalId = setInterval(() => {
//     console.log(performance.now());
// }, 1000)

// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log('Интервал очищен');
// }, 5000);



// console.log('Перед');

// Мгновенное выполнение после всего, когда стек опустошится
// setImmediate(() => {
//     console.log('После всего');
// });

// console.log('После');


// 
const timerId = setTimeout(() => {
    console.log('BOOOMB');
}, 5000)

// убрать ссылку на таймер
timerId.unref();

// вернуть ссылку
setImmediate(() => {
    timerId.ref();
});