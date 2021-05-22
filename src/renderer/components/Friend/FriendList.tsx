import * as React from 'react';
import { List, Avatar, Empty } from 'antd';
import { ipcRenderer } from 'electron';
import { Friend } from '../../../type/Friend';

type FriendListProps = {
  friendData: Friend[];
};

function FriendList({ friendData }: FriendListProps) {
  const [message, setMessage] = React.useState<string>('');

  ipcRenderer.on('getMessage', (event, payload) => {
    setMessage(`${message}\n${payload}`);
  });

  return (
    <List
      itemLayout="horizontal"
      locale={{ emptyText: <Empty description="앗..! 친구가 없어요...🥺" /> }}
      dataSource={friendData}
      renderItem={(friend) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={friend.name}
            description={friend.ip}
          />
        </List.Item>
      )}
    />
  );
}

export default FriendList;
