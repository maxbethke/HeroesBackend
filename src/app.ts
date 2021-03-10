import dotenv from "dotenv";
import express from "express";

import MasterRouter from "./routers/master.router";

console.log(process.env.APP_PORT);

class Server {
  public app = express();
  public router = MasterRouter;
}

const server = new Server;

server.app.use('/api', server.router);

(port = process.env.APP_PORT) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
};