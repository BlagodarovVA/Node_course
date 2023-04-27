import express from "express";

const port = 8000;
const app = express();      // создаем риложение

app.get('/hello', (req, res) => {
    res.send('Сервер крутится!');
})

app.listen(port, () => {    // для прослушки запросов
    console.log(`Сервер запущен на http://localhost:${port}`);
});

