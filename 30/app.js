let outter = null
let run = function () {
    let inner = outter
    let unused = function () {
        if (inner) console.log('hi')
    }
    outter = {
        longStr: new Array(1000000).join('*'),
    };
};

setInterval(run, 1000)


// код раньше делал утечку памяти
