import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
};

const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        // 添加物品
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        // 移除物品
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        // 更新物品
        updateItem: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload.newItem;
            }
        },
        // 设置物品列表
        setItems: (state, action) => {
            state.items = action.payload;
        }
    }
});

export const { addItem, removeItem, updateItem, setItems } = inventorySlice.actions;
export default inventorySlice.reducer;
