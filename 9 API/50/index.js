import express from "express";

const port = 8000;
const app = express();      // создаем риложение


app.all('/hello', (req, res, next) => {
    console.log('All');
    next();
});

const cb = (req, res, next) => {
    console.log('CB');
    next();
}

app.route.apply('/user')
    .get('/hello', (req, res) => {
// '/hel?lo' -> helo || hello
// '/he(la)?lo' -> helo || helalo
// '/hel+lo' -> hello || helllllo
// '/hel*lo' -> hello || hel23546eyewdsfglo

    res.send('Сервер крутится!');
    })
    .post('/hello', (req, res) => {
        res.send('Привет POST');
});


app.listen(port, () => {    // для прослушки запросов
    console.log(`Сервер запущен на http://localhost:${port}`);
});

