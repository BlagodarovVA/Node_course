// подсветка текста
import chalk from "chalk";
// обрезка лишних отступов
import dedent from 'dedent-js';

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

export { printError, printSuccess, printHelp, printWeather };