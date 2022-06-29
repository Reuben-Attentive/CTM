import { useState } from "react";

import { Menu, Button, Layout, Checkbox, Row, Col, Breadcrumb } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";

import { useLocation } from "react-router-dom";
const { Content, Sider, Footer } = Layout;

const ChapterContent = (props) => {
  let ChapterDummyData = require("../../Data/ChapterDummyData.json");
  console.log("ChapterDummyData", ChapterDummyData);

  const [collapsed, setCollapsed] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const [showPdf, setShowPdf] = useState(true);
  const [videoURL, setVideoURL] = useState(
    ChapterDummyData[0].chapter_videoURL
  );
  const [pdfURL, setPdfURL] = useState(ChapterDummyData[0].chapter_pdfURL);
  const [chapterHeading, setChapterHeading] = useState("");

  const onVideoChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setShowVideo(!showVideo);
    console.log(showVideo);
  };

  const onPdfChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setShowPdf(!showPdf);
  };

  function itemOnClick({ item, key, keyPath, domEvent }) {
    console.log("item", item);
    console.log("key", key);

    ChapterDummyData.forEach((chapter) => {
      if (key == chapter.chapter_number) {
        setPdfURL(chapter.chapter_pdfURL);
        setVideoURL(chapter.chapter_videoURL);
        // setChapterHeading(chapter.chapter_name)
        console.log("key", key);

        chapterItems.forEach((item) => {
          if (key == item.key) {
            setChapterHeading(item.label);
            // console.log('chapterHeading',chapterHeading);
          }
        });
      }
    });
  }

  var chapterItems = [];

  ChapterDummyData.forEach((chapter) => {
    chapterItems.push({
      key: chapter.chapter_number,
      label: "chapter" + chapter.chapter_number + ": " + chapter.chapter_name,
    });
  });

  console.log("chapterItems", chapterItems);

  return (
    <Layout>
      <Sider
        className="chapter-sider"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div>
          <div
            className="top-spacing"
            style={{
              height: "calc(8vh - 4px)",
              alignItems: "center",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <h1
              style={{
                color: "#212121",
                fontSize: "medium",
                margin: 0,
                padding: "4px 0 0 0",
              }}
            >
              {collapsed ? "" : "Chapter List"}
            </h1>
            <Button
              style={{ background: "#4CBB7F" }}
              onClick={() => {
                setCollapsed(!collapsed);
              }}
              type="primary"
              shape="circle"
              icon={collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
              size={50}
            />
          </div>
          {/* <Menu className = "chapter-sider" selectedKeys={activeKey} mode="inline" items={collapsed ? '' : items} onClick= {itemOnClick}/> */}
          <Menu
            className="chapter-sider"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={collapsed ? "" : chapterItems}
            onClick={itemOnClick}
          />
        </div>
      </Sider>
      <Content>
        <div className="site-layout-second">
          <Row>
            <Col span={12}>
              {/* <h1>Chapter 1: Introduction</h1> */}
              <h1>{chapterHeading}</h1>
            </Col>
            <Col span={2}>View</Col>
            <Col span={4}>
              <Checkbox onChange={onVideoChange} defaultChecked={showVideo}>
                Video
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox onChange={onPdfChange} defaultChecked={showPdf}>
                Pdf
              </Checkbox>
            </Col>
          </Row>
          <Row style={{ minHeight: "65vh" }}>
            <Col
              span={showVideo && showPdf ? 14 : 24}
              style={{ display: showVideo ? "block" : "none" }}
            >
              <div
                className="video-responsive"
                style={{
                  height: showVideo && showPdf ? "450px" : "500px",
                  width: showVideo && showPdf ? "660px" : "850px",
                }}
              >
                <iframe
                  src={videoURL}
                  title="Chapter Video"
                  frameBorder={0}
                ></iframe>
              </div>
            </Col>
            <Col
              span={showVideo && showPdf ? 10 : 24}
              style={{ display: showPdf ? "block" : "none" }}
            >
              <object
                // data="http://africau.edu/images/default/sample.pdf"
                data={pdfURL}
                type="application/pdf"
                width="100%"
                height="100%"
              >
                <p>
                  Alternative text - include a link{" "}
                  <a href="http://africau.edu/images/default/sample.pdf">
                    to the PDF!
                  </a>
                </p>
              </object>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default ChapterContent;

