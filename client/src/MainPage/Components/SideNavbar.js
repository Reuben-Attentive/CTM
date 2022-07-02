import { Menu,Layout } from 'antd';
import { BarChartOutlined, MessageOutlined,UserOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../Stores/AppStore';
const { Sider } = Layout;

const SideNavbar = () => {
  const location = useLocation();
  const [, appStoreDispatch] = useContext(AppContext);
  const [activeKey] = useState(location.pathname === '/feedback/Residential%20Landscaping' ? ['3'] : ['1']);
  const [collapsed, setCollapsed] = useState(true);

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
    if(key === '3'){
      window.location = '/feedback/Residential%20Landscaping';
    }

    if(key === '5'){
      appStoreDispatch({ type: 'SET_LOGOUT', payload: { isLoggedIn: false } });
    }
  }

  const items = [
    getItem('My Games', '1', <HomeOutlined/>),
    getItem('Leaderboard', '2', <BarChartOutlined />),
    getItem('Feedback', '3', <MessageOutlined />),
  ];

  const items2 = [
    getItem('Profile', '4', <UserOutlined />),
    getItem('Logout', '5', <LogoutOutlined />),
  ];

  return(
    <Sider style={{background: "#212121"}} collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div>
        <div className ="top-spacing" style={{ alignItems: 'center',  textAlign: 'center' }}>
          <div>
            <br></br>
          <a href='/'>
            <img style={{height: 32 }} src='/img/logo-only-dark.svg' alt='Attentive Logo' />
          </a>
          </div>
        </div>
        <br></br>
        <div className='side-navbar-menu'>
        <i class="fa-regular fa-gamepad-modern"></i>
        <Menu style={{background: "#212121"}} theme="dark" selectedKeys={activeKey} mode="inline" items={items} onClick= {itemOnClick}/>
        <Menu style={{background: "#212121"}} className='side-navbar-lowermenu' theme="dark" selectedKeys={activeKey} mode="inline" items={items2} onClick= {itemOnClick}/>
        </div>
      </div>
    </Sider> 
  );
}

export default SideNavbar;