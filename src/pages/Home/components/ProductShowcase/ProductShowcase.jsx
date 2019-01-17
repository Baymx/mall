/* eslint no-mixed-operators: 0 */
import React, { Component } from "react";
import Section from './components/Section';

export default class ProductShowcase extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderBigProducts = List => {
    return (
      <div className="big-products">
        {List.map((item, index) => {
          return (
            <a href={item.path} key={index}>
              <span className={item.type}>
                {item.type == "fall"
                  ? "直降"
                  : item.type == "offer"
                    ? "优惠"
                    : ""}
              </span>
              <div className='h2'>{item.name}</div>
              <div className='p'>{item.description}</div>
              <div className='price'>¥{item.price}</div>
              <img src={item.src} alt="" />
            </a>
          );
        })}
      </div>
    );
  };
  renderSmallProducts = List => {
    return (
      <div className="small-products">
        {List.map((item, index) => {
          return (
            <a href={item.path} key={index}>
              <span className={item.type}>
                {item.type == "fall"
                  ? "直降"
                  : item.type == "offer"
                    ? "优惠"
                    : ""}
              </span>
              <img src={item.src} alt="" />
              <div className='h2'>{item.name}</div>
              <div className='p'>{item.description}</div>
              <div className='price'>¥{item.price}</div>
            </a>
          );
        })}
      </div>
    );
  }

  render() {
    const List = [
      {
        name: "魅族 16th",
        description: "骁龙845 AI加速 屏幕下指纹 AI双摄光学防抖",
        price: 2498,
        type: "fall",
        path: "/phone",
        src:
          "https://openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png"
      },
      {
        name: "魅族 16 X",
        description: "高通骁龙710 屏幕下指纹 旗舰双摄",
        price: 1798,
        type: "offer",
        path: "/phone",
        src:
          "https://openfile.meizu.com/group1/M00/06/CC/Cgbj0VvINL-AGM20AAw4GirVtYA698.png"
      }
    ];
    const Data = [
      {
        name: "魅族 16th",
        description: "骁龙845 AI加速 屏幕下指纹 AI双摄光学防抖",
        price: 2498,
        type: "fall",
        path: "/phone",
        typeAdvFlag: true,
        originalPrice: 3000,
        color: '#ebce6b',
        src:
          "https://fms.res.meizu.com/dms/2018/12/14/e786c416-5129-495a-b7fb-d2ca90da6e74.jpg"
      },
      {
        name: "魅族 16 X",
        description: "高通骁龙710 屏幕下指纹 旗舰双摄",
        price: 1798,
        type: "offer",
        path: "/phone",
        src:
          "https://openfile.meizu.com/group1/M00/06/CC/Cgbj0VvINL-AGM20AAw4GirVtYA698.png"
      },
      {
        name: "魅族 16th",
        description: "骁龙845 AI加速 屏幕下指纹 AI双摄光学防抖",
        price: 2498,
        type: "fall",
        path: "/phone",
        src:
          "https://openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png"
      },
      {
        name: "魅族 16 X",
        description: "高通骁龙710 屏幕下指纹 旗舰双摄",
        price: 1798,
        type: "offer",
        path: "/phone",
        src:
          "https://openfile.meizu.com/group1/M00/06/CC/Cgbj0VvINL-AGM20AAw4GirVtYA698.png"
      },
      {
        name: "魅族 16th",
        description: "骁龙845 AI加速 屏幕下指纹 AI双摄光学防抖",
        price: 2498,
        type: "fall",
        path: "/phone",
        src:
          "https://openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png"
      },
      {
        name: "魅族 16 X",
        description: "高通骁龙710 屏幕下指纹 旗舰双摄",
        price: 1798,
        type: "offer",
        path: "/phone",
        src:
          "https://openfile.meizu.com/group1/M00/06/CC/Cgbj0VvINL-AGM20AAw4GirVtYA698.png"
      },
      {
        name: "魅族 16th",
        description: "骁龙845 AI加速 屏幕下指纹 AI双摄光学防抖",
        price: 2498,
        type: "fall",
        path: "/phone",
        src:
          "https://openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png"
      }
    ];
    const voiceData = {
      sectionAdv: {
        sectionName : '魅族声学',
        path: './voice',
        src: 'https://fms.res.meizu.com/dms/2018/10/23/89d0ea78-27bd-4e9d-8a50-db02395d7ee4.jpg'
      },
      list: [
        {
          name: "POP 真无线蓝牙耳机",
          description: "POP 真无线蓝牙耳机",
          price: 399,
          type: "fall",
          path: "/phone",
          typeAdvFlag: true,
          originalPrice: 499,
          color: '#ebce6b',
          src:
            "https://fms.res.meizu.com/dms/2018/12/14/e786c416-5129-495a-b7fb-d2ca90da6e74.jpg"
        },
        {
          name: "魅族 HALO 激光蓝牙耳机",
          description: "夜跑神器 随性张扬",
          price: 499,
          originalPrice: 999,
          type: "offer",
          typeAdvFlag: false,
          path: "/phone",
          color: '',
          src:
            "https://openfile.meizu.com/group1/M00/04/17/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png"
        },
        {
          name: "魅族 Flow Bass 三单元耳机",
          description: "",
          price: 399,
          type: "fall",
          path: "/phone",
          typeAdvFlag: false,
          originalPrice: 599,
          color: '',
          src:
            "https://openfile.meizu.com/group1/M00/02/EE/Cgbj0FpeqUqAYAbBAAJRQlEIMmc702.png"
        },
        {
          name: "魅族 EP51 蓝牙运动耳机",
          description: "",
          price: 129,
          originalPrice: 229,
          typeAdvFlag: false,
          type: "offer",
          path: "/phone",
          color: '',
          src:
            "https://storeimg.meizu.com/product/1459849377-64075.png"
        },
        {
          name: "魅族蓝牙音频接收器",
          description: "轻巧设计 独立音频芯片 一键控制 6小时续航",
          price: 89,
          originalPrice: '',
          type: "fall",
          typeAdvFlag: true,
          path: "/phone",
          color: '#00fefb',
          src:
            "https://fms.res.meizu.com/dms/2018/12/14/4a466aec-1717-48b5-a0bd-7b921ad2a338.jpg"
        },
        {
          name: "魅族 EP-31 耳机",
          description: "",
          price: 99,
          originalPrice: 199,
          type: "offer",
          path: "/phone",
          typeAdvFlag: false,
          src:
            "https://openfile.meizu.com/group1/M00/06/20/Cgbj0Ft-WkOAAhCKAAFqcNe6c3M482.png"
        },
        {
          name: "魅族 EP2X 耳机",
          description: "",
          price: 69,
          originalPrice: 129,
          type: "fall",
          path: "/phone",
          typeAdvFlag: false,
          src:
            "https://openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png"
        }, {
          name: "魅蓝 EP52 蓝牙耳机",
          description: "",
          price: 199,
          originalPrice: '',
          type: "fall",
          path: "/phone",
          typeAdvFlag: false,
          src:
            "https://openfile.meizu.com/group1/M00/00/A2/Cix_s1gcVpeAOmoaAAGh-ubroNg891.png"
        },
        {
          name: "魅族 LIVE 四单元动铁耳机",
          description: "6期免息",
          price: 1099,
          originalPrice: 1299,
          type: "fall",
          typeAdvFlag: true,
          path: "/phone",
          color: '#00fefb',
          src:
            "https://fms.res.meizu.com/dms/2018/12/14/ea900393-0119-4f34-87c1-0770a22a84a1.jpg"
        },
        {
          name: "魅族 Flow 三单元耳机",
          description: "",
          price: 429,
          originalPrice: 599,
          type: "offer",
          path: "/phone",
          typeAdvFlag: false,
          src:
            "https://openfile.meizu.com/group1/M00/01/BC/Cgbj0Vl22XGAC6YIAAGautlHsjo741.png"
        },
        {
          name: "ME20入耳式耳机",
          description: "",
          price: 199,
          originalPrice: '',
          type: "fall",
          path: "/phone",
          typeAdvFlag: false,
          src:
            "https://openfile.meizu.com/group1/M00/01/D5/Cgbj0VmRZCiAKwA3AADYrtiPJlQ156.png"
        }, {
          name: "魅族蓝牙小音箱",
          description: "",
          price: 89,
          originalPrice: 169,
          type: "fall",
          path: "/phone",
          typeAdvFlag: false,
          src:
            "https://openfile.meizu.com/group1/M00/01/1D/Cix_s1ij7KeAdy0cAAbboUvsAC4250.png"
        }
      ]

    }
    var { data } = this.props;
    return (
      <div className="showcase">
        <div className="showcase-adv">
          <h3>魅族手机</h3>
          <a href="/phone">
            <img
              src="https://fms.res.meizu.com/dms/2018/12/12/a2ff5d93-f7db-4999-a536-27bdfabeb2fd.jpg"
              alt=""
            />
          </a>
        </div>
        {this.renderBigProducts(List)}
        {this.renderSmallProducts(Data)}

        <Section data={voiceData} />


      </div>
    );
  }
}
