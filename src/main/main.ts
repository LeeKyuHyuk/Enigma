import * as path from 'path';
import * as url from 'url';
import { BrowserWindow, app, ipcMain } from 'electron';
import * as WebSocketServer from './core/WebSocketServer';
import * as Protocol from '../type/Protocol';

require('@electron/remote/main').initialize();

let mainWindow: Electron.BrowserWindow | null;

function createWindow(): void {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    title: 'Enigma',
    minHeight: 600,
    minWidth: 350,
    height: 600,
    width: 350,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      webSecurity: true,
      allowRunningInsecureContent: false,
      devTools: process.env.NODE_ENV !== 'production',
    },
  });

  // mainWindow.setMenu(null);

  // and load the index.html of the app.
  mainWindow
    .loadURL(
      url.format({
        pathname: path.join(__dirname, './index.html'),
        protocol: 'file:',
        slashes: true,
      }),
    )
    .finally(() => {
      /* no action */
    });

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  WebSocketServer.default(mainWindow);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it"s common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
ipcMain.on(Protocol.GET_USER_INFO, WebSocketServer.getUserInfo);
