import { request } from 'umi';
// 分类接口
interface category {
  name: string;
}

//  新增分类
export const categoryAdd = (cateObj: category) => {
  return request('/classes/category', {
    method: 'post',
    data: cateObj,
  });
};
