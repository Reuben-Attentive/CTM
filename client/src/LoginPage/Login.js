import React, { useContext } from 'react';
import { Layout, Input, Button, Form} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { AppContext } from '../Stores/AppStore';
const { Header, Content, Footer } = Layout;

const Login = () => {
  const [appStore, appStoreDispatch] = useContext(AppContext);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    const username = values.username.trim();
    const password = values.password.trim();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "username": username,
      "password": password,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    let setLogin = false;
    fetch("http://127.0.0.1:8000/loginuser/", requestOptions)
      .then(response => response.text())
      .then((result) => {
        console.log(result);
        if(result === "True"){
          setLogin = true;
        }

        if(setLogin){
          appStoreDispatch({ type: 'SET_LOGIN', payload: { isLoggedIn: true, user: {token: 'token', username: username, id: username} }});
        }
      })
      .catch(error => console.log('error', error));
  };
  
  return (
    <Layout className="layout">
      <Header style={{height: '8vh'}}>
        <div className='left'>
          <a href='https://attentive.ai/'>
            <img src='/img/logo-white.svg' alt='Attentive Logo' />
          </a>
        </div>
      </Header>
      <Content>
        <div className="site-layout-content">
          <div className='form-login'>
            <br></br>
            <br></br>
            <h2>FX Training Module</h2>
            <div style = {{backgroundColor: "#0fa61b", width: "25vw", paddingLeft: "6vw", paddingTop: "0.5vw" }}>
              <h2 style = {{color: "white"}}>Login to your account</h2>
            </div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              style = {{
                backgroundColor: "#edece8",
                padding: "2vw 2vw 0.5vw 2vw",
                width: "25vw",
                alignContent: "center",
                alignItems: "center"
              }}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                ]}
              >
                <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input.Password size="large" 
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Form.Item>
          
              <Form.Item style = {{paddingLeft: "7.5vw"}}>
                <Button type="primary" htmlType="submit" className="login-form-button" style = {{width: "5vw", margin: "auto"}}>
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' , height: '6vh', alignItems : 'center', backgroundColor: '#fff' }}>
        <p>
          &copy;{' '}
          <a href='https://attentive.ai' target='_blank' rel="noreferrer">
            Attentive AI Solutions Pvt. Ltd.
          </a>{' '}
          |{' '}
          <a href='https://www.notion.so/Terms-of-use-a3ca44ecfec041d1b5f9cd2393543186' target='_blank' rel="noreferrer">
            Terms of Use
          </a>{' '}
          |{' '}
          <a href='https://www.notion.so/Privacy-policy-ef836bceaca240ee9ccbe3ca985946a1' target='_blank' rel="noreferrer">
            Privacy Policy
          </a>
        </p>
      </Footer>
    </Layout>
  );
}

export default Login;