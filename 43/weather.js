#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';


const saveToken = async (token) => {
    if (!token.length) {
        printError('Не передан token');
        return;
    }

    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Токен сохранен');
    } catch (e) {
        printError(e.message);
    }
}

const getForecast = async () => {
    try {
        const weather = await getWeather('minsk');
        console.log(weather);
    } catch (e) {
        // обработка ошибок
        if (e?.response?.status == 404) {       // ? - проверка что ошибка и ответ существуют
            printError('Неверно указан город');
        } else if (e?.response?.status == 401) {
            printError('Неверно указан токен');
        } else if (e?.response?.status == 403) {
            printError('403 - Не удалось авторизоваться на сервере');
        } else {
            printError(e.message);
        }
    }

}

const initCLI = () => {
    const args = getArgs(process.argv);
    // console.log(process.env);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        // сохранить город
    }
    if (args.t) {
        return saveToken(args.t);
    }

    // вывести погоду
    getForecast();
};


initCLI();