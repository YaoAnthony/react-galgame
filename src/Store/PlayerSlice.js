import { createSlice } from '@reduxjs/toolkit';
import { kos } from '../Assets';
import achievementsData from '../Data/achievement.json';
import { message } from 'antd';

const initialAchievements = achievementsData.reduce((acc, achievement) => {
  acc[achievement.id] = false; // 默认状态设置为 false
  return acc;
}, {});

const initialState = {
  name: 'Player',
  avatar: kos, // 默认头像
  achievements: initialAchievements, // 成就系统
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    // 更新名字
    setPlayerName: (state, action) => {
      state.name = action.payload;
    },
    // 更新头像
    setPlayerAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    // 更新成就状态（设置为 true）
    setAchievement: (state, action) => {
      const { achievementId } = action.payload;
      if (state.achievements[achievementId] !== undefined) {
        state.achievements[achievementId] = true;
      }
    },
  },
});

// ✅ 定义一个 thunk action 来触发提示
export const unlockAchievement = (achievementId) => (dispatch, getState) => {
  const state = getState().player;

  if (!state.achievements[achievementId]) {
    // 🔥 更新 Redux 状态
    dispatch(playerSlice.actions.setAchievement({ achievementId }));

    // ✅ 使用 antd 的 message 组件弹出提示
    const achievement = achievementsData.find(
      (ach) => ach.id === achievementId
    );
    if (achievement) {
      message.success({
        content: `🎯 成就解锁！${achievement.title} `,
        duration: 4, // 2秒自动消失
      });
    }
  }
};

export const { setPlayerName, setPlayerAvatar, setAchievement } =
  playerSlice.actions;
export default playerSlice.reducer;
