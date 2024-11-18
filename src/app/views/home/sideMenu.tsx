'use client'

import React, { useState, useEffect } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const SideMenu: React.FC = () => {
  const [menus, setMenus] = useState<MenuItem[]>([]);

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  // 转换菜单数据
  const convertMenus = (data: any) => {
    const result: MenuItem[] = [];    
    data.forEach((item: any) => {
      if (item.children) {
        result.push({
          key: item.id,
          label: item.c_name,
          icon: item.icon,
          children: convertMenus(item.children)
        });
      } else {
        result.push({
          key: item.id,
          label: item.c_name,
          icon: item.icon
        });
      }
    });
    setMenus(result)
  }
  // 获取菜单数据
  const fetchMenus = async () => {
    try {
      const res = await fetch('/api/menus');
      const data = await res.json();
      convertMenus(data)
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchMenus()
  }, []);

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={menus}
    />
  );
};

export default SideMenu;