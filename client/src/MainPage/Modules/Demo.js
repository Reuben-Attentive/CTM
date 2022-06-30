import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { Layout, Row, Col, Breadcrumb } from "antd";
import SiderContent from "../Components/SiderContent";

const { Content, Sider} = Layout;

const Demo = () => {
  const { module } = useParams();
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout style={{ minHeight: "100vh", maxHeight: "100vh" }}>
      <Sider collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <SiderContent collapsed={collapsed} />
      </Sider>
      <Layout>
        <Content className="site-layout-first">
          <div style={{ padding: "1vh 0 0 2vw" }}>
            <Breadcrumb>
              <Breadcrumb.Item href="/">My games</Breadcrumb.Item>
              <Breadcrumb.Item href="/">{module}</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Tutorial</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Demo</Breadcrumb.Item>
            </Breadcrumb>
            {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
            <h6></h6>
            <h1>Demo ({module})</h1>
          </div>   
          <div>
            <Row style = {{height: "90vh"}}>
              <Col span = {24}>
                <iframe src="https://annotations-stage.attentive.ai/?demo=1" title="Lens Link" frameBorder={0} allowfullscreen sandbox>
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
      </Layout>
    </Layout>
  );
};

export default Demo;