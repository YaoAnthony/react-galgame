import React from 'react';
import SideLayout from '../../Component/SideLayout';

/**
 *  这个就是我们的主页
 * @returns 
 */
const Home = () => {
    return (
        <div className="flex min-h-screen">
            {/* 侧边栏 */}
            <SideLayout />

            {/* 内容区域 */}
            <main className="flex-1 p-6 bg-[#111111]">
                <div className="p-4 bg-white rounded-lg shadow-md">
                内容区域
                </div>
            </main>
        </div>
    );
};

export default Home;