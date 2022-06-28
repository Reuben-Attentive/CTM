import { Menu , Button } from 'antd';
import { ArrowRightOutlined,ArrowLeftOutlined } from '@ant-design/icons';

import { useState } from 'react';
import { useLocation } from 'react-router-dom';
const ChapterContent = (props) => {
  const collapsed = props.collapsed;
  const setCollapsed= props.setCollapsed;
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
      <div className ="top-spacing" style={{height: 'calc(8vh - 4px)', alignItems: 'center',  textAlign: 'center',display:'flex', justifyContent: 'space-around' }}>
        <h1 style = {{color: '#212121',fontSize: 'medium', margin: 0, padding: '4px 0 0 0'}}>{collapsed ? '' : 'Chapter List'}</h1>
        <Button style= {{background: '#4CBB7F'}} onClick={()=>{setCollapsed(!collapsed)}} type="primary" shape="circle" icon={collapsed ?<ArrowRightOutlined />:<ArrowLeftOutlined />} size={50} />
      </div>
      <Menu className = "chapter-sider" selectedKeys={activeKey} mode="inline" items={collapsed ? '' : items} onClick= {itemOnClick}/>
    </div> 
  );
}

export default ChapterContent;