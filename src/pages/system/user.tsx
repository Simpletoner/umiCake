import { Button, Form, Input, Select, notification, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { history, request, useRequest } from 'umi';
import ImgUpload from '@/components/imgUpload';
import { bannerAdd } from '@/api/banner';
import { getRoleList, userReg } from '@/api/user';
const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const UserManager: React.FC = () => {
  const [roleList, setRoleList] = useState([]);
  let roleLoading = true;
  const [form] = Form.useForm();
  useEffect(() => {
    getRoleList().then((result) => {
      console.log(result);
      setRoleList(result.data.results);
      roleLoading = false;
    });
  }, []);
  // let { data: roleList, loading: roleLoading } = useRequest(getRoleList);
  // console.log(roleList);
  let { data, loading, run } = useRequest((values) => userReg(values), {
    manual: true,
    onSuccess: (result, params) => {
      onReset();
    },
  });
  console.log(data, loading);
  const onFinish = (values: any) => {
    console.log(values);
    run(values);
  };

  const onReset = () => {
    form.resetFields();
  };
  let initData = {
    username: '',
    password: '',
    rolecode: '',
  };
  return (
    <Spin spinning={loading}>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        initialValues={initData}
        style={{ maxWidth: 600 }}
      >
        <Form.Item name="username" label="用户名" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码" rules={[{ required: true }]}>
          <Input type={'password'} />
        </Form.Item>
        <Form.Item name="rolecode" label="角色" rules={[{ required: true }]}>
          <Select placeholder="请选择角色类型">
            {roleList.map((ele: any) => {
              return (
                <Option value={ele.roleId} key={ele.objectId}>
                  {ele.roleName}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button htmlType="button" onClick={onReset}>
            重置
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default UserManager;
