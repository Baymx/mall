import React, { Component } from "react";
// import Goods from "./components/Goods";


export default class ShowGoods extends Component {
  render() {
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
          {/* <Goods /> */}
        </div>
      </div>
    );
  }
}
