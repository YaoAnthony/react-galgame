// ✅ 保存状态到 localStorage
export const saveState = (key, state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch (error) {
        console.error('保存状态失败:', error);
    }
};
  
  // ✅ 从 localStorage 读取状态
export const loadState = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return undefined; // 如果没有数据，返回 undefined
        }
        return JSON.parse(serializedState);
    } catch (error) {
        console.error('读取状态失败:', error);
        return undefined;
    }
};
  
  // ✅ 清除存储数据
export const clearState = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error('清除状态失败:', error);
    }
};
  