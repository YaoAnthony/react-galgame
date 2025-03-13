// 这个地方将用redux 全局保存玩家的信息,目前只举一个储存玩家背包的例子


import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from './inventorySlice';

const store = configureStore({
    reducer: {
        // 这里的inventory是一个reducer, 用来处理背包的数据
        // 你可以在inventorySlice.js中查看这个reducer的具体实现
        inventory: inventoryReducer
    }
});

export default store;
