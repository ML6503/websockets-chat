import { WebSocketServer } from "ws";
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const PORT = process.env.PORT;

const ws = new WebSocketServer({port: PORT});

ws.on('connection', client => {
  console.log('Server is running on ', `ws://localhost:${PORT}`);
  client.on('message', (message, isBinary) => {
    [...ws.clients].filter(c => c !== client).forEach(c => c.send(isBinary ? message.toString() : message));
  });
});
