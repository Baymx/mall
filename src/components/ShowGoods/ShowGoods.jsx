import React, { Component } from 'react';

export default class ShowGoods extends Component {
  render() {
    return (
      <div
        className="show-goods"
      >
        <div className="">
          <div>
            <span>手机</span>
            <div className="title-filter">
            <span>推荐</span>
            <span>新品</span>
            <span>价格</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
