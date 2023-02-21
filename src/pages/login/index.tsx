import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Row, Col, Card, Spin } from 'antd';
import { history, useModel, useRequest } from 'umi';
import { login } from '@/api/user';

const Login: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  let [remember, setRemember] = useState(false);
  let { data, loading, run } = useRequest(login, {
    manual: true,
  });
  interface info {
    userName: string;
    password: string;
    remember: boolean;
  }
  const onFinish = async (values: info) => {
    setRemember(values.remember);
    await run(values);
    // 修改全局的initialState
  };
  useEffect(() => {
    console.log('object');
    if (data) {
      // localStorage.setItem('userInfo', JSON.stringify(data));

      remember && localStorage.setItem('userInfo', JSON.stringify(data));
      !remember && sessionStorage.setItem('userInfo', JSON.stringify(data));
      console.log('first');
      const func = async () => {
        await setInitialState({
          isLogin: true,
          userInfo: data,
        });
        // 切换路由至‘/’
        history.push('/');
      };
      func();
    }
  }, [data]);
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  let initData: info;
  let loginInfo = JSON.parse(localStorage.getItem('loginInfo') as string);
  if (loginInfo?.remember) {
    initData = {
      ...loginInfo,
    };
  }
  return (
    <Row justify="center" align="middle">
      <Col span={8}>
        <Spin spinning={loading}>
          <Card title="请登录" style={{ width: '100%', marginTop: '400px' }}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={initData}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Spin>
      </Col>
    </Row>
  );
};

export default Login;
