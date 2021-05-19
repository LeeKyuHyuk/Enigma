import * as React from 'react';
import { Layout, PageHeader, Button, Tooltip } from 'antd';
import {
  UserAddOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

const { Content } = Layout;

const AppLayout = styled(Layout)`
  height: 100%;
  background: #f0f2f5;
`;

const AppTitle = styled(PageHeader)`
  padding: 5px 24px;
`;

const AppContent = styled(Content)`
  background: #ffffff;
`;

function App() {
  return (
    <AppLayout>
      <AppTitle
        title="친구"
        extra={[
          <Tooltip title="프로필">
            <Button key="profile" shape="circle" icon={<UserOutlined />} />
          </Tooltip>,
          <Tooltip title="친구 추가">
            <Button
              key="add-friend"
              shape="circle"
              icon={<UserAddOutlined />}
            />
          </Tooltip>,
          <Tooltip title="설정">
            <Button key="setting" shape="circle" icon={<SettingOutlined />} />
          </Tooltip>,
        ]}
      />
      <AppContent>main content</AppContent>
    </AppLayout>
  );
}

export default App;
