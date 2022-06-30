import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { Layout, Row, Col, Breadcrumb } from "antd";
import FooterContent from "../Components/FooterContent";
import SiderContent from "../Components/SiderContent";

const { Content, Sider, Footer } = Layout;

const Performance = () => {
  const { module } = useParams();
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout style={{ minHeight: "100vh", maxHeight: "100vh" }}>
      <Sider collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <SiderContent collapsed={collapsed} />
      </Sider>
      <Layout>
        <Content className="site-layout-first">
          <div style={{ padding: "2vw 2vw 0 2vw" }}>
            <Breadcrumb>
              <Breadcrumb.Item href="/">My games</Breadcrumb.Item>
              <Breadcrumb.Item href="/">{module}</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Practice Mode</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Performance</Breadcrumb.Item>
            </Breadcrumb>
            <br></br>
            <h1>Performance ({module})</h1>
          </div>   
          <div>
            <Row style = {{height: "78vh"}}>
              <Col span = {6} style = {{backgroundColor: "#F5F5F5"}}>

              </Col>
              <Col span = {18} style = {{padding: "10px"}}>
                <iframe src="https://lens.attentive.ai/shared-view?id=62b197dddb71a016e4aa92da" title="Lens Link" frameBorder={0} allowfullscreen sandbox>
                  <p>
                    <a href="https://lens.attentive.ai/shared-view?id=62b197dddb71a016e4aa92da">
                      Fallback link for browsers that don't support iframes
                    </a>
                  </p>
                </iframe>
              </Col>
            </Row>
          </div>       
        </Content>
        <Footer style={{ textAlign: "center", height: "48px", alignItems: "center", backgroundColor: "#fff", padding: 0 }}>
          <FooterContent />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Performance;