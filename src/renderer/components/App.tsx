import * as React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import FriendTitle from './Friend/FriendTitle';
import FriendList from './Friend/FriendList';
import { getFriendList, setFriendList } from './Friend/FriendListManagement';
import { Friend } from '../../type/Friend';

const { Content } = Layout;

const AppLayout = styled(Layout)`
  height: 100%;
  background: #f0f2f5;
  user-select: none;
`;

const AppContent = styled(Content)`
  background: #ffffff;
`;

function App() {
  const [friendData, setFriendData] = React.useState<Friend[]>(getFriendList());

  return (
    <AppLayout>
      <FriendTitle setFriendData={setFriendData} />
      <AppContent>
        <FriendList friendData={friendData} />
      </AppContent>
    </AppLayout>
  );
}

export default App;
