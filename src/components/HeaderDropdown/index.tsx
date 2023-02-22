import React from 'react';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import { history, useModel } from 'umi';

const items: MenuProps['items'] = [
  {
    label: '个人设置',
    key: 'center',
    icon: <UserOutlined />,
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: <LogoutOutlined />,
  },
];

const HeaderDropdown: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const handleMenuClick: MenuProps['onClick'] = async (e) => {
    // console.log('click', e);
    if (e.key == 'logout') {
      // 清除initialState
      await setInitialState({
        isLogin: false,
        userInfo: null,
      });
      // 清除本地缓存
      await localStorage.clear();
      await sessionStorage.clear();
      history.push('/login');
    }
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Space wrap>
      <Dropdown.Button
        menu={menuProps}
        placement="bottom"
        icon={<UserOutlined />}
      ></Dropdown.Button>
    </Space>
  );
};

export default HeaderDropdown;
