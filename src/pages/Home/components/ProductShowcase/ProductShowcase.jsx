/* eslint no-mixed-operators: 0 */
import React, { Component } from "react";

export default class ProductShowcase extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderBigProducts = (List) => {
    return (
      <div className="big-products">
        {
          List.map((item, index) => {
            return (
              <a href={item.path} key={index}>
                <span className={item.type}>{item.type == "fall" ? '直降' : item.type == "offer" ? "优惠" : ""} </span>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <img src={item.src} alt="" />
              </a>
            );
          })
        }
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
        src: "https://openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png"
      },
      {
        name: "魅族 16th",
        description: "骁龙845 AI加速 屏幕下指纹 AI双摄光学防抖",
        price: 2498,
        type: "offer",
        path: "/phone",
        src: "https://openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png"
      },
    ]
    var { data } = this.props;
    return (
      <div className="showcase">
        <div className="showcase-adv">
          <h3>魅族手机</h3>
          <a href="/phone">
            <img src="https://fms.res.meizu.com/dms/2018/12/12/a2ff5d93-f7db-4999-a536-27bdfabeb2fd.jpg" alt="" />
          </a>
        </div>

        {this.renderBigProducts(List)}

      </div>
    );
  }
}
