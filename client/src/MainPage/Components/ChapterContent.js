import { Menu, Button } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useLocation } from "react-router-dom";

let ChapterDummyData = require("../../Data/ChapterDummyData.json");
const ChapterContent = (props) => {
  console.log("ChapterDummyData", ChapterDummyData);
  const setChapterHeading =props.setChapterHeading
  const chapterHeading= props.chapterHeading
  const collapsed = props.collapsed;
  const setCollapsed = props.setCollapsed;
  const setPdfURL = props.setPdfURL;
  const pdfURL = props.pdfURL;
  const videoURL = props.videoURL;
  const setVideoURL = props.setVideoURL;

  const location = useLocation();
  // const [activeKey] = useState(location.pathname === '/stats' ? ['2'] : ['1']);

  function itemOnClick({ item, key, keyPath, domEvent }) {
    console.log("item", item);
    console.log("key", key);

    ChapterDummyData.forEach((chapter)=>{
      if (key==chapter.chapter_number) {
        setPdfURL(chapter.chapter_pdfURL)
        setVideoURL(chapter.chapter_videoURL)
        // setChapterHeading(chapter.chapter_name)
        console.log('key',key);
      
    chapterItems.forEach((item)=>{
      if(key === item.key ){
        setChapterHeading(item.label)
        // console.log('chapterHeading',chapterHeading);
      }
    })
    }
    })
    
  }

  var chapterItems = [];

  ChapterDummyData.forEach((chapter) => {
    chapterItems.push({
      key: chapter.chapter_number,
      label: 'chapter'+chapter.chapter_number+': '+chapter.chapter_name,
    });
  });

  console.log('chapterItems',chapterItems);

  return (
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
        items={collapsed ? "" : chapterItems}
        defaultSelectedKeys ='1'
        onClick={itemOnClick}
      />
    </div>
  );
};

export default ChapterContent;

  // function getItem(label, key, icon, children) {
  //   return {
  //     key,
  //     icon,
  //     children,
  //     label,
  //   };
  // }
   // const items = [
  //   getItem("chapter1", "1"),
  //   getItem("chapter2", "2"),
  //   getItem("chapter3", "3"),
  //   getItem("chapter4", "4"),
  //   getItem("chapter5", "5"),
  // ];
  // console.log("items", items);