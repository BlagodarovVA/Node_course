const getArgs = (args) => {
    const res ={};
    const [executer, file, ...rest] = args;     // обрезаем первые 2 элемента
    rest.forEach((value, index, array) => {
        if (value.charAt(0) == '-') {           // первый смвол значения
            if (index == array.length - 1) {
                res[value.substring(1)] = true;     // добавляем еще 1 элемент для простоты перебора
            } else if (array[index + 1].charAt(0) != '-') {
                res[value.substring(1)] = array[index + 1];
            } else {
                res[value.substring(1)] = true;     // добавляем еще 1 элемент для простоты перебора
            }
        }
    });
    return res;
};

export { getArgs };