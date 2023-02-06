// подсветка текста
import chalk from "chalk";
// обрезка лишних отступов
import dedent from 'dedent-js';
import { getIcon } from "./api.service.js";


const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Без параметров - вывод погоды
        -s [CITY] для установки города
        -h для вывода помощи
        -t [API_KEY] для сохранения токена`
    )
}

// сейчас
const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgYellowBright(' Погода в городе ')} ${res.name}
        ${chalk.bgWhiteBright(icon + '  ')} ${res.weather[0].description}
        ${chalk.bgMagenta(' Температура:    ')} ${Math.trunc(res.main.temp)} (ощущается как ${Math.trunc(res.main.feels_like)})
        ${chalk.bgRed(' Атм.давление:   ')} ${Math.trunc(res.main.grnd_level * 760 / 1013.25)}
        ${chalk.bgGreenBright(' Влажность:      ')} ${res.main.humidity}
        ${chalk.bgCyan(' Скорость ветра: ')} ${res.wind.speed}
        `
    )
}

// на 5 дней
const printForecast = (res) => {
    const index = [0, 7, 15, 23, 31, 39];
    for (let i = index[0]; i < index.length; index[i++]) {
        const resListIndex = res.list[index[i]];
        const icon = getIcon(res.list[index[i]].weather[0].icon);
        console.log(
            dedent`${chalk.bgYellowBright(' Погода в городе ')} ${res.city.name} на ${resListIndex.dt_txt}
            ${chalk.bgWhiteBright(icon + '  ')} ${resListIndex.weather[0].description}
            ${chalk.bgMagenta(' Температура:    ')} ${Math.trunc(resListIndex.main.temp)} (ощущается как ${Math.trunc(resListIndex.main.feels_like)})
            ${chalk.bgRed(' Атм.давление:   ')} ${Math.trunc(resListIndex.main.grnd_level * 760 / 1013.25)}
            ${chalk.bgGreenBright(' Влажность:      ')} ${resListIndex.main.humidity}
            ${chalk.bgCyan(' Скорость ветра: ')} ${resListIndex.wind.speed}
            ------------------------------------------------
            `
        )
    }
}


export { printError, printSuccess, printHelp, printWeather, printForecast };