import { verify } from 'jsonwebtoken';
import { IMiddleWare } from './middleware.interface';
import { NextFunction, Request, Response } from 'express';

export class AuthMiddleware implements IMiddleWare {
	constructor(private secret: string) {}

	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.headers.authorization) {
			// Bearer JWT
			req.headers.authorization.split(' ')[1]; //JWT
			verify(req.headers.authorization.split(' ')[1], this.secret, (err, payload) => {
				if (err) {
					next();
				} else if (payload && typeof payload === 'object') {
					req.user = payload.email;
					next();
				}
			});
		}
		next();
	}
}
