type direct = 'left' | 'right';

enum Direct {       // объявление ограниченной структуры
    Left,
    Right
}

Direct.Left;

function move(direction: Direct) {
    switch(direction) {
        case Direct.Left:
            return -1;
        case Direct.Right:
            return 1
    }
}

function objMod(obj: {Left: number}) {

}
objMod(Direct);


const enum Direct2 {
    Up,
    Down
}

let myDirect = Direct2.Up;