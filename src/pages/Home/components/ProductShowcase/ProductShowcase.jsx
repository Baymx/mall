/* eslint no-mixed-operators: 0 */
import React, { Component } from "react";

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

        <div className="showcase-adv">
          <h3>魅族声学</h3>
          <a href="/phone">
            <img
              src="https://fms.res.meizu.com/dms/2018/10/23/89d0ea78-27bd-4e9d-8a50-db02395d7ee4.jpg"
              alt=""
            />
          </a>
        </div>

       
      </div>
    );
  }
}
