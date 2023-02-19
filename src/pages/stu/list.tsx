import React, { useEffect, useState } from 'react';
import { Table, Tag, Space, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { request, useRequest } from 'umi';
import { getStuList, stuDelete } from '@/api/stu';
interface DataType {
  id: string;
  name: string;
  age: number;
  gender: number;
  record: number;
  address: string;
}
// 区分性别
const reTagGender = (record: DataType) => {
  if (record.gender == 0) {
    return <Tag color="red">女</Tag>;
  } else {
    return <Tag color="blue">男</Tag>;
  }
};
// 区分是否及格
const reTagRecord = (record: DataType) => {
  if (record.record >= 60) {
    return <Tag color="blue">{record.record}</Tag>;
  } else {
    return <Tag color="red">{record.record}</Tag>;
  }
};

const StuList = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '性别',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '城市',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '性别',
      key: 'gender',
      dataIndex: 'gender',
      render: (text, record, index) => {
        return reTagGender(record);
      },
    },
    {
      title: '分数',
      key: 'record',
      dataIndex: 'record',
      render: (text, record, index) => {
        return reTagRecord(record);
      },
    },
    {
      title: '操作',
      key: 'operation',
      dataIndex: 'operation',
      render: (text, record, index) => {
        return (
          <Space size="small">
            <Button type="link" size="small" onClick={() => handleEdit(record)}>
              编辑
            </Button>
            <Button
              type="link"
              danger
              size="small"
              onClick={() => handleDelete(record)}
            >
              删除
            </Button>
          </Space>
        );
      },
    },
  ];
  const [list, setList] = useState([]);
  // const [loading, setLoading] = useState(false);
  const handleEdit = (record: DataType) => {};
  const handleDelete = (record: DataType) => {
    console.log(record.id);
    stuDelete(record.id)
      .then((result) => {
        getStuList().then((res) => {
          console.log(res);
          setList(res.list);
        });
      })
      .catch((err) => {});
  };

  useEffect(() => {
    // 方法一、需要开发者自行判断是否loading并赋值
    // setLoading(true);
    // getStuList().then((res) => {
    //   setLoading(false);
    //   console.log(res);
    //   setList(res.list);
    // });
  }, []);
  // // 方法二、用useRequest中的loading参数，简化异步请求
  let { data = [], loading, error } = useRequest(getStuList);
  // data---后端响应的数据包
  // loading---异步请求状态
  // error---异步请求返回的错误信息
  console.log(data);
  // setList(data);
  return (
    <div>
      <Table
        loading={loading}
        rowKey={'id'}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default StuList;
