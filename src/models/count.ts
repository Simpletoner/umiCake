export default {
  namespace: 'count',
  state: 100,
  reducers: {
    // 相当于vux的mutations
    add(count: number) {
      return count + 1;
    },
  },
  // 异步操作
  effects: {
    *addAsync(action: any, { call, put }) {
      yield call();
      yield put({
        type: 'add',
      });
    },
  },
};
