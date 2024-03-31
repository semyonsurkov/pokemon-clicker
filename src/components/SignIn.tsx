import React from 'react';
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const response = await axios.post('http://localhost:9999/user/login', {
        username: values.login,
        password: values.password,
      });
      console.log('Login successful:', response.data);
      message.success('Login successful');

      navigate('/main');
    } catch (error) {
      console.error('Login error:', error);
      message.error('Login failed');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
      size="middle"
      autoComplete="off"
    >
      <Form.Item
        label="Login"
        name="login"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder="Input login" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="Input password" />
      </Form.Item>

      <Form.Item>
        <Button
          htmlType="submit"
          style={{ width: '100%' }}
          type="primary"
          size="middle"
        >
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
};

export { SignIn };
