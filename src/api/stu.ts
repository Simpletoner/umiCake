import { request } from 'umi';

export const getStuList = () => {
  return request('/classes/list', {
    method: 'get',
  });
};

export const stuDelete = (id: string) => {
  console.log(id);
  return request(`/classes/delete?id=${id}`, {
    method: 'DELETE',
  });
};
