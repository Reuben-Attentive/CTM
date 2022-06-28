import React, { useContext } from 'react';
import {Row, Dropdown, Menu} from 'antd';
import { LogoutOutlined, CaretDownOutlined, UserOutlined } from '@ant-design/icons';
import { AppContext } from '../../Stores/AppStore';

const HeaderContent = () => {
  const [appStore, appStoreDispatch] = useContext(AppContext);

  const onLogout = (values) => {
    appStoreDispatch({ type: 'SET_LOGOUT', payload: { isLoggedIn: false, token: '' } });
  };
  
  const handleMenuClick = (e) => {
    console.log('click', e);
    if(e.key === '2'){
      onLogout();
    }
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: 'Signed in as ' + appStore.user.username,
          key: '1',
          icon: <UserOutlined />,
        },
        {
          label: 'Logout',
          key: '2',
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );

  return(
    <Row>
      <div className='left'>
        <a href='/'>
          <img src='/img/logo-white.svg' alt='Attentive Logo' />
        </a>
      </div>
      <div>
        <Dropdown.Button overlay={menu} placement="bottomLeft" icon={<CaretDownOutlined/>} style = {{backgroundColor: "#001529", borderRadius: '50%'}}>
          <UserOutlined />
        </Dropdown.Button>
      </div>
    </Row>      
  );
}

export default HeaderContent;