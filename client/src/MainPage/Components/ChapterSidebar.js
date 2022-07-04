import { useState } from "react";
import {
  Menu,
  Button,
  Layout,
  Checkbox,
  Radio,
  Row,
  Col,
  Progress,
  RadioChangeEvent,
} from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
const { Content, Sider } = Layout;

const ChapterSidebar = () => {
  const ChapterDummyData = require("../../Data/ChapterDummyData.json");
  const [collapsed, setCollapsed] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const [showPdf, setShowPdf] = useState(false);
  const [videoURL, setVideoURL] = useState(
    ChapterDummyData[0].chapter_videoURL
  );
  const [pdfURL, setPdfURL] = useState(ChapterDummyData[0].chapter_pdfURL);
  const [chapterHeading, setChapterHeading] = useState(
    "Chapter 1 : " + ChapterDummyData[0].chapter_name
  );
  const [view, setView] = useState("Video");

  const onVideoChange = (e) => {
    setShowVideo(!showVideo);
  };

  const onPdfChange = (e) => {
    setShowPdf(!showPdf);
  };

  function itemOnClick({ item, key, keyPath, domEvent }) {
    ChapterDummyData.forEach((chapter) => {
      // eslint-disable-next-line eqeqeq
      if (key == chapter.chapter_number) {
        setPdfURL(chapter.chapter_pdfURL);
        setVideoURL(chapter.chapter_videoURL);
        chapterItems.forEach((item) => {
          // eslint-disable-next-line eqeqeq
          if (key == item.key) {
            setChapterHeading(item.label);
          }
        });
      }
    });
  }

  var chapterItems = [];
  ChapterDummyData.forEach((chapter) => {
    chapterItems.push({
      key: chapter.chapter_number,
      label: "chapter " + chapter.chapter_number + " : " + chapter.chapter_name,
    });
  });

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
          <div style={{ marginLeft: 20, marginTop: 10 }}>
            {collapsed ? (
              ""
            ) : (
              <Progress
                strokeColor="#4CBB7F"
                trailColor="#E2E2E2"
                percent={40}
              />
            )}
          </div>
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
          <Row style={{ marginBottom: 10 }}>
            <Col span={18}>
              <h1
                style={{
                  color: "#212121",
                  fontSize: "medium",
                  margin: 0,
                }}
              >
                {chapterHeading}
              </h1>
            </Col>
            <Col span={1}>View</Col>
            {/* <Col span={4}>
              <Checkbox onChange={onVideoChange} defaultChecked={showVideo}>
                Video
              </Checkbox>
            </Col>
            <Col span={4}>
              <Checkbox onChange={onPdfChange} defaultChecked={showPdf}>
                Pdf
              </Checkbox>
            </Col> */}
            <Col>
              <Radio.Group onChange={(e: RadioChangeEvent)=>{setView(e.target.value);}} value={view}>
                <Radio value={"Video"}>Video</Radio>
                <Radio value={"Pdf"}>Pdf</Radio>
                <Radio value={"Both"}>Both</Radio>
              </Radio.Group>
            </Col>
          </Row>
          <Row style={{ minHeight: "65vh" }}>
          <Col span= {view=="Video"?24: view=="Both" ?14:0} >
          <div
                className="video-responsive"
                style={{
                  height: view=="Both" ? "450px" : "500px",
                  width: view=="Both" ? "642px" : "850px",
                }}
              >
                <iframe
                  src={videoURL}
                  title="Chapter Video"
                  frameBorder={0}
                ></iframe>
              </div>
          </Col>
          <Col span= {view=="Pdf"?24: view=="Both" ?10:0} style={{   paddingLeft: 10}}>
          <iframe src={pdfURL} width="100%" height="100%" allow="autoplay"></iframe>
          {/* <object
                data={pdfURL}
                type="application/pdf"
                width="100%"
                height="100%"
              >
                <p>
                  <a href={pdfURL}>Link to the PDF!</a>
                </p>
              </object> */}
          </Col>
            
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default ChapterSidebar;
