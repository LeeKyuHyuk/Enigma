import * as React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import FriendTitle from './Friend/FriendTitle';
import Friend from './Friend/Friend';

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
  return (
    <AppLayout>
      <FriendTitle />
      <AppContent>
        <Friend />
      </AppContent>
    </AppLayout>
  );
}

export default App;
