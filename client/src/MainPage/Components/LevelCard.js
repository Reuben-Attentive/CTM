import React from "react";
import { Layout, Button, Row, Col, Card } from "antd";
const { Content } = Layout;

function LevelCard() {
  return (
    <div className="level-card">
      <div className="level-card-title green-text">Level 1</div>
      <div className="level-card-body">
        <p>Best Score: 80/100</p>
        <p>Least Score: 80/100</p>
        <p>Last Score: 80/100</p>
        <a>
          <div style={{ color: "blue", textAlign: "left" }}>Performance</div>
        </a>
      </div>
      <div style={{ width: "inherit" }}>
        <Button style={{ width: "98%" }} type="primary">
          GO!!
        </Button>
      </div>
    </div>
  );
}

export default LevelCard;

{
  /* <Card
type="inner"
title={item["level_name"] }
headStyle={{
  background: "white",
  title: "26px",
  textAlign: "center",
  borderBottom: "#212121 2px solid",
  height:"66px",
  title:"35px"
}}
style={{
  // margin: "20px",
  width: "200px",
  border: "#212121 2px solid",
  fontSize: 16,
}}
bodyStyle={{
  padding: "24px",
  width: "100%",
  alignContent: "center",
}}
>
<div>
  <p>Best Score: 80/100</p>
  <p>Least Score: 80/100</p>
  <p>Last Score: 80/100</p>
  <p>Performance</p>
</div>
<div>
  <Button type="primary" style={{ width: "100%" }}>
    GO!!
  </Button>
</div>
</Card>  */
}
