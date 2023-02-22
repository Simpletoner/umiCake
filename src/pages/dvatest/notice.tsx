import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';

interface DataType {
  title: string;
  content?: string;
  picture?: string;
}
const Notice: React.FC = () => {
  const [list, setList] = useState<DataType[]>([
    {
      title: 'test',
      content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      picture:
        'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    },
  ]);

  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[
            <a key="list-loadmore-edit">edit</a>,
            <a key="list-loadmore-more">more</a>,
          ]}
        >
          <Skeleton avatar title={false} loading={false} active>
            <List.Item.Meta
              avatar={<Avatar src={item.picture} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.content}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default Notice;
