import RuntimeError from '../models/error';

class AuthController {
  defaultMethod() {
    throw new RuntimeError(501, 'Not implemented method');
  }
}

export = new AuthController();