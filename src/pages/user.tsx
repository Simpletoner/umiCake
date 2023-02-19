import React from 'react';
import { Button } from 'antd';
import { history } from 'umi';
const user = () => {
  return (
    <div>
      user
      <Button
        onClick={() => {
          history.push('/');
        }}
      >
        返回首页
      </Button>
    </div>
  );
};

export default user;
