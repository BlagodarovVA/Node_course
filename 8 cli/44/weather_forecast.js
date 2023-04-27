#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { getForecast5 } from './services/api.service.js';
import { printHelp, printSuccess, printError, printForecast } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY, getKeyValue } from './services/storage.service.js';

// сохранение токена
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

// сохранение города
const saveCity = async (city) => {
    if (!city.length) {
        printError('Не передан город');
        return;
    }

    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('Город сохранен');
    } catch (e) {
        printError(e.message);
    }
}

const getForecast = async () => {
    try {
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
        const weather = await getForecast5(city);
        printForecast(weather);
    } catch (e) {
        // обработка ошибок
        if (e?.response?.status == 404) {       // ? - проверка что ошибка и ответ существуют
            printError('404 - Неверно указан город');
        } else if (e?.response?.status == 401) {
            printError('401 - Неверно указан токен');
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
        return printHelp();
    }
    if (args.s) {
        return saveCity(args.s);
    }
    if (args.t) {
        return saveToken(args.t);
    }

    // вывести погоду
    return getForecast();
};

initCLI();