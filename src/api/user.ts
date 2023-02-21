import { request } from 'umi';

export const login = (data: any) => {
  return request('/login', {
    method: 'post',
    data,
  });
};
