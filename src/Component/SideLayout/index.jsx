import React from 'react';
//引入css
import './SideLayout.css';

import { useDispatch, useSelector } from 'react-redux';
import { addCharacter, updateAffection, updateAvatar } from '../../Store/charactersSlice';

// 爱心图标
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

//antd
import { Avatar } from 'antd';

//motion
import { motion } from 'motion/react';

/**
 * 这个组件用来渲染左边的 侧边栏布局，未来你可以在这里加各种东西
 * 
 * @returns 侧边栏布局
 */
const SideLayout = () => {

    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters.characters);

    /**
     * 渲染好感度（每2点好感度 = 1颗心）
     */
    const renderAffectionHearts = (affection) => {
        const filledHearts = Math.floor(affection / 2); // 实心 ❤️ 数量
        const emptyHearts = 5 - filledHearts; // 空心 🤍 数量

        return (
        <>
            {/* 实心 ❤️ */}
            {[...Array(filledHearts)].map((_, index) => (
            <HeartFilled key={`filled-${index}`} style={{ color: 'red', fontSize: '20px', margin: '0 5px' }} />
            ))}
            {/* 空心 🤍 */}
            {[...Array(emptyHearts)].map((_, index) => (
            <HeartOutlined key={`empty-${index}`} style={{ color: 'red', fontSize: '20px', margin: '0 5px'}} />
            ))}
        </>
        );
    };
    

    return (
        <aside className="sidebar">
            <div className="sidebar-content">
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px',
                    }}
                >
                    <h2>《病娇圣女与奴隶骑士》</h2>
                </div>
                {
                    Object.values(characters).map((char) => (
                        <motion.div 
                            key={char.id}
                            style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                padding: '10px',
                                gap: '10px',
                            }}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            exit={{ opacity: 0, x: -100 }}
                        >
                            {char.avatar && (
                                <Avatar
                                    src={char.avatar}
                                    alt={char.name}
                                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                                />
                            )}
                            <div>
                            {/* 名字 + 好感度 */}
                            <p
                                style={{
                                margin: 0,
                                padding: 0,
                                fontSize: '1.2rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                }}
                            >
                                {char.name}
                            </p>
                            <div>{renderAffectionHearts(char.affection)}</div>
                            </div>
                                
                        </motion.div>
                    ))
                }
            </div>
        </aside>
    );
};

export default SideLayout;
