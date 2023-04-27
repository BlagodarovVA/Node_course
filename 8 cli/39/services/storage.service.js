import { homedir } from 'os';
import { join, basename, dirname, extname, relative, isAbsolute, resolve, sep } from 'path';

const filePath = join(homedir(), 'weather-data.json');

const saveKeyValue = (key, value) => {



    
    // console.log(basename(filePath));
    // console.log(dirname(filePath));
    // console.log(extname(filePath));
    // console.log(relative(filePath, dirname(filePath)));     // путь относительно 1 пути ко второму
    // console.log(isAbsolute(filePath));                      // проверка абсолютного пути
    // console.log(resolve('..'));                 // показывает учитывая шаги относительно текущего
    // console.log(sep);                           // показывает разделитеь данной os
}

export { saveKeyValue };