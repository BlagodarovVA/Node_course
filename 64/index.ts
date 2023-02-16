let a = 'Привет';
if (typeof a == 'string') {

}
let b: typeof a;                // сделать тип как у 'а'


type Coord = {
    lat: number;
    long: number;
}

type P = keyof Coord;           // принимает только значения из набора Coord
let c: P = 'lat';


function log(a: string | null): void {
    // a?.toLowerCase();               // проверка на null обязательна
    a!.toLowerCase();                   // 'a' точно будет существовать
}


const d: bigint = BigInt(100);
const e: symbol = Symbol('dsfgd');