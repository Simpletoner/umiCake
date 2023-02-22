import React from 'react';
import { connect } from 'umi';
import { Button, Tag } from 'antd';

const cA = (props: any) => {
  console.log(props);
  return (
    <div>
      <Tag>{props.count}</Tag>
      <Button
        onClick={() => {
          props.dispatch({
            type: 'count/add',
          });
        }}
      >
        add
      </Button>
    </div>
  );
};
export default connect((state) => {
  console.log(state);
  return {
    ...state,
    num: 123,
  };
})(cA);
