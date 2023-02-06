import http from "http";

const host = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
    switch (req.method) {
        case 'GET':
            switch (req.url) {
                case '/hello':
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Сервер крутится!');
                break;
            }
        break;
    }

    
    
});

// слушает запросы, сервер не остановится после запуска
server.listen(port, host, () => {
    console.log(`Сервер запущен на ${host}:${port}`);
});