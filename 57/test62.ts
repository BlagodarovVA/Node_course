// function log<T>(obj: T): T {       // generic
//     console.log(obj);
//     return obj;
// }

// log<string>('dsfg');
// log<number>(4);


interface HasLength {
    length: number;
}


function log<T extends HasLength, K>(obj: T, arr: K[]): K[] {       // передаем объект, который удовлетворяет HasLength
    arr.length;
    obj.length;
    console.log(obj);
    return arr;
}
log<string, number>('sdf', [1]);


interface IUser {
    name: string;
    age?: number;
    bid: <T>(sum: T) => boolean;
}

function bid<T>(sum: T): boolean {
    return true;
}