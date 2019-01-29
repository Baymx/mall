import React, { Component } from "react";
import Goods from "./components/Goods";
export default class ShowGoods extends Component {
  render() {
  const goodList = [
    {
      activityName: "限时券",
      activityColor: "yellow",
      path: '/detail',
      id: 1,
      slideList: [
        {
          slideBg: 'http://openfile.meizu.com/group1/M00/06/FD/Cgbj0Vw0T3SActowAAAJazF5kdU066.png',
          goodsLoction: "http://openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png@480x480.jpg"
        },
        {
          slideBg: 'http://openfile.meizu.com/group1/M00/06/FD/Cgbj0Vw0T3KAVpPqAAAKRl5WFHo585.png',
          goodsLoction: "http://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png@480x480.jpg"
        },
        {
          slideBg: 'http://openfile.meizu.com/group1/M00/06/FD/Cgbj0Vw0T3OAco2pAAAY2Ea5xv4546.png',
          goodsLoction: "http://openfile.meizu.com/group1/M00/06/9B/Cgbj0FujRsOADooMAAbehLx6_Co899.png@480x480.jpg"
        }
      ],
      title: "魅族 16th",
      desc: "限时领券更优惠 领完即止 | 骁龙845 屏下指纹",
      price: "2498"
    },
    {
      activityName: "限时券",
      activityColor: "yellow",
      path: '/detail',
      id: 2,
      slideList: [
        {
          slideBg: 'http://openfile.meizu.com/group1/M00/06/FD/Cgbj0Vw0T3SActowAAAJazF5kdU066.png',
          goodsLoction: "http://openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png@480x480.jpg"
        },
        {
          slideBg: 'http://openfile.meizu.com/group1/M00/06/FD/Cgbj0Vw0T3KAVpPqAAAKRl5WFHo585.png',
          goodsLoction: "http://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png@480x480.jpg"
        },
        {
          slideBg: 'http://openfile.meizu.com/group1/M00/06/FD/Cgbj0Vw0T3OAco2pAAAY2Ea5xv4546.png',
          goodsLoction: "http://openfile.meizu.com/group1/M00/06/9B/Cgbj0FujRsOADooMAAbehLx6_Co899.png@480x480.jpg"
        }
      ],
      title: "魅族 16th",
      desc: "限时领券更优惠 领完即止 | 骁龙845 屏下指纹",
      price: "2498"
    },
    {
      activityName: "限时券",
      activityColor: "yellow",
      path: '/detail',
      id: 3,
      slideList: [
        {
          slideBg: 'http://openfile.meizu.com/group1/M00/06/FD/Cgbj0Vw0T3SActowAAAJazF5kdU066.png',
          goodsLoction: "http://openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png@480x480.jpg"
        },
        {
          slideBg: 'http://openfile.meizu.com/group1/M00/06/FD/Cgbj0Vw0T3KAVpPqAAAKRl5WFHo585.png',
          goodsLoction: "http://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png@480x480.jpg"
        },
        {
          slideBg: 'http://openfile.meizu.com/group1/M00/06/FD/Cgbj0Vw0T3OAco2pAAAY2Ea5xv4546.png',
          goodsLoction: "http://openfile.meizu.com/group1/M00/06/9B/Cgbj0FujRsOADooMAAbehLx6_Co899.png@480x480.jpg"
        }
      ],
      title: "魅族 16th",
      desc: "限时领券更优惠 领完即止 | 骁龙845 屏下指纹",
      price: "2498"
    },
    {
      activityName: "限时券",
      activityColor: "yellow",
      path: '/detail',
      id: 4,
      slideList: [
        {
          slideBg: 'http://openfile.meizu.com/group1/M00/06/FD/Cgbj0Vw0T3SActowAAAJazF5kdU066.png',
          goodsLoction: "http://openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png@480x480.jpg"
        },
        {
          slideBg: 'http://openfile.meizu.com/group1/M00/06/FD/Cgbj0Vw0T3KAVpPqAAAKRl5WFHo585.png',
          goodsLoction: "http://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png@480x480.jpg"
        },
        {
          slideBg: 'http://openfile.meizu.com/group1/M00/06/FD/Cgbj0Vw0T3OAco2pAAAY2Ea5xv4546.png',
          goodsLoction: "http://openfile.meizu.com/group1/M00/06/9B/Cgbj0FujRsOADooMAAbehLx6_Co899.png@480x480.jpg"
        }
      ],
      title: "魅族 16th",
      desc: "限时领券更优惠 领完即止 | 骁龙845 屏下指纹",
      price: "2498"
    },

  ]
    return (
      <div className="show-goods">
        <div className="show-goods-section">
          <div className="title">
            <span className="title-text">手机</span>
            <div className="title-filter">
              <span>推荐</span>
              <span>新品</span>
              <span>价格</span>
            </div>
          </div>
          <Goods   goodList = { goodList }/>
        </div>
      </div>
    );
  }
}
