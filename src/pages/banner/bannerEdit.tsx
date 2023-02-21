import { Button, Form, Input, Select, notification, Spin } from 'antd';
import React, { useEffect } from 'react';
import { history, useRequest } from 'umi';
import ImgUpload from '@/components/imgUpload';
import { bannerAdd, bannerEdit } from '@/api/banner';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const BannerEdit: React.FC = (props: any) => {
  const [form] = Form.useForm();
  let { data, loading, run } = useRequest(
    (values) => bannerEdit(values, values.objectId),
    {
      manual: true,
      onSuccess: (result, params) => {
        onReset();
      },
    },
  );
  let initData = {
    bannerName: '',
    bannerUrl: '',
    bannerLink: '',
  };
  useEffect(() => {
    let { query } = props.location;
    console.log('props', props.location.query);
    form.setFieldsValue(query);
  }, []);
  console.log(data, loading);
  const onFinish = (values: any) => {
    console.log(values);
    run(values);
    // categoryAdd(values).then((result) => {
    //   console.log(result);
    //   if (result.objectId) {
    //     notification.open({
    //       message: '提示',
    //       description: '添加成功！',
    //       onClick: () => {},
    //     });
    //     onReset();
    //   } else {
    //     notification.open({
    //       message: '提示',
    //       description: '添加失败！',
    //       onClick: () => {},
    //     });
    //   }
    // });
  };

  const onReset = () => {
    form.resetFields();
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
        <Form.Item
          name="bannerName"
          label="活动名称"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="bannerUrl"
          label="活动链接"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="bannerLink"
          label="活动图片"
          rules={[{ required: true }]}
        >
          <ImgUpload />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            确定修改
          </Button>
          <Button htmlType="button" onClick={onReset}>
            重置
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default BannerEdit;
