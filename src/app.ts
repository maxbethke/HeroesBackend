import dotenv from 'dotenv';

import { Server } from './server';

const server = new Server();

server.app.use('/api', server.router);

(port = process.env.APP_PORT) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
};