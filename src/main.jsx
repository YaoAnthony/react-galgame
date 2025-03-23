// 这里是入口，我们的代码从这里开始!!!

// 1. 引入 React 和 ReactDOM
import { StrictMode } from 'react' // 1.1 引入 StrictMode，这里是模板，暂时不用管
import { createRoot } from 'react-dom/client' // 创建html根节点，这里是模板，暂时不用管

import './index.css' //导入全局css, 如果你有什么全局的css，可以在这里导入

import App from './App.jsx' // 这将带你转到页面控制器


import '@ant-design/v5-patch-for-react-19'; // 1.2 引入 antd 的补丁

//redux
import { Provider } from 'react-redux'; // 引入 Redux 的 Provider
import store from './Store'; // 引入我们的 Redux store

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
)
