import { Menu,Layout } from 'antd';
import { BarChartOutlined, MessageOutlined,UserOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../Stores/AppStore';
const { Content, Sider } = Layout;

const SiderContent = () => {
  const location = useLocation();
  const [appStore, appStoreDispatch] = useContext(AppContext);
  const [activeKey] = useState(location.pathname === '/stats' ? ['2'] : ['1']);
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
    if(key === '2'){
      window.location = '/leaderboard';
    }

    if(key === '5'){
      appStoreDispatch({ type: 'SET_LOGOUT', payload: { isLoggedIn: false, token: '' } });
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
    {/* <div className ="top-spacing" style={{height: 'calc(8vh - 4px)', alignItems: 'center',  textAlign: 'center' }}> */}
      <div className ="top-spacing" style={{ alignItems: 'center',  textAlign: 'center' }}>
        <h1 style = {{color: '#fff', margin: 0, padding: '4px 0 0 0'}}>Carto Training</h1>
        <div>
        <a href='/'>
          <img style={{height: 32 }} src='/img/logo-white.svg' alt='Attentive Logo' />
        </a>
        </div>
      </div>
      <div className='side-navbar-menu'>
      <i class="fa-regular fa-gamepad-modern"></i>
      <Menu style={{background: "#212121"}} theme="dark" selectedKeys={activeKey} mode="inline" items={items} onClick= {itemOnClick}/>
      <Menu style={{background: "#212121"}} className='side-navbar-lowermenu' theme="dark" selectedKeys={activeKey} mode="inline" items={items2} onClick= {itemOnClick}/>
      </div>
    </div>
    </Sider> 
  );
}

export default SiderContent;