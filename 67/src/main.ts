import { App } from "./app";
import { LoggerService } from "./logger/logger.service";

const os = require('os');
os.hostname = () => 'localhost';

async function bootstrap() {
    const app = new App(new LoggerService());
    await app.init();
}

bootstrap();