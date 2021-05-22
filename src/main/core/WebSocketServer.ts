import * as WebSocket from 'ws';
import { BrowserWindow } from '@electron/remote';
import * as Config from '../../type/Config';
import * as Protocol from '../../type/Protocol';

function WebSocketServer(mainWindow: BrowserWindow) {
  const webSocketServer = new WebSocket.Server({ port: Config.PORT });

  webSocketServer.on('connection', (ws) => {
    ws.on('message', (message) => {
      console.log('received: %s', message);
      mainWindow.webContents.send('getMessage', message.toString());
    });
    ws.on(Protocol.GET_USER_INFO, (message) => {
      console.log('GET!!!', message);
    });
    ws.send('something');
  });
}

export function getUserInfo(_event: any, args: any) {
  const ws = new WebSocket(`ws://${args}:${Config.PORT}`);
  ws.onopen = () => {
    ws.send(Protocol.GET_USER_INFO);
  };
}

export default WebSocketServer;
