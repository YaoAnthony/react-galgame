import React, { useState, useEffect, useRef, useCallback } from 'react';

// 🔹 导入图片
import { kos } from '../../../Assets';


//redux
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter, updateAffection, updateAvatar } from '../../../Store/charactersSlice';

const withSceneLogic = (WrappedComponent) => {
    /**
     * 这个代码是一个高阶组件，用于处理通用场景逻辑，帮助我们省了很多SCENE重复代码
     * 
     * 逻辑：读取script.js的数据，从start开始，每次都会阅读content, 
     * 对于每个image，如果type为image，则弹出image，如果为text, 则按文字阅读，未来可以根据这个框架添加其他的东西
     * 文字叙述结束之后，弹出选择, 如果next为end，则跳转到对应下一个场景
     */

    return (props) => {

        // 🔹 Redux 的 dispatc
        const dispatch = useDispatch();


        // 🔹 从 props 中解构出 故事流程a
        const { storyData, changeScene } = props;
        // 🔹 当前场景的 ID
        const [sceneId, setSceneId] = useState('start');
        // 🔹 当前显示的内容（包括对话和描述）
        const [content, setContent] = useState([]);
        // 🔹 当前场景的选项（根据文件中的定义）
        const [choices, setChoices] = useState([]);
        // 🔹 用于保持滚动到底部的引用
        const containerRef = useRef(null);
        // 🔹 用 Set 来存储已显示的内容，防止重复追加
        const seenTexts = useRef(new Set());
        

        // 🔹 Redux 中当前的角色
        const characters = useSelector((state) => state.characters.characters);

        /**
         * 🌟 处理好感度和角色信息
         */
        const handleDialog = (item) => {
            if (item.type === 'dialog' && item.name) {
                const { name, img, affection } = item;

                // 名字都没有，就不处理了
                if (typeof name !== 'string') {
                    return;
                }
        
                // ✅ 如果角色不存在于 Redux 中，添加角色
                if (!characters[name]) {
                    dispatch(
                        addCharacter({
                            id: name, // 用角色名字作为 ID
                            name,
                            affection: 5, // 默认好感度为 5（中间值）
                            avatar: img || null,
                        })
                    );
                }
    
                // ✅ 如果有头像（img）字段，更新头像
                if (img) {
                    dispatch(updateAvatar({ id: name, avatar: img }));
                }
        
                // ✅ 如果有好感度（affection）字段，更新好感度
                if (typeof affection === 'number') {
                    dispatch(updateAffection({ id: name, amount: affection }));
                }
            }
        };


         /**
         * 🌟 使用 useCallback 让 loadScene 稳定
         */
        const loadScene = useCallback((id) => {
            const scene = storyData[id];
            if (!scene) return;


            // ✅ 添加新内容
            scene.content.forEach(item => {
                const key = `${id}_${item.type}_${item.value}`;
                if (!seenTexts.current.has(key)) {
                    seenTexts.current.add(key);

                    // ✅ 如果是对话，处理角色逻辑
                    if (item.type === 'dialog') {
                        handleDialog(item);
                    }
              
                    setContent(prev => [...prev, item]);
                }
            });

            // ✅ 更新选项
            setChoices(scene.choices || []);
        }, [storyData]); // ✅ 只有 storyData 变化时才会更新 loadScene


        /**
         * 🌟 useEffect 监听场景 ID 变化
         * ✅ loadScene 已被 useCallback 包装，所以不会每次都触发
         */
        useEffect(() => {
            loadScene(sceneId);
        }, [sceneId, loadScene]); // ✅ loadScene 现在是稳定的

        /**
         * 🌟 监听内容变化，滚动到底部
         */
        useEffect(() => {
            containerRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, [content]);

        /**
         * 🌟 切换场景
         */
        const handleChangeScene = useCallback((nextScene) => {
            console.log('handleChangeScene', nextScene);

            // ✅ 直接使用外部传入的 changeScene 方法
            if (changeScene) {
                changeScene(nextScene); // ✅ 通过 props 触发场景跳转
            }
        }, [props, changeScene]);

        /**
         * 场景递进, 处理玩家的选择, 选择之后的逻辑
         * @param {Object} choice - 选择的对象，包含文本和下一句话的id
         */
        const handleChoice = useCallback((choice) => {
            if (!seenTexts.current.has(`“${choice.text}”—你`)) {

                // 处理Continue的情况，一般是直接下一个场景，跳过就行
                if (choice.text === "Continue") {
                    
                    // ✅ 切换到下一个场景
                    setSceneId(choice.next);
                    return;
                }
    
                seenTexts.current.add(`“${choice.text}”—你`);

                if (choice.type === 'dialog') {
                    setContent(prev => [...prev, { type: 'dialog', img : kos, value: `“${choice.text}”` }]);
                }else{
                    setContent(prev => [...prev, { type: 'text', value: `“${choice.text}”` }]);
                }
                    // ✅ 切换到下一个场景
                setSceneId(choice.next);
            }
        });

        return (
            <WrappedComponent
                {...props}
                sceneId={sceneId}
                content={content}
                choices={choices}
                handleChoice={handleChoice}
                changeScene={handleChangeScene}
                containerRef={containerRef}
            />
        );
    };
};

export default withSceneLogic;
