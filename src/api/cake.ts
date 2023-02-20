import { request } from 'umi';

//  分类列表分页
export const categoryPage = (cateObj: any) => {
  return request('/classes/category', {
    method: 'get',
    params: cateObj,
  });
};

//  新增分类
export const categoryAdd = (cateObj: any) => {
  return request('/classes/category', {
    method: 'post',
    data: cateObj,
  });
};
