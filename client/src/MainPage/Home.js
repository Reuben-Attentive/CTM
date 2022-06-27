import React, { useEffect, useState } from "react";
import { Layout, Row, Card, Col } from "antd";
import HeaderContent from "./Components/HeaderContent";
import FooterContent from "./Components/FooterContent";

const { Header, Content, Footer } = Layout;


const Home = () => {
  const [moduleData, setModuleData] = useState([]);
  async function getData() {
    var inputData = await fetch("http://127.0.0.1:8000/moduleData/");
    const APIdata = await inputData.json();
    const data = await APIdata.data;
    const inputJsonData = await JSON.parse(data);

    setModuleData(inputJsonData);
    console.log("APIdata---", inputJsonData);
    // console.log('typeof module_data',typeof inputJsonData );
  }

  useEffect(() => {
    getData();
  }, []);

  console.log("APIdata---2-ModuleData--", moduleData);
  // console.log('APIdata---1--',module_data);

  return (
    // <Layout>
    //   Home
    // </Layout>)
    <Layout className="layout">
      <Header style={{ height: "8vh" }}>
        <HeaderContent />
      </Header>
      <Content>
        <div className="site-layout-content">
          <div>
            <h2>FX Training Module</h2>
            <Row gutter={16}>
              {moduleData.map((item, index) => {
                {
                  /* console.log("other map function",item) */
                }

                return (
                  <Col
                    xs={{
                      span: 24,
                    }}
                    sm={{
                      span: 12,
                    }}
                    lg={{
                      span: 8,
                    }}
                    key={index}
                  >
                    <a href={`/${item.module}/data-model`}>
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
                        {/* <img src = {item["module_imageUrl"]} alt = "background" style = {{ maxWidth: '100%', maxHeight: 'auto'}}/> */}
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
      <Footer
        style={{
          textAlign: "center",
          height: "6vh",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <FooterContent />
      </Footer>
    </Layout>
  );
};

export default Home;


// ---------------earlier static code-----------------------------

//  const Home = () => {
//   let dummyData = require('../Data/DummyHome.json');
//   let dummyHome = dummyData["dummy-home"];

//   return (
//     <Layout className="layout">
//       <Header style={{height: '8vh'}}>
//         <HeaderContent/>
//       </Header>
//       <Content>
//         <div className="site-layout-content">
//           <div>
//             <h2>FX Training Module</h2>
//             <Row gutter={16}>
//               {
//                 dummyHome.map((item, index) => {
//                   return (
//                     <Col
//                       xs = {{
//                         span: 24,
//                       }}
//                       sm={{
//                         span: 12,
//                       }}
//                       lg={{
//                         span: 8,
//                       }}  key = {index}>
//                       <a href={`/${item.module}/data-model`}>
//                         <Card type="inner" title = {item["module-name"]} bodyStyle={{padding: "0", alignContent: "center"}}>
//                           <img src = "/img/background.png" alt = "background" style = {{ maxWidth: '100%', maxHeight: 'auto'}}/>
//                           <br></br> <br></br>
//                           <h3>{item["module-description"]}</h3>
//                         </Card>
//                       </a>
//                     </Col>
//                   );
//                 })
//               }
//             </Row>
//           </div>
//         </div>
//       </Content>
//       <Footer style={{ textAlign: 'center' , height: '6vh', alignItems : 'center', backgroundColor: '#fff' }}>
//         <FooterContent/>
//       </Footer>
//     </Layout>
//   );
// }