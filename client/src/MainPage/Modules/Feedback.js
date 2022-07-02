import { useParams } from "react-router-dom";
import { Layout, Table, Breadcrumb, Row, Col, DatePicker } from "antd";
import FooterBar from "../Components/FooterBar";
import SideNavbar from "../Components/SideNavbar";

const { Content } = Layout;
const { RangePicker } = DatePicker;

const Feedback = () => {
  const { module } = useParams();

  const columns = [
    {
      title: 'Player',
      dataIndex: 'player',
      key: 'player',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Start date & time',
      dataIndex: 'startdate',
      key: 'startdate',
      render: (_, record) => <p>{record.startdate} <br></br> {record.starttime}</p>,
    },
    {
      title: 'End date & time',
      dataIndex: 'enddate',
      key: 'enddate',
      render: (_, record) => <p>{record.enddate} <br></br> {record.endtime}</p>,
    },
    {
      title: 'Player Output',
      dataIndex: 'playeroutput',
      key: 'playeroutput',
      render: (text) => <a href = {text}>{text}</a>,
    },
    {
      title: 'Ideal Output',
      dataIndex: 'idealoutput',
      key: 'idealoutput',
      render: (text) => <a href = {text}>{text}</a>,
    },
    {
      title: 'Time Spent',
      dataIndex: 'timespent',
      key: 'timespent',
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: 'Feedback',
      dataIndex: 'feedback',
      key: 'feedback',
    },
  ];

  const data = [
    {
      key: '1',
      player: 'John Brown',
      address: 'New York No. 1 Lake Park',
      startdate: '08/22/2022',
      starttime: '13:21:01',
      enddate: '08/22/2022',
      endtime: '13:25:31',
      playeroutput: 'thiswillbealink',
      idealoutput: 'thiswillbealink',
      timespent: '4 min 30 sec',
      score: '1',
      feedback: 'See the ideal output ...'
    },
    {
      key: '2',
      player: 'Jim Green',
      address: 'London No. 1 Lake Park',
      startdate: '08/22/2022',
      starttime: '13:21:01',
      enddate: '08/22/2022',
      endtime: '13:25:31',
      playeroutput: 'thiswillbealink',
      idealoutput: 'thiswillbealink',
      timespent: '4 min 30 sec',
      score: '1',
      feedback: 'See the ideal output ...'
    },
    {
      key: '3',
      player: 'Joe Black',
      address: 'Sidney No. 1 Lake Park',
      startdate: '08/22/2022',
      starttime: '13:21:01',
      enddate: '08/22/2022',
      endtime: '13:25:31',
      playeroutput: 'thiswillbealink',
      idealoutput: 'thiswillbealink',
      timespent: '4 min 30 sec',
      score: '1',
      feedback: 'See the ideal output ...'
    },
  ];
  
  return(
    <Layout style={{ minHeight: "100vh", maxHeight: "100vh" }}>
      <SideNavbar  />
      <Layout>
        <Content className="site-layout-first">
          <div style={{ padding: "2vw 2vw 0 1vw" }}>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Give Feedback</Breadcrumb.Item>
              <Breadcrumb.Item href="/">{module} </Breadcrumb.Item>
            </Breadcrumb>
            <br></br>
            <Row>
              <Col span = {7}>
                <RangePicker showTime />
              </Col>
              <Col span = {1}></Col>
            </Row>
            <br></br>
            <Table columns={columns} dataSource={data} />
          </div>
        </Content>
        <FooterBar/>
      </Layout>
    </Layout>
  );
}

export default Feedback;