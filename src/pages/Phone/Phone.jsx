import React, { Component } from 'react';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import ShowGoods from "../../components/ShowGoods";
import Recommend from "../../components/Recommend";
export default class Phone extends Component {
  static displayName = 'Phone';

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const phoneData = {
      banner: {
        src: "https://openfile.meizu.com/group1/M00/06/F1/Cgbj0FxBOImANlnVAAw4W7hGyw4785.jpg",
        path: "/phone"
      },
      title :'手机',
      goodList: [
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
          name: "魅族 16th",
          description: "限时领券更优惠 领完即止 | 骁龙845 屏下指纹",
          price: "2498"
        },
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
          name: "魅族 16th",
          description: "限时领券更优惠 领完即止 | 骁龙845 屏下指纹",
          price: "2498"
        },
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
          name: "魅族 16th",
          description: "限时领券更优惠 领完即止 | 骁龙845 屏下指纹",
          price: "2498"
        },
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
          name: "魅族 16th",
          description: "限时领券更优惠 领完即止 | 骁龙845 屏下指纹",
          price: "2498"
        },
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
          name: "魅族 16th",
          description: "限时领券更优惠 领完即止 | 骁龙845 屏下指纹",
          price: "2498"
        },
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
          name: "魅族 16th",
          description: "限时领券更优惠 领完即止 | 骁龙845 屏下指纹",
          price: "2498"
        },
      ]
    };
    return (
      <div className="phone-page">
        <div className="header">
          <Header color='#333' logColor='#00c3f5' />
        </div>
        <Banner src={phoneData.banner.src} />
        <ShowGoods goodList={phoneData.goodList} title ={ phoneData.title} />
        <div className="compare">
          <img src="https://openfile.meizu.com/group1/M00/06/F0/Cgbj0Fw-0c2AJlWqAAXXkghlwcI540.jpg" alt="" />
        </div>
        <Recommend />
        <Footer />
      </div>
    );
  }
}
