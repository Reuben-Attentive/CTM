import React, { useContext } from "react";
import { Row, Dropdown, Menu, Layout } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { AppContext } from "../../Stores/AppStore";
const { Header } = Layout;

const HeaderNavbar = () => {
  const [appStore, appStoreDispatch] = useContext(AppContext);

  const onLogout = () => {
    appStoreDispatch({
      type: "SET_LOGOUT",
      payload: { isLoggedIn: false, token: "" },
    });
  };

  const handleMenuClick = (e) => {
    if (e.key === "2") {
      onLogout();
    }
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "Signed in as " + appStore.user.username,
          key: "1",
          icon: <UserOutlined />,
        },
        {
          label: "Logout",
          key: "2",
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );

  return (
    <Header style={{ background: "#212121", height: "8vh" }}>
      <Row style={{ height: "inherit" }}>
        <div className="left">
          <a href="/">
            <img src="/img/logo-white.svg" alt="Attentive Logo" />
          </a>
        </div>
        <div>
          <Dropdown style={{ height: 50, width: 50 }} overlay={menu} placement="bottomLeft">
            <UserOutlined style={{
              color: "white",
              background: "#4CBB7F",
              height: 30,
              width: 30,
              fontSize: 22,
              borderRadius: "50%",
            }}/>
          </Dropdown>
        </div>
      </Row>
    </Header>
  );
};

export default HeaderNavbar;