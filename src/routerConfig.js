// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BlankLayout from './layouts/BlankLayout';
import Home from './pages/Home';
import Phone from './pages/Phone';
import Detail from './pages/Detail';
import Acoustics from './pages/Acoustics';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/',
    layout: BlankLayout,
    component: Home,
  },
  {
    path: '/phone',
    layout: BlankLayout,
    component: Phone,
  },
  {
    path: '/detail/:id',
    layout: BlankLayout,
    component: Detail,
  },
  {
    path: '/acoustics',
    layout: BlankLayout,
    component: Acoustics,
  },
  {
    path: '*',
    layout: BlankLayout,
    component: NotFound,
  },
];

export default routerConfig;
