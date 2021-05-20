import * as React from 'react';
import { PageHeader, Button } from 'antd';
import {
  UserAddOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

const Title = styled(PageHeader)`
  padding: 5px 24px;
`;

function FriendTitle() {
  return (
    <Title
      title="친구"
      extra={[
        <Button key="profile" shape="circle" icon={<UserOutlined />} />,
        <Button key="add-friend" shape="circle" icon={<UserAddOutlined />} />,
        <Button key="setting" shape="circle" icon={<SettingOutlined />} />,
      ]}
    />
  );
}

export default FriendTitle;
