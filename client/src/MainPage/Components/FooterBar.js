import { Layout } from 'antd';
const { Footer } = Layout;

const FooterBar = () => {
  return(
    <Footer style={{ textAlign: 'center' , height: '6vh', alignItems : 'center', backgroundColor: '#fff' }}>
      <div>
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
      </div>
    </Footer>
  );
}

export default FooterBar;