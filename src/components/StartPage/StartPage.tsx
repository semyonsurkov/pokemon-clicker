import { Space, Tabs, Image, Flex, Card } from 'antd';
import { SignUp } from '../SignUp';
import { SignIn } from '../SignIn';
const { TabPane } = Tabs;

function StartPage() {
  return (
    <>
      <Flex
        align="center"
        justify="center"
        style={{ height: '100vh', overflow: 'hidden' }}
      >
        <Space direction="vertical" align="center">
          <Image
            src="/src/assets/Pokemon Clicker.png"
            preview={false}
            alt="Pokemon Clicker Logo"
          />
          <Card
            style={{
              width: '400px',
              maxHeight: '400px',
              boxSizing: 'border-box',
              boxShadow: '0px 0px 16px 0px #3A3A3A1A',
            }}
          >
            <Tabs defaultActiveKey="2" centered size="large">
              <TabPane tab="Sign up" key="1">
                <SignUp />
              </TabPane>
              <TabPane tab="Sign in" key="2">
                <SignIn />
              </TabPane>
            </Tabs>
          </Card>
        </Space>
      </Flex>
    </>
  );
}

export default StartPage;
