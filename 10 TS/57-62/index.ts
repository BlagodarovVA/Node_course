import express, { Request, Response, NextFunction } from "express";
import { userRouter } from "./users/users.js";

const port = 8000;
const app = express();

app.use((req, res, next) => {
    console.log('Время', new Date());
    next();
});


app.get('/hello', (req, res) => {
    throw new Error('Errorrrrььь!');
    // res.send('Ответ сервера (.)(.)');
    // res.end();
});

app.use('/users', userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {      // обработка ошибок
    console.log(err.message);
    res.status(500).send(err.message);
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});

