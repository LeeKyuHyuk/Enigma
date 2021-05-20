import * as React from 'react';
import { ipcRenderer } from 'electron';

function Friend() {
  const [message, setMessage] = React.useState<string>('');

  ipcRenderer.on('getMessage', (event, payload) => {
    setMessage(`${message}\n${payload}`);
  });

  return <>{message}</>;
}

export default Friend;
