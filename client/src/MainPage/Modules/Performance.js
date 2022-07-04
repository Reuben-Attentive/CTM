import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Layout, Row, Col, Breadcrumb, Select, Button } from "antd";
import FooterBar from "../Components/FooterBar";
import SideNavbar from "../Components/SideNavbar";

const { Content } = Layout;
const { Option } = Select;

const Performance = () => {
  const { module } = useParams();
  const performance_dummy_data = require("../../Data/PerformanceData.json");
  const dummy_data =
    performance_dummy_data.commercial_landscaping_practice.level_1.trial_1
      .property_2.lens_url;
  const [lensURL, setLensURL] = useState("");
  // setLensURL(performance_dummy_data.commercial_landscaping_practice.level_1.trial_1.property_1.lens_url);
  console.log("lensURL", dummy_data);

  function SelectTrial(value) {
    console.log(`selected ${value}`);
  }
  return (
    <Layout style={{ minHeight: "100vh", maxHeight: "100vh" }}>
      <SideNavbar />
      <Layout>
        <Content className="site-layout-first">
          <div style={{ padding: "2vw 2vw 0 1vw" }}>
            <Breadcrumb>
              <Breadcrumb.Item href="/">My games</Breadcrumb.Item>
              <Breadcrumb.Item href="/">{module}</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Practice Mode</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Performance</Breadcrumb.Item>
            </Breadcrumb>
            <br></br>
            <h1 className="performance-h1">Performance ({module})</h1>
          </div>
          <div>
            <Row style={{ height: "58vh" }}>
              <Col span={6} style={{ padding: 10, backgroundColor: "#F5F5F5" }}>
                <div className="performance-h2">Level-1 </div>
                <div className="flex-space-between-center">
                  <p style={{ margin: 0 }}>Select trial</p>
                  <Select
                    defaultValue="trial_1"
                    style={{ width: 100 }}
                    onChange={SelectTrial}
                  >
                    <Option value="trial_1">Trial 1</Option>
                    <Option value="trial_2">Trial 2</Option>
                    <Option value="trial_3">Trial 3</Option>
                    <Option value="trial_4">Trial 4</Option>
                  </Select>
                </div>
                <div
                  style={{
                    background: "#DFF4E9",
                    width: 227,
                    height: 93,
                    borderRadius: 13,
                    margin: "10px 0px 10px 0px",
                    padding: "10px",
                  }}
                >
                  
                  Trial 1 Score
                </div>
                <hr style={{ border: "1px solid", opacity: 0.26 }} />
                {/* <p className="performance-h2"> Performance details</p> */}
                <div className="performance-h2"> Performance details</div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <p className="no-margin-padding">Select property</p>
                  <div>
                    <div
                      className="flex-space-between-center"
                      style={{
                        marginBottom: 5,
                      }}
                    >
                      <Button type="link" size="small">
                        Previous
                      </Button>
                      <Button type="link" size="small">
                        Next
                      </Button>
                    </div>
                    <Select
                      defaultValue="property_1"
                      style={{ width: 120 }}
                      onChange={SelectTrial}
                    >
                      <Option value="property_1">Property 1</Option>
                      <Option value="property_2">Property 2</Option>
                      <Option value="property_3">Property 3</Option>
                      <Option value="property_4">Property 4</Option>
                    </Select>
                  </div>
                </div>
                <p
                  className="performance-h2"
                  style={{ margin: "20px 0px 10px 0px" }}
                >
                  Property 1
                </p>
                <div>
                  <div className="performance-parameters">
                    <div>Property score</div>
                    {/* <p>Property score</p> */}

                    <div
                      style={{
                        height: "25px",
                        background: "#FFA500",
                        padding: 3,
                      }}
                    >
                      8/10
                    </div>
                  </div>
                  <div className="performance-parameters">
                    <div>Accuracy</div>
                    {/* <p>Accuracy</p> */}
                    <div
                      style={{
                        height: "25px",
                        background: "#3BB44A",
                        padding: 3,
                      }}
                    >
                      Good
                    </div>
                  </div>
                  <div className="performance-parameters">
                    <div>ML usage</div>
                    <div>ok</div>
                  </div>
                  <div className="performance-parameters">
                    <div>Time spent</div>
                    <div>bad</div>
                  </div>
                  <div className="performance-parameters">
                    Time taken: 35 min
                  </div>
                  <div className="performance-parameters">
                    Ideal time range: 5 to 10 min
                  </div>

                  <div style={{ marginTop: 50 }}>
                    <div className="flex-center">
                      <div className="performance-red-dot" />
                      <div>Score 1 to 3 (Bad)</div>
                    </div>
                    <div className="flex-center">
                      <div className="performance-orange-dot" />
                      <div>Score 1 to 3 (Ok)</div>
                    </div>
                    <div className="flex-center">
                      <div className="performance-green-dot" />
                      <div>Score 1 to 3 (Good)</div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={18} style={{ padding: "10px" }}>
                {/* <iframe src="https://lens.attentive.ai/shared-view?id=62b197dddb71a016e4aa92da" title="Lens Link" frameBorder={0} allowfullscreen sandbox> */}
                <iframe
                  src={dummy_data}
                  title="Lens Link"
                  frameBorder={0}
                  allowfullscreen
                  sandbox
                >
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
        <FooterBar />
      </Layout>
    </Layout>
  );
};

export default Performance;
