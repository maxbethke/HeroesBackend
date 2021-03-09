import * as  Express from "express";

import MasterRouter from './routers/master.router';

export class Server {
  public app = Express();
  public router = MasterRouter;
}
