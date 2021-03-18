import { loadEnv, env } from '../env';
import express, { Request, Response, NextFunction } from 'express';

import MasterRouter from "./routers/master.router";
import RuntimeError from './models/error';

loadEnv();

class Server {
  public app = express();
  public router = MasterRouter;
}
const server = new Server;

server.app.use('/api', server.router);

server.app.use('/', () => {
  throw new RuntimeError(404, 'Not Found');
});

server.app.use((err: RuntimeError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || env.HTTP_ERRORCODE).json({
    status: 'error',
    statusCode: err.statusCode,
    message: err.message
  });
});

((port = env.APP_PORT || 5000) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();