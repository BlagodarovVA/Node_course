import express from "express";

const port = 8000;
const app = express();      // создаем риложение


app.get('/hello', (req, res) => {
    // res.send({ success: true });      // передаём JSON
    // res.download('/mailer_964', 'файл приложения mailer.unl');    // предложение скачать файл с кастомным именем
    // res.redirect(301, 'http://blagodarovva.github.io/mypage');      // перенаправление
    // res.set('Content-Type', 'text/plain');      // задание заголовка
    // res.append('Warning', 'code');              // добавление заголовка
    /* res.links({
        next: 'link1';
    }); */
    
    /*res.cookie('token', '324rewr', {
        domain: '',
        path: '/',
        secure: true,
        expires: 600000
    });
    res.clearCookie('token');*/

    // es.type('application/json');
    // res.send('Ответ сервера (.)(.)');
    res.status(404).end();  // завершение обработы, чтобы не было вечной загрузки, если нет ответа.
});


app.listen(port, () => {    // для прослушки запросов
    console.log(`Сервер запущен на http://localhost:${port}`);
});

