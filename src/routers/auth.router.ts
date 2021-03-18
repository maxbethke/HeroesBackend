import { NextFunction, Request, Response, Router } from 'express';
import AuthController from '../controllers/auth.controller';

class AuthRouter {
  private _router = Router();
  private _controller = AuthController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = this._controller.defaultMethod();
        res.status(200).json(result);
      }
      catch (e) {
        next(e);
      }
    });
  }
}

export = new AuthRouter().router;