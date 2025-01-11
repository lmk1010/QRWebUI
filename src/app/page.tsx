import React from 'react';
import './styles/globals.css';
import Index from './components/Index'; // 导入 Page 组件

const Home = () => {
  return (
      <div>
        <Index />  {/* 渲染页面组件 */}
      </div>
  );
}

export default Home;
