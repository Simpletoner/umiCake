import { message } from 'antd';
import '@/utils/init_leanCloud_sdk';
import {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';
import { history } from 'umi';
import HeaderDropdown from './components/HeaderDropdown';
export const request = {
  // timeout: 1000,
  requestInterceptors: [
    // 请求拦截
    (url: string, options: any) => {
      console.log(url, options);
      // options.url = 'https://azf3ih55.lc-cn-n1-shared.com/1.1' + url;
      options.url = '/v1' + url;

      // options.headers = {
      //   // 'X-LC-Id': 'azF3ih550cP25I0JvlWgJMK7-gzGzoHsz',
      //   // 'X-LC-Key': '2Oq6PAgr20HT9yqnMGMlMt09',
      //   'Content-Type': 'application/json',
      // };
      options.headers['Content-Type'] =
        'application/x-www-form-urlencoded;charset=UTF-8';
      options.headers['Authorization'] = ``;
      console.log(url, options);
      return options; //此处return的内容就是自定义请求配置
    },
  ],
  responseInterceptors: [
    // 响应拦截
    async (response: any, options: any) => {
      let res = await response.json();
      console.log('res', res);
      if (res.success) {
        if (options.url.indexOf('/token') > -1) {
          message.success('登录成功！');
        } else {
          message.success('注册成功');
        }
      } else if (res.objectId && options.method.toUpperCase() == 'POST') {
        message.success('新增成功！');
      }
      // console.log(response.json());
      let { result } = res;
      return {
        code: 200,
        msg: '成功',
        data: result ? result : res,
      }; //此处return的内容就是后端返回的数据包
    },
  ],
};

// 全局初始化函数的运行时配置
export async function getInitialState() {
  let userState = {
    isLogin: false,
    userInfo: null,
  };
  let userInfo =
    localStorage.getItem('userInfo') || sessionStorage.getItem('userInfo');
  console.log(userInfo);
  if (userInfo) {
    userState = {
      isLogin: true,
      userInfo: JSON.parse(userInfo),
    };
  }
  console.log('getInitialState');
  return userState;
}

export const layout = ({ initialState }) => {
  console.log(initialState);
  return {
    onPageChange: () => {
      let { isLogin } = initialState;
      console.log(isLogin);
      if (!isLogin) {
        history.push('/login');
      } else {
        if (history.location.pathname == '/login') {
          history.push('/');
        } else {
          history.push(history.location.pathname);
        }
        console.log(history);
        // if(history)
      }
    },
    rightContentRender: () => <HeaderDropdown />,
  };
};
