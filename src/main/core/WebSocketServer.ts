import * as WebSocket from 'ws';
import { BrowserWindow } from '@electron/remote';

function WebSocketServer(mainWindow: BrowserWindow) {
  const webSocketServer = new WebSocket.Server({ port: 8080 });

  webSocketServer.on('connection', (ws) => {
    ws.on('message', (message) => {
      console.log('received: %s', message);
      mainWindow.webContents.send('getMessage', message.toString());
    });
    ws.send('something');
  });
}

export default WebSocketServer;
