const crypto = require('crypto');
const https = require('https');

const start = performance.now();

// process.env.UV_THREADPOOL_SIZE = 8;

// for (let i = 0; i < 50; i++) {
//     crypto.pbkdf2('test', 'salt', 100000, 64, 'sha512', () => {
//         console.log(performance.now() - start);
//     });
// }

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

for (let i = 0; i < 50; i++) {
    https.get('https://yandex.ru', (res) => {
        res.on('data', () => { });
        res.on('end', () => {
            console.log(performance.now() - start);
        });
    });
}