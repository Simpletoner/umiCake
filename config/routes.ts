export default [
  {
    path: '/login',
    component: '@/pages/login/index',
    name: '登录',
    layout: false,
    hideInMenu: true,
  },
  {
    path: '/',
    icon: 'HomeOutlined',
    component: '@/pages/index',
    name: '首页',
  },
  {
    path: '/user',
    icon: 'UserOutlined',
    component: '@/pages/user',
    name: '用户',
  },
  {
    path: '/stu',
    icon: 'TeamOutlined',
    name: '学员管理',
    routes: [
      {
        path: '/stu/list',
        component: '@/pages/stu/list',
        name: '学员列表',
      },
      {
        path: '/stu/public',
        component: '@/pages/stu/public',
        name: '学员录入',
      },
    ],
  },
  {
    path: '/category',
    icon: 'TagsOutlined',
    name: '分类管理',
    routes: [
      {
        path: '/category/list',
        component: '@/pages/category/categoryList',
        name: '分类列表',
      },
      {
        path: '/category/public',
        component: '@/pages/category/categoryPublic',
        name: '分类发布',
      },
    ],
  },
  {
    path: '/banner',
    icon: 'BarcodeOutlined',
    name: '轮播管理',
    routes: [
      {
        path: '/banner/list',
        component: '@/pages/banner/bannerList',
        name: '轮播列表',
      },
      {
        path: '/banner/public',
        component: '@/pages/banner/bannerPublic',
        name: '轮播发布',
      },
      {
        path: '/banner/edit',
        component: '@/pages/banner/bannerEdit',
        name: '轮播编辑',
        hideInMenu: true,
      },
    ],
  },
  {
    path: '/dvatest',
    icon: 'BarcodeOutlined',
    name: 'dva测试',
    routes: [
      {
        path: '/dvatest/ca',
        component: '@/pages/dvatest/cA',
        name: 'A',
      },
      {
        path: '/dvatest/cb',
        component: '@/pages/dvatest/cb',
        name: 'B',
      },
      {
        path: '/dvatest/notice',
        component: '@/pages/dvatest/notice',
        name: '消息列表',
      },
    ],
  },
];
