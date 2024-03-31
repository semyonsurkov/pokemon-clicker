import React from 'react';
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const response = await axios.post('http://localhost:9999/user/register', {
        username: values.login,
        password: values.password,
      });

      if (response.status === 201) {
        console.log('Registration successful:', response.data);
        message.success('Registration successful');
        navigate('/main');
      } else {
        console.error('Registration error:', response.data);
        message.error('Registration failed: User already exists');
      }
    } catch (error) {
      console.error('Registration error:', error);
      message.error('Registration failed: User already exists');
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

      <Form.Item
        name="confirm"
        label="Password confirmation"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('The passwords that you entered do not match!')
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="Input password again" />
      </Form.Item>

      <Form.Item>
        <Button
          htmlType="submit"
          style={{ width: '100%' }}
          type="primary"
          size="middle"
        >
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
};

export { SignUp };
