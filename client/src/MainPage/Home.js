import React, { useEffect, useState } from "react";
import { Layout, Row, Card, Col } from "antd";
import HeaderNavbar from "./Components/HeaderNavbar";
import FooterBar from "./Components/FooterBar";
const { Content } = Layout;

const Home = () => {
  const [moduleData, setModuleData] = useState([]);
  
  async function getData() {
    var inputData = await fetch("http://127.0.0.1:8000/moduleData/");
    const APIdata = await inputData.json();
    const data = await APIdata.data;
    const inputJsonData = await JSON.parse(data);
    setModuleData(inputJsonData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout className="layout">
      <HeaderNavbar />
      <Content>
        <div className="site-layout-content">
          <div>
            <h1 className="mygames-h1">WELCOME TO THE GAME OF CARTOS !!!</h1>
            {/* <h2 className="mygames-h2">WELCOME TO THE GAME OF CARTOS !!!</h2> */}
            <h2 className="mygames-h2">MY GAMES</h2>
            {/* <h3 className="mygames-h3">MY GAMES</h3> */}
            <Row justify="center" gutter={36} >
              {moduleData.map((item, index) => {
                return (
                  <Col 
                    xs={{
                      span: 24,
                    }}
                    sm={{
                      span: 12,
                    }}
                    lg={{
                      span: 6,
                    }}
                    key={index}>
                    <a href={`/${item.module_name}`}>
                      <Card
                        type="inner"
                        title={item["module_name"]}
                        bodyStyle={{ padding: "0", alignContent: "center" }}
                      >
                        <img
                          src="/img/background.png"
                          alt="background"
                          style={{ maxWidth: "100%", maxHeight: "auto" }}
                        />
                        <br></br> <br></br>
                        <h3>{item["module_description"]}</h3>
                      </Card>
                    </a>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </Content>
      <FooterBar/>
    </Layout>
  );
};

export default Home;