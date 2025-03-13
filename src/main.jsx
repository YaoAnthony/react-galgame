// 这里是入口，我们的代码从这里开始!!!

// 1. 引入 React 和 ReactDOM
import { StrictMode } from 'react' // 1.1 引入 StrictMode，这里是模板，暂时不用管
import { createRoot } from 'react-dom/client' // 创建html根节点，这里是模板，暂时不用管

import './index.css' //导入全局css, 如果你有什么全局的css，可以在这里导入

import App from './App.jsx' // 这将带你转到页面控制器

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
