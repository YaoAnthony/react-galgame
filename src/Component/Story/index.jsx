//这里将负责描述故事

import React, { useState } from 'react';


// ✅ 引入 AnimatePresence 动画组件，负责fadeIn和fadeOut动画,或者其他高级动画
import { AnimatePresence } from 'framer-motion'; 

//导入css
import './Story.css';

// 导入各种场景
import Scene0 from './Scene0';
import Scene1 from './Scene1';
import Scene2 from './Scene2';
import SceneEnd1 from './SceneEnd1';

//导入场景数据
import storyData0 from './Scene0/script';
import storyData1 from './Scene1/script';
import storyData2 from './Scene2/script';
import storyDataEnd1 from './SceneEnd1/script';


const Story = () => {
    // 🔹 当前场景的 ID
    const [currentScene, setCurrentScene] = useState('scene0');

    const SceneDecision = (number) => {
        switch(number){
            case 0:
                setCurrentScene('scene0');
                break;
            case 1:
                setCurrentScene('scene1');
                break;
            case 2:
                setCurrentScene('scene2');
                break;

            case 11:
                setCurrentScene('sceneEnd1');
                break;

            default:
                setCurrentScene('scene0');
        }
    };

    // 🔹 定义场景映射
    const scenes = {
        scene0: <Scene0 storyData={storyData0} changeScene={SceneDecision} onNextScene={(num) => SceneDecision(num)} />,
        scene1: <Scene1 storyData={storyData1} changeScene={SceneDecision} onNextScene={(num) => SceneDecision(num)} />,
        scene2: <Scene2 storyData={storyData2} changeScene={SceneDecision} onNextScene={(num) => SceneDecision(num)} />,
        sceneEnd1: <SceneEnd1 storyData={storyDataEnd1} changeScene={SceneDecision} onNextScene={(num) => SceneDecision(num)} />
    };

    return (
        <AnimatePresence>
            <div className="story">
                {scenes[currentScene]}
            </div>
        </AnimatePresence>
    );
}

export default Story;