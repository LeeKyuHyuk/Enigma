import * as React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import FriendTitle from './Friend/FriendTitle';
import WebSocketServer from '../../core/WebSocketServer';

const { Content } = Layout;

const AppLayout = styled(Layout)`
  height: 100%;
  background: #f0f2f5;
  user-select: none;
`;

const AppContent = styled(Content)`
  background: #ffffff;
`;

WebSocketServer();

function App() {
  return (
    <AppLayout>
      <FriendTitle />
      <AppContent>main content</AppContent>
    </AppLayout>
  );
}

export default App;
