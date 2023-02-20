import { categoryPage } from '@/api/cake';
import React, { useEffect } from 'react';
import { useRequest } from 'umi';

const CategoryList = () => {
  let { data, run } = useRequest(
    (params) => {
      categoryPage(params);
    },
    {
      manual: true,
      onSuccess: (result) => {
        console.log(result);
      },
    },
  );
  useEffect(() => {
    run({});
  }, []);
  return <div>CategoryList</div>;
};

export default CategoryList;
