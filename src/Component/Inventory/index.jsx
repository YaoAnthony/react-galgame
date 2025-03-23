import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, List, Button } from 'antd';

// 导入 antd 的图标
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

// 背包图标
import { bag } from '../../Assets';


import { FloatButton } from 'antd';
import { removeItem } from '../../Store/inventorySlice';

const InventoryModal = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.inventory.items); // 从 Redux 获取物品列表
  const [isModalVisible, setIsModalVisible] = useState(false);

  // 打开 Modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // 关闭 Modal
  const handleClose = () => {
    setIsModalVisible(false);
  };

  // 删除物品
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      {/* 🔹 浮动按钮 */}
      <FloatButton
        icon={<img src={bag} style={{width : "20px"}} />}
        onClick={showModal}
        style={{
          position: 'fixed',
          right: 24,
          bottom: 24,
          zIndex: 1000, // 确保浮动按钮显示在最上层
        }}
        tooltip={<div>背包</div>}
      />

      {/* 🔹 弹出框 */}
      <Modal
        title="物品栏"
        open={isModalVisible}
        onCancel={handleClose}
        footer={null} // 不显示底部按钮
      >
        {/* 🔹 列表展示物品 */}
        <List
          dataSource={items}
          renderItem={(item) => (
            <List.Item
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 12px',
                borderBottom: '1px solid #f0f0f0',
              }}
            >
              <div>
                <strong>{item.name}</strong>
                <span style={{ marginLeft: 8, color: '#999' }}>
                  x{item.quantity}
                </span>
              </div>
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleRemoveItem(item.id)}
              />
            </List.Item>
          )}
        />
      </Modal>
    </>
  );
};

export default InventoryModal;
