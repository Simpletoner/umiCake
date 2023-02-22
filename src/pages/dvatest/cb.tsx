import React from 'react';
import { connect } from 'umi';

const cb = (props: any) => {
  return <div>{props.count}</div>;
};

export default connect((state) => {
  return {
    ...state,
  };
})(cb);
