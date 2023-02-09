let a: number = 5;
let b: string = '4';

let c = a + b;                  // конкатенация
let d: number = a + Number(b);  // приведение и сложение

let e = true;

let names: string[] = ['sd', 'dsfgsd'];     // массив строк
let ages: number[] = [4, 7];                // массив чисел

let tup: [number, string] = [2, 'ddsfg'];   // массив опр. длины с элемнтами опр. типа

let f: any = 3;                             // лбой элемент, менят типы
f = 'gfddfg';
f = true;

let anyArr: any[] = ['sadfa', 234, true];   // смешанный масив


function great(name: string): string {      // типизируется аргумент и вывод
    return name + 'Hi';
}

names.map((x: string) => x);

function coord(coord:{lat: number, long?: number}) {    // long? - свойство не обязательно
    
}