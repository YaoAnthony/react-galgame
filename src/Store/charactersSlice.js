import { createSlice } from '@reduxjs/toolkit';

// 未知头像
import { question } from '../Assets';
const initialState = {
  characters: {},
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    // 添加新角色，支持头像
    addCharacter: (state, action) => {
        const { id, name, affection, avatar } = action.payload;
        if (!state.characters[id]) {
          state.characters[id] = {
            id,
            name,
            affection: 0, // 默认好感度为 0
            avatar: avatar || question, // 头像（可选）
          };
        }
    },

    // 更新好感度（限制在 1~10）
    updateAffection: (state, action) => {
        const { id, amount } = action.payload;
        if (state.characters[id]) {
            const newAffection = state.characters[id].affection + amount;
            state.characters[id].affection = Math.max(1, Math.min(newAffection, 10));
        }
    },
    
    // 批量更新角色数据
    updateCharacters: (state, action) => {
        action.payload.forEach((char) => {
                state.characters[char.id] = {
                ...state.characters[char.id],
                ...char,
                affection: Math.max(1, Math.min(char.affection, 10)),
            };
        });
    },

    // 更新头像
    updateAvatar: (state, action) => {
        const { id, avatar } = action.payload;
        if (state.characters[id]) {
          state.characters[id].avatar = avatar;
        }
    },


    // 移除角色
    removeCharacter: (state, action) => {
        delete state.characters[action.payload];
    },
  },
});

export const {
  addCharacter,
  updateAffection,
  updateCharacters,
  updateAvatar,
  removeCharacter,
} = charactersSlice.actions;

export default charactersSlice.reducer;
