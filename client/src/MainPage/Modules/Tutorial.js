import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { Layout, Button, Checkbox, Row, Col, Breadcrumb } from "antd";
import FooterContent from "../Components/FooterContent";
import SiderContent from "../Components/SiderContent";
import ChapterContent from "../Components/ChapterContent";

const { Content, Sider, Footer } = Layout;

const Tutorial = (props) => {
  const { module } = useParams();
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout style={{ minHeight: "100vh", maxHeight: "100vh" }}>
      <Sider collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <SiderContent collapsed={collapsed} />
      </Sider>
      <Layout>
        <Content className="site-layout-first">
          <div style={{ padding: "2vw 2vw 0 1vw" }}>
            <Breadcrumb>
              <Breadcrumb.Item href="/">My games</Breadcrumb.Item>
              <Breadcrumb.Item href="/">{module} </Breadcrumb.Item>
              <Breadcrumb.Item href="/">Tutorial</Breadcrumb.Item>
            </Breadcrumb>
            <br></br>
            <div style={{boxShadow: "0px 3px 16px #00000015", height: 80 , display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <p style={{ fontSize:"x-large",fontWeight:600, margin: 0}}>Tutorials </p>
            <Button style={{ width: 136 }} type="primary" size="normal">Demo</Button>

            </div>
          </div>

          <Layout>
            <ChapterContent />
          </Layout>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            height: "48px",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: 0,
          }}
        >
          <FooterContent />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Tutorial;
