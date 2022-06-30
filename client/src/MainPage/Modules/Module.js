import { useParams } from "react-router-dom";
import { Layout, Button, Row, Col, Breadcrumb, Carousel} from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import HeaderContent from "../Components/HeaderContent";
import FooterContent from "../Components/FooterContent";

const { Header, Content, Footer } = Layout;

const Module = (props) => {
  const {module} = useParams();
  const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return(
    <Layout className="layout">
      
        <HeaderContent/>
      
      <Content>
        <div className="site-layout-content">
          <Breadcrumb>
            <Breadcrumb.Item href = "/"><HomeOutlined /></Breadcrumb.Item>
            <Breadcrumb.Item>My games</Breadcrumb.Item>
            <Breadcrumb.Item>{module}</Breadcrumb.Item>
          </Breadcrumb>
          <br></br>
          <br></br>
          <Row justify="space-around" align="middle">
            <Col span = {4}>
              <Button type="primary" htmlType="submit" className="green-button" href = {`/${module}/tutorial`}>
                Tutorial
              </Button>
            </Col>
            <Col span = {4}>
              <Button type="primary" htmlType="submit" disabled>
                Practice Arena
              </Button>
            </Col>
            <Col span = {4}>
              <Button type="primary" htmlType="submit" disabled>
                Boss Fight
              </Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row>
          <Col span = {12}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis enim sit amet justo pharetra consequat. Phasellus nec odio sit amet ligula vehicula mollis sed nec lorem. Quisque lorem risus, vehicula ac ultrices a, euismod in nisl. Phasellus lobortis pretium eros eu eleifend. Aenean efficitur velit vel felis mattis volutpat. Aenean tincidunt vestibulum auctor. Sed ullamcorper malesuada risus blandit fermentum. Phasellus congue ipsum at fermentum luctus. Aenean est risus, mattis posuere sagittis quis, condimentum imperdiet magna. Mauris ornare mauris sed nisi sollicitudin, et finibus arcu fermentum. Suspendisse eget tortor imperdiet, condimentum tortor sed, rutrum turpis. Proin vitae risus tincidunt, porttitor arcu non, volutpat magna. Suspendisse aliquam eros odio, eu egestas metus gravida nec. Donec lacinia scelerisque eros, sit amet congue ipsum condimentum ac. Suspendisse id enim eget quam lobortis finibus quis et justo.
            <br></br><br></br>
            Cras ultricies tortor enim, a tincidunt neque auctor vitae. Proin eget nulla sit amet purus ullamcorper feugiat. Curabitur ullamcorper libero eget odio varius, id congue mauris convallis. Nunc consequat tincidunt nisi ac ornare. Sed suscipit faucibus interdum. Sed quis orci felis. Curabitur et volutpat nunc. Suspendisse potenti. Maecenas eget fringilla orci. Aenean sodales urna nec tristique commodo. 
            Cras ultricies tortor enim, a tincidunt neque auctor vitae. Proin eget nulla sit amet purus ullamcorper feugiat. Curabitur ullamcorper libero eget odio varius, id congue mauris convallis. Nunc consequat tincidunt nisi ac ornare. Sed suscipit faucibus interdum. Sed quis orci felis. Curabitur et volutpat nunc. Suspendisse potenti. Maecenas eget fringilla orci. Aenean sodales urna nec tristique commodo. 
          </Col>
          <Col span = {1}></Col>
          <Col span = {11}>
            {/* Slideshow of shareable links */}
            <Carousel effect="fade" autoplay>
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </Col>
        </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' , height: '6vh', alignItems : 'center', backgroundColor: '#fff' }}>
        <FooterContent/>
      </Footer>
    </Layout>
  );
}

export default Module;