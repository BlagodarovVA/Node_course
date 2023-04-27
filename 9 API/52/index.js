import express from "express";
import { userRouter } from "./users/users.js";

const port = 8000;
const app = express();


app.get('/hello', (req, res) => {

    res.send('Ответ сервера (.)(.)');
    res.end();
});

app.use('/users', userRouter);      // при переходе сюда пользователь попадает во внешний роутер


app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});

