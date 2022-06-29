import { Menu } from 'antd';

import { BarChartOutlined, MessageOutlined,UserOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { Icon } from 'semantic-ui-react';

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
    getItem('My Games', '1', <HomeOutlined/>),
    getItem('Leaderboard', '2', <BarChartOutlined />),
    getItem('Feedback', '3', <MessageOutlined />),
  ];
  const items2 = [

    getItem('Profile', '2', <UserOutlined />),
    getItem('Logout', '3', <LogoutOutlined />),
  ];



  return(
    <div>
      <div className ="top-spacing" style={{height: 'calc(8vh - 4px)', alignItems: 'center',  textAlign: 'center' }}>
        {/* <h1 style = {{color: '#fff', margin: 0, padding: '4px 0 0 0'}}>{collapsed ? ' ' : 'Carto Training'}</h1> */}
        <h1 style = {{color: '#fff', margin: 0}}>logo</h1>
      </div>
      <div className='side-navbar-menu'>
      <i class="fa-regular fa-gamepad-modern"></i>
      <Menu style={{background: "#212121"}} theme="dark" selectedKeys={activeKey} mode="inline" items={items} onClick= {itemOnClick}/>
      <Menu style={{background: "#212121"}} className='side-navbar-lowermenu' theme="dark" selectedKeys={activeKey} mode="inline" items={items2} onClick= {itemOnClick}/>
      </div>

    </div> 
  );
}

export default SiderContent;