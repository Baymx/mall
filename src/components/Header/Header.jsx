import React, { Component } from 'react';
import { Input, Balloon, Icon, Badge } from '@icedesign/base';
import { withRouter } from 'react-router-dom';
import Menu from '@icedesign/menu';
import Logo from '../Logo';
import ShopCar from '../ShopCar';
import './Header.scss';

const MENUS = [
  {
    name: '手机',
    path: '/phone',
  },
  {
    name: '声学',
    path: '/acoustics',
  },
  {
    name: '配件',
    path: '/fitting',
  },
  {
    name: '生活',
    path: '/left',
  },
  {
    name: 'Flyme',
    path: '/flyme',
  },
  {
    name: '服务',
    path: '/flyme',
  },
  {
    name: '专买店',
    path: '/flyme',
  },
  {
    name: '社区',
    path: '/flyme',
  },
  {
    name: '社区',
    children: [
      {
        name: '知乎专栏',
        path: 'https://zhuanlan.zhihu.com/ice-design',
      },
      {
        name: '万能群',
        path:
          require('./images/ice-group.png'),
      },
    ],
  },
];
@withRouter
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5
    };
  }

  renderBalloonContent = (menu) => {
    return (
      <Menu.Item key={menu.name}>
        <Balloon
          className="header-balloon-content"
          closable={false}
          triggerType="click"
          trigger={
            <a>
              {menu.name}{' '}
              <Icon
                size="xxs"
                type="arrow-down-filling"
                className="arrow-down-filling-icon"
              />
            </a>
          }
        >
          {menu.children.map((subMenu, index) => {
            return (
              <a href="#" className="custom-sub-menu" key={index}>
                {subMenu.name}
              </a>
            );
          })}
        </Balloon>
      </Menu.Item>
    );
  };

  renderMenuItem = () => {
    return MENUS.map((menu, index) => {
      if (menu.children) {
        return this.renderBalloonContent(menu);
      }
      return (
        <Menu.Item key={index} className="">
          <a onClick= {this.menuClick.bind(this,menu)}>{menu.name}</a>
        </Menu.Item>
      );
    });
  };
  menuClick = (item)=>{
    const { history } = this.props;
    history.push(item.path)
  }
  render() {
    return (
      <div className="header-container">
        <div className="header-content">
          <Logo />
          <div className="header-navbar">
            <Menu className="header-navbar-menu" mode="horizontal">
              {this.renderMenuItem()}
            </Menu>
            <div className="header-search-input">
              <Input placeholder="全局搜索" />
            </div>
            <div>
              <Icon type="account" style={{ color: "#fff", marginLeft: "20px", marginRight: "10px" }} />
            </div>
            <ShopCar />
          </div>
        </div>
      </div>
    );
  }
}
