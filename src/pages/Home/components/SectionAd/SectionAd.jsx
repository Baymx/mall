/* eslint no-mixed-operators: 0 */
import React, { Component } from "react";

export default class SectionAd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const adList = [
      {
        path: "/ad",
        src:
          "https://fms.res.meizu.com/dms/2019/01/09/ab27a246-570f-49a8-b8b4-c25c41dc628d.jpg",
        title: "年货市场",
        text: "进入市场"
      },
      {
        path: "/ad",
        src:
          "https://fms.res.meizu.com/dms/2018/11/23/0ce68181-e2fe-4772-881e-dfeb2c429fb0.jpg",
        title: "M码通道",
        text: "欢迎使用M码购买"
      },
      {
        path: "/ad",
        src:
          "https://fms.res.meizu.com/dms/2019/01/08/69f7e0df-173b-4a10-9206-f9b21b3b6c23.jpg",
        title: "以旧换新",
        text: "免费寄件 专业检测"
      },
      {
        path: "/ad",
        src:
          "https://fms.res.meizu.com/dms/2019/01/08/ed61e001-2169-47a8-97e0-d077887105d0.jpg",
        title: "锦鲤福利",
        text: "你就是锦鲤"
      }
    ];
    return (
      <div className="section">
        <ul>
          {adList.map((item, index) => (
            <li key={index}>
              <a href={item.path}>
                <img src={item.src} alt="" />
                <em>{item.title}</em>
                <p>{item.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
