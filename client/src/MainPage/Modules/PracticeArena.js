//Practice Arena Page Code
import React from "react";
import { useParams } from "react-router-dom";
import { Layout, Button, Row, Col, Breadcrumb, Carousel } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import HeaderNavbar from "../Components/HeaderNavbar";
import FooterBar from "../Components/FooterBar";
import { useState } from "react";
import LevelCard from "../Components/LevelCard";
import Card from "antd/lib/card/Card";
const { Content } = Layout;

function PracticeArena() {
  const { module } = useParams();
  const practiceDummyData = require("../../Data/PracticeArenaDummyData.json");
  const practiceLevels =
    practiceDummyData.user_data.modules.paving.practice_levels;
  const practiceLevelsArray = Object.values(practiceLevels);
  console.log("practiceLevelsArray", practiceLevelsArray);
  return (
    <Layout>
      <HeaderNavbar />
      <Content className="site-layout-content">
        <div>
          <Breadcrumb>
            <Breadcrumb.Item href="/">My games</Breadcrumb.Item>
            <Breadcrumb.Item href={`/${module}`}>{module}</Breadcrumb.Item>
            <Breadcrumb.Item>Practice Mode</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div>
          PRACTICE LEVEl 
        </div>
         <div>
             <p>"Level of difficulty- Level1-Level2-Level3" </p>
         </div>
         <Row>
   
         </Row>
        <Row  style={{ marginTop: "50px",justifyContent: "space-evenly " }}>
        
          {practiceLevelsArray.map((item, index) => {
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
                key={index}
              >
                <Card
                  type="inner"
                
                //   title={item["level_name"]}
                  title={item["level_name"]}
                headStyle={{background:"white",text:"26px",textAlign:"center",borderBottom:"#212121 2px solid"}}
                  style={{margin:"20px",width:"200px",border:"#212121 2px solid",fontSize:16}}
                  bodyStyle={{ padding: "24px", width:"100%", alignContent: "center" }}
                >
                  <div>
                    <p>Best Score: 80/100</p>
                    <p>Least Score: 80/100</p>
                    <p>Last Score: 80/100</p>
                    <p>Performance</p>
                  </div>
                  <div>
                  <Button type="primary" style={{width:"100%"}}>GO!!</Button>
                  </div>

                </Card>
              </Col>
            );
          })}
        

        </Row>
      </Content>
    </Layout>
  );
}

export default PracticeArena;
