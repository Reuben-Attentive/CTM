//Practice Arena Page Code
import React from "react";
import { useParams } from "react-router-dom";
import { Layout, Button, Row, Col, Breadcrumb, Carousel } from "antd";
import HeaderNavbar from "../Components/HeaderNavbar";
import FooterBar from "../Components/FooterBar";
import { useState } from "react";
import LevelCard from "../Components/LevelCard";
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
        <div className="practice-level-text green-text">PRACTICE LEVEL</div>
        <div className="flex">
          <p className="green-text">Level of difficulty-</p>{" "}
          <p>Level1 &lt; Level2 &lt; Level3 </p>
        </div>

        <Row justify="center" style={{ marginTop: "50px" }}>
          {practiceLevelsArray.map((item, index) => {
            return (
              <Col
                style={{ display: "flex", justifyContent: "space-around" }}
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                lg={{ span: 6 }}
                key={index}
              >
                <LevelCard />
              </Col>
            );
          })}
        </Row>
      </Content>
      <FooterBar />
    </Layout>
  );
}

export default PracticeArena;
