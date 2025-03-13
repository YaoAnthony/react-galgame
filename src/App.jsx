// 这个模块可以帮助实现页面的跳转控制，有了这个，未来想实现高级的页面跳转会非常容易
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

// 导入主界面，和编辑器页面
import Home from './Pages/Home/Home';
import Edit from './Pages/Edit';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
  );
};

export default App;
