// 这个地方将用redux 全局保存玩家的信息,目前只举一个储存玩家背包的例子


import { configureStore } from '@reduxjs/toolkit';


// 引入数据储存等功能

import { saveState, loadState } from '../Utils/storage';


// 引入我们的 reducer
import inventoryReducer from './inventorySlice';
import charactersReducer from './charactersSlice'; // 引入角色 slice
import playerReducer from './PlayerSlice'; // ✅ 修改为 player


// ✅ 从 localStorage 加载数据
const preloadedState = {
    player: loadState('player') || undefined,
    inventory: loadState('inventory') || undefined,
    characters: loadState('characters') || undefined,
};
  

const store = configureStore({
    reducer: {
        // 这里的inventory是一个reducer, 用来处理背包的数据
        // 你可以在inventorySlice.js中查看这个reducer的具体实现
        
        inventory: inventoryReducer, // 处理背包的数据
        characters: charactersReducer, // 处理角色的数据
        player: playerReducer, // ✅ 添加 player slice
    },

    preloadedState, // 载入数据
});


// ✅ 在状态变化时保存到 localStorage
store.subscribe(() => {
    saveState('player', store.getState().player);
    saveState('inventory', store.getState().inventory);
    saveState('characters', store.getState().characters);
});
  

export default store;
