type coord = {lat: number, long: number};

function compute1(coord: coord) {
    
}


interface ICoord {
    lat: number;
    long: number;
}

function compute2(coord: ICoord) {
    
}

type ID = number | string;

/*
interface Animal {
    name: string;
}

interface Dog extends Animal {
    tail?: boolean;
}

const dog: Dog = {
    name: 'fsgdgwe',
    tail: true
}
*/

/*
type Animal= {
    name: string;
}

type Dog = Animal & {   // объединение типов
    tail: boolean;
}

const dog: Dog = {
    name: 'qwerw',
    tail: true
}
*/

interface Dog {
    name: string;
}

interface Dog {     // можно дополнить, по сравнению с типом
    tail: boolean
}

const dog: Dog = {
    name: 'sdfgs',
    tail: true
}