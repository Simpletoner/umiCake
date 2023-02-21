import { request } from 'umi';

//  活动列表分页
export const bannerPage = (Obj?: any) => {
  return request('/classes/banner', {
    method: 'get',
    params: Obj,
  });
};

//  新增活动
export const bannerAdd = (cateObj: any) => {
  return request('/classes/banner', {
    method: 'post',
    data: cateObj,
  });
};

//  编辑活动
export const bannerEdit = (Obj: any, id: string) => {
  return request(`/classes/banner/${id}`, {
    method: 'put',
    data: Obj,
  });
};
