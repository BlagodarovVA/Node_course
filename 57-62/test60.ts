const g = 'fffffss';

let h: 'hi' = 'hi';

type  direction = 'left' | 'right';     // тип с 2 значениями

function moveDog(direction: direction): -1 | 0| 1 {
    switch(direction) {
        case 'left':
            return -1;
        case 'right':
            return 1;
        default:
            return 0;
    }
}
moveDog('left');    // можно выбрать ограниченные направления из типа


interface IConnection {
    host: string;
    port: number;
}

function connect(connection: IConnection | "default") {
    console.log(connection);
}

connect('default');


const req = {
    host: 'localhost',
    protocol: 'https' as 'https'    // кастование типа
}

let i: any = 5;
let j: number = i as number;
// let j = i as number;
// let j = <number>i;

function conn(host: string, protocol: 'http' | 'https') {

}
conn(req.host, req.protocol); 