import { Container } from "inversify";
import { App } from "./app";
import { ExceptionFilter } from "./errors/exception.filter";
import { LoggerService } from "./logger/logger.service";
import { UserController } from "./users/users.controller";
import { TYPES } from "./types";
import { ILogger } from "./logger/logger.interface";
import { IExceptionFilter } from "./errors/exception.filter.interface";

const os = require('os');
os.hostname = () => 'localhost';


const appContainer = new Container();
appContainer.bind<ILogger>(TYPES.ILogger).to(LoggerService);
appContainer.bind<IExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter);
appContainer.bind<UserController>(TYPES.UserController).to(UserController);
appContainer.bind<App>(TYPES.Application).to(App);
const app = appContainer.get<App>(TYPES.Application);
app.init();

export {app, appContainer};

