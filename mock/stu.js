import mockjs from 'mockjs';
let result = mockjs.mock({
  code: 200,
  msg: 'success',
  'data|100': [
    {
      id: '@id',
      name: '@cname',
      'age|20-25': 20,
      'gender|0-1': 0,
      record: '@integer(50, 100)',
      address: '@city',
    },
  ],
});
export default {
  'GET /classes/list': (req, res) => {
    res.send(result);
  },
  'DELETE /classes/delete': (req, res) => {
    let { id } = req.query;
    let { data } = result;
    console.log(result);
    data = data.filter((ele) => {
      return ele.id !== id;
    });
    result.data = data;
    res.send({
      code: 200,
      msg: '删除成功',
    });
  },
  // GET 可忽略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
};
