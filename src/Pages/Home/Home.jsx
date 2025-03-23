// css 引用， 注意css互相之间会污染，所以要注意命名（比如别的文件的class名字和这个文件的class名字一样，会互相影响）
import './Home.css';

// 这里我引用了侧边栏的组件，这个组件是我自己写的，你可以根据自己的需求来引用或者自己写一个
import SideLayout from '../../Component/SideLayout';

// 这里我引用了一个故事的组件
import Story from '../../Component/Story';

// 背包组件
import InventoryModal from '../../Component/Inventory';

// 玩家组件
import PlayerModal from '../../Component/PlayerModal/PlayerModal';


const Home = () => {
    return (
        <div className="container">
            {/* 侧边栏 */}
            <SideLayout />

            {/* 内容区域 */}
            <main className="main-content">
                <Story />
            </main>

            <InventoryModal />
            <PlayerModal />
        </div>
    );
};

export default Home;