import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import { Layout, Button, Checkbox, Row, Col, Breadcrumb} from 'antd';
import FooterContent from "../Components/FooterContent";
import SiderContent from '../Components/SiderContent';
import ChapterContent from "../Components/ChapterContent";

const { Content, Sider, Footer } = Layout;

const Tutorial = (props) => {
  const {module} = useParams();
  const [collapsed, setCollapsed] = useState(true);
  const [collapsedSecond, setCollapsedSecond] = useState(true);

  const [showVideo, setShowVideo] = useState(true);
  const [showPdf, setShowPdf] = useState(true);

  const onVideoChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setShowVideo(!showVideo);
    console.log(showVideo);
  };

  const onPdfChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setShowPdf(!showPdf);
  };

  return(
    <Layout style={{ minHeight: '100vh', maxHeight: '100vh'}} >
      <Sider collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <SiderContent collapsed = {collapsed}/>
      </Sider>
      <Layout>
        <Content className = "site-layout-first">
          <div style = {{padding: '2vw 2vw 0 2vw'}}>
            <Breadcrumb>
              <Breadcrumb.Item href = "/">My games</Breadcrumb.Item>
              <Breadcrumb.Item href = "/">{module} Landscaping</Breadcrumb.Item>
              <Breadcrumb.Item href = "/">Tutorial</Breadcrumb.Item>
            </Breadcrumb>
            <br></br>
            <h1>Tutorials</h1>
          </div>

          <Layout>
            <Sider className = "chapter-sider" collapsible collapsed={collapsedSecond} onCollapse={(value) => setCollapsedSecond(value)}>
              <ChapterContent collapsed = {collapsedSecond}/>
            </Sider>
            <Content>
              <div className="site-layout-second">
                <Row>
                  <Col span = {12}>
                    <h1>Chapter 1: Introduction</h1>
                  </Col>
                  <Col span = {2}>
                    View
                  </Col>
                  <Col span = {4}>
                    <Checkbox onChange={onVideoChange} defaultChecked = {showVideo}>Video</Checkbox>
                  </Col>
                  <Col span = {4}>
                    <Checkbox onChange={onPdfChange} defaultChecked = {showPdf}>Pdf</Checkbox>
                  </Col>
                </Row>
                <Row style = {{minHeight: "65vh"}}>
                  <Col span = {(showVideo && showPdf) ? 14 : 24} style = {{display: showVideo ? "block" : "none"}}>
                    <div className="video-responsive" style = {{height: (showVideo && showPdf) ? "450px" : "500px", width: (showVideo && showPdf) ? "700px" : "850px"}}>
                      <iframe src="https://drive.google.com/file/d/0B9XzsMuZIc4iLV9mYjV3a3JadTQ/preview" title = "Chapter Video" frameBorder={0}></iframe>
                    </div>
                  </Col>
                  <Col span = {(showVideo && showPdf) ? 10 : 24} style = {{display: showPdf ? "block" : "none"}}>
                    <object data="http://africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="100%">
                      <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
                    </object>
                  </Col>
                </Row>
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' , height: '48px', alignItems : 'center', backgroundColor: '#fff', padding: 0 }}>
          <FooterContent/>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Tutorial;