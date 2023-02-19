export const request = {
  requestInterceptors: [
    // 请求拦截
    (url: string, options: any): any => {
      console.log(url, options);
      // options.url = 'https://azf3ih55.lc-cn-n1-shared.com/1.1' + url;
      // options.headers = {
      //   'X-LC-Id': 'azF3ih550cP25I0JvlWgJMK7-gzGzoHsz',
      //   'X-LC-Key': '2Oq6PAgr20HT9yqnMGMlMt09',
      //   'Content-Type': 'application/json',
      // };
      return options; //此处return的内容就是自定义请求配置
    },
  ],
  responseInterceptors: [
    // 响应拦截
    async (response: any, options: any) => {
      let res = await response.json();
      console.log('res', res);
      // console.log(response.json());
      return res; //此处return的内容就是后端返回的数据包
    },
  ],
};
