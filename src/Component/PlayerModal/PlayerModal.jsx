import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Avatar, List, Tag, Input, Button, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

import { setPlayerName } from '../../Store/PlayerSlice';
import achievementsData from '../../Data/achievement.json';

const PlayerModal = () => {
  const dispatch = useDispatch();
  const { name, avatar, achievements } = useSelector((state) => state.player);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newName, setNewName] = useState(name);

  // 打开 Modal
  const showModal = () => {
    setNewName(name); // 将当前 Redux 的名字填入输入框
    setIsModalVisible(true);
  };

  // 关闭 Modal
  const handleClose = () => {
    setIsModalVisible(false);
  };

  // 🔥 修改名字并保存到 Redux
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  // ✅ 输入框失去焦点时保存名字
  const handleSaveName = () => {
    if (newName.trim() && newName !== name) {
      dispatch(setPlayerName(newName.trim()));
      message.success(`👤 名字已更新为：${newName.trim()}`); // 🔥 显示提示
    }
  };

  return (
    <>
      {/* 🔹 浮动按钮 */}
      <FloatButton
        icon={<UserOutlined />}
        onClick={showModal}
        style={{
          position: 'fixed',
          right: 24,
          bottom: 80,
          zIndex: 1000,
        }}
      />

      {/* 🔹 弹出框 */}
      <Modal
        title="玩家信息"
        open={isModalVisible}
        onCancel={handleClose}
        footer={[
          <Button key="cancel" onClick={handleClose}>
            取消
          </Button>,
          <Button key="save" type="primary" onClick={handleClose}>
            确认
          </Button>,
        ]}
      >
        {/* 🔹 玩家名字 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            paddingBottom: '16px',
          }}
        >
          {/* 🔹 玩家头像 */}
          <Avatar size={64} src={avatar} icon={!avatar && <UserOutlined />} />
          <Input
            value={newName}
            onChange={handleNameChange}
            onBlur={handleSaveName} // ✅ 失去焦点时保存名字
            placeholder="请输入玩家名字"
            maxLength={12}
            style={{
              width: 200,
              fontSize: '16px',
            }}
          />
        </div>

        {/* 🔹 成就列表 */}
        <h3 style={{ marginTop: '16px' }}>🎯 成就</h3>
        <List
          dataSource={achievementsData}
          renderItem={(achievement) => (
            <List.Item>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <div>
                  <strong>{achievement.title}</strong>
                  <p style={{ color: '#888', margin: 0 }}>
                    {achievement.description}
                  </p>
                </div>
                {/* 🔹 是否解锁 */}
                {achievements[achievement.id] ? (
                  <Tag color="green">已解锁</Tag>
                ) : (
                  <Tag color="red">未解锁</Tag>
                )}
              </div>
            </List.Item>
          )}
        />
      </Modal>
    </>
  );
};

export default PlayerModal;
