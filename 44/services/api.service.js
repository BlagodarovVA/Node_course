import axios from 'axios';
import http from 'http';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';


const getIcon = (icon) => {
    switch (icon.slice(0, -1)) {
        case '01':
            return '☀️ ☀️ ☀️ ☀️ ☀️ ☀️ ☀️ ☀️';
        case '02':
            return '⛅ ⛅ ⛅ ⛅ ⛅ ⛅ ⛅';
        case '03':
            return '☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️';
        case '04':
            return '☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️';
        case '09':
            return '☔ ☔ ☔ ☔ ☔ ☔ ☔ ☔';
        case '10':
            return '🌦 🌦 🌦 🌦 🌦 🌦 🌦 🌦';
        case '11':
            return '⛈ ⛈ ⛈ ⛈ ⛈ ⛈ ⛈ ⛈';
        case '13':
            return '❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄';
        case '50':
            return '🌁 🌁 🌁 🌁 🌁 🌁 🌁 🌁 🌁';
    }
};


const getWeather = async (city) => {
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]');
    }

    // 2
    // http://api.openweathermap.org/data/2.5/weather?q=minsk&appid=******apikey*****&lang=ru&units=metric
    const { data } = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    });

    // console.log(data);
    return data;

    // 1
    // const url = new URL('http://api.openweathermap.org/data/2.5/weather');
    // url.searchParams.append('q', city);
    // url.searchParams.append('appid', token);
    // url.searchParams.append('lang', 'ru');
    // url.searchParams.append('units', 'metric');

    // http.get(url, (response) => {
    //     let res = '';
    //     response.on('data', (chunk) => {
    //         res += chunk;
    //     });

    //     response.on('end', () => {
    //         console.log(res);
    //     });

    // });
    // console.log(url);
    // return url;

};

// прогноз на 5 дней
const getForecast5 = async (city) => {

    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]');
    }

    // http://api.openweathermap.org/data/2.5/forecast?q=minsk&appid=******apikey*****&lang=ru&units=metric
    const { data } = await axios.get('http://api.openweathermap.org/data/2.5/forecast', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    });

    // console.log(data);
    return data;


    // // 1
    // const url = new URL('http://api.openweathermap.org/data/2.5/forecast');
    // url.searchParams.append('q', city);
    // url.searchParams.append('appid', token);
    // url.searchParams.append('lang', 'ru');
    // url.searchParams.append('units', 'metric');

    // http.get(url, (response) => {
    //     let res = '';
    //     response.on('data', (chunk) => {
    //         res += chunk;
    //     });

    //     response.on('end', () => {
    //         console.log(res);
    //     });

    // });
    // console.log(url);
    // return url;
};


export { getWeather, getForecast5, getIcon };