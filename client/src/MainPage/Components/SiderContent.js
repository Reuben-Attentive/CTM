import { Menu } from 'antd';
import { BarChartOutlined, HomeOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const SiderContent = (props) => {
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
    if(key === '1'){
      window.location = '/';
    }
    if(key === '2'){
      window.location = '/leaderboard';
    }
  }

  const items = [
    getItem('My Games', '1', <HomeOutlined />),
    getItem('Leaderboard', '2', <BarChartOutlined />),
    getItem('Feedback', '3', <BarChartOutlined />),
  ];

  return(
    <div>
      <div className ="top-spacing" style={{height: 'calc(8vh - 4px)', alignItems: 'center',  textAlign: 'center' }}>
        <h1 style = {{color: '#fff', margin: 0, padding: '4px 0 0 0'}}>{collapsed ? ' ' : 'Carto Training'}</h1>
        <h1 style = {{color: '#fff', margin: 0}}>{collapsed? 'CTM': 'Module'}</h1>
      </div>
      <Menu theme="dark" selectedKeys={activeKey} mode="inline" items={items} onClick= {itemOnClick}/>
    </div> 
  );
}

export default SiderContent;