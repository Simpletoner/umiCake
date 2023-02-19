import { categoryAdd } from '@/api/cake';
import { Button, Form, Input, Select, notification } from 'antd';
import React from 'react';
import { history } from 'umi';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const App: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
    categoryAdd(values)
      .then((result) => {
        console.log(result);
        if (result.objectId) {
          notification.open({
            message: '提示',
            description: '添加成功！',
            onClick: () => {},
          });
          onReset();
        } else {
          notification.open({
            message: '提示',
            description: '添加失败！',
            onClick: () => {},
          });
        }
      })
      .catch((err) => {});
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        name="categoryName"
        label="分类名称"
        rules={[{ required: true }]}
      >
        <Input />
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
  );
};

export default App;
