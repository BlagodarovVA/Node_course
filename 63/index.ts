class Coord {
    lat: number;
    long: number;

    // protected доступен в исходном и наследуемых классах. не доступен в инстансе класса
    protected test() {
        if (this.lat > 0) {

        }
    }

    computeDistance(newLong: number, newLat: number): number {
        return 0;
    }

    constructor(lat: number, long: number) {
        this.lat = lat;
        this.long = long;
    }
}

const point = new Coord(0, 1);


class MapLocation extends Coord {
   private _name: string;
   #a: bigint;                      // приватное свойство js, редко используется

    get name() {                    // получить поле
        return this._name;
    }

    set name(s: string) {           // задать поле
        this._name = s + '_zbsss!';
    }

    // переопределяем наследуемый метод
    override computeDistance(newLong: number, newLat: number): number {
        console.log(this.name);
        return 1;
    }

    constructor (lat: number, long: number, name: string) {
        super(lat, long);
    }
}



interface LoggerService {
    log: (s: string) => void;
}

class Logger implements LoggerService {
    public log(s: string) {
        console.log(s);
    }

    private error() {       // доступен только внутри класса

    }
}

const l = new Logger();
l.log('d');


class MyClass1 {
    static a = '1';
}


class MyClass2<T> {
    a: T;
}
const b = new MyClass2<string>();
b.a;


abstract class Base {
    print(s: string) {
        console.log(s);
    }

    abstract error(s: string): void;    // скелет
}

class BaseExt extends Base {
    error(s: string) {                  // реализация

    }
}
new BaseExt().print('s');



class Animal {
    name: string;
}

class Dog {
    name: string;
    tail: boolean;
}

const puppy: Animal = new Dog();
