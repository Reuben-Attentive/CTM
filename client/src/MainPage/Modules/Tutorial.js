import { useParams } from "react-router-dom";
import { Layout, Button, Breadcrumb } from "antd";
import FooterBar from "../Components/FooterBar";
import SideNavbar from "../Components/SideNavbar";
import ChapterSidebar from "../Components/ChapterSidebar";
const { Content } = Layout;

const Tutorial = () => {
  const { module } = useParams();
  
  return (
    <Layout style={{ minHeight: "100vh", maxHeight: "100vh" }}>
      <SideNavbar />
      <Layout>
        <Content className="site-layout-first">
          <div style={{ padding: "2vw 2vw 0 1vw" }}>
            <Breadcrumb>
              <Breadcrumb.Item href="/">My games</Breadcrumb.Item>
              <Breadcrumb.Item href="/Residential%20Landscaping">{module} </Breadcrumb.Item>
              <Breadcrumb.Item href="/">Tutorial</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ height: 80 , display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <p style={{ fontSize:"x-large",fontWeight:600, margin: 0}}>Tutorials </p>
              <a href = "https://annotations-stage.attentive.ai/?demo=1" target = "_blank" rel="noreferrer"><Button style={{ width: 136 }} type="primary" size="normal">Demo</Button></a>
            </div>
          </div>
          <Layout>
            <ChapterSidebar/>
          </Layout>
        </Content>
        <FooterBar/>
      </Layout>
    </Layout>
  );
};

export default Tutorial;
