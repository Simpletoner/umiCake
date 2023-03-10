// 动态生成权限
export default function (initialState: any) {
  console.log(' access initialState', initialState);
  let { rolecode } = initialState.userInfo
    ? initialState.userInfo
    : { rolecode: '' };

  return {
    isRoot: rolecode == 'root',
    isAdmin: rolecode == 'admin',
    isUser: rolecode == 'worker',
  };
}
