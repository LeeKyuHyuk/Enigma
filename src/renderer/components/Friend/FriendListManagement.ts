import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { app } from '@electron/remote';
import { Friend } from '../../../type/Friend';

const enigmaAppDataPath = join(app.getPath('appData'), 'Enigma');
const friendDataPath = join(enigmaAppDataPath, 'friend.json');

function isFriendList() {
  if (!existsSync(enigmaAppDataPath)) mkdirSync(enigmaAppDataPath);
  if (!existsSync(friendDataPath)) writeFileSync(friendDataPath, '[]');
}

export function getFriendList(): Friend[] {
  isFriendList();
  return JSON.parse(readFileSync(friendDataPath).toString());
}

export function setFriendList(data: Friend[]) {
  isFriendList();
  writeFileSync(friendDataPath, JSON.stringify(data));
}
