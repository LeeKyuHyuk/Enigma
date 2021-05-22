import * as React from 'react';
import { PageHeader, Button, Modal, Input, Form, message } from 'antd';
import {
  UserAddOutlined,
  UserOutlined,
  SettingOutlined,
  ApartmentOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { Friend } from '../../../type/Friend';
import { ipcRenderer } from 'electron';
import * as Protocol from '../../../type/Protocol';

const Title = styled(PageHeader)`
  padding: 5px 24px;
`;

type AddFriendProps = {
  ip: string;
};

type FriendListProps = {
  setFriendData: React.Dispatch<React.SetStateAction<Friend[]>>;
};

function isValidIpAddress(ip: string): boolean {
  const regex = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
  return regex.test(ip);
}

function FriendTitle({ setFriendData }: FriendListProps) {
  const [addModalVisible, setAddModalVisible] = React.useState<boolean>(false);
  const [form] = Form.useForm();

  function addFriend({ ip }: AddFriendProps) {
    form.resetFields();
    setAddModalVisible(false);
    if (!isValidIpAddress(ip)) {
      message.error('유효하지 않은 IP 주소 입니다!');
    } else {
      ipcRenderer.send(Protocol.GET_USER_INFO, ip);
      // const ws = new WebSocket(`ws://${ip}:8080`);
      // ws.send(Protocol.GET_USER_INFO);
    }
  }

  return (
    <>
      <Title
        title="친구"
        extra={[
          <Button key="profile" shape="circle" icon={<UserOutlined />} />,
          <Button
            key="add-friend"
            onClick={() => setAddModalVisible(true)}
            shape="circle"
            icon={<UserAddOutlined />}
          />,
          <Button key="setting" shape="circle" icon={<SettingOutlined />} />,
        ]}
      />
      <Modal
        title="친구 추가"
        visible={addModalVisible}
        onOk={form.submit}
        onCancel={() => setAddModalVisible(false)}
        okText="추가"
        cancelText="취소"
      >
        <Form form={form} onFinish={addFriend}>
          <Form.Item
            name="ip"
            rules={[
              {
                required: true,
                message: 'IP주소 입력란이 비어있습니다!',
              },
            ]}
          >
            <Input
              size="large"
              placeholder="친구의 IP 주소를 입력해주세요."
              prefix={<ApartmentOutlined />}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default FriendTitle;
