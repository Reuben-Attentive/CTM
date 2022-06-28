import React from 'react';
import { Layout, Row, Card, Col} from 'antd';
import HeaderContent from "./Components/HeaderContent";
import FooterContent from "./Components/FooterContent";

const { Header, Content, Footer } = Layout;

const Home = () => {
  let dummyData = require('../Data/DummyHome.json');
  let dummyHome = dummyData["dummy-home"];

  return (
    <Layout className="layout">
      <Header style={{height: '8vh'}}>
        <HeaderContent/>
      </Header>
      <Content>
        <div className="site-layout-content">
          <div>
            <h2>FX Training Module</h2>
            <Row gutter={16}>
              {
                dummyHome.map((item, index) => {
                  return (
                    <Col 
                      xs = {{
                        span: 24,
                      }}
                      sm={{
                        span: 12, 
                      }}
                      lg={{
                        span: 8,
                      }}  key = {index}>
                      <a href={`/${item.module}/`}>
                        <Card type="inner" title = {item["module-name"]} bodyStyle={{padding: "0", alignContent: "center"}}>
                          <img src = "/img/background.png" alt = "background" style = {{ maxWidth: '100%', maxHeight: 'auto'}}/>
                          <br></br> <br></br>
                          <h3>{item["module-description"]}</h3>
                        </Card>
                      </a>
                    </Col>
                  );
                })
              }
            </Row>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' , height: '6vh', alignItems : 'center', backgroundColor: '#fff' }}>
        <FooterContent/>
      </Footer>
    </Layout>
  );
}

export default Home;