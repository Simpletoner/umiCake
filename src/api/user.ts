import { request } from 'umi';

export const login = (data: any) => {
  return request('/oauth/token', {
    method: 'post',
    auth: {
      username: 'metadata',
      password: 'metadata@v1',
    },
    params: { ...data, grant_type: 'saas' },
  });
};

export const userReg = (data: any) => {
  return request('/users', {
    method: 'post',
    data,
  });
};
export const getRoleList = () => {
  return request('/classes/cakerole', {
    method: 'get',
  });
};
