import { Menu } from 'antd';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ChapterContent = (props) => {
  const collapsed = props.collapsed;
  const location = useLocation();
  const [activeKey] = useState(location.pathname === '/stats' ? ['2'] : ['1']);

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  function itemOnClick({item, key, keyPath, domEvent}){
    
  }

  const items = [
    getItem("chapter1", "1"),
    getItem("chapter2", "2"),
    getItem("chapter3", "3"),
    getItem("chapter4", "4"),
    getItem("chapter5", "5"),
  ];

  return(
    <div>
      <div className ="top-spacing" style={{height: 'calc(8vh - 4px)', alignItems: 'center',  textAlign: 'center' }}>
        <h1 style = {{color: '#fff', margin: 0, padding: '4px 0 0 0'}}>{collapsed ? 'CL' : 'Chapter List'}</h1>
      </div>
      <Menu className = "chapter-sider" selectedKeys={activeKey} mode="inline" items={items} onClick= {itemOnClick}/>
    </div> 
  );
}

export default ChapterContent;