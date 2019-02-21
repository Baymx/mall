import React, { Component } from "react";
import Show from "./components/Show"

export default class Goods extends Component {
  render() {
    const { goodList = [] } = this.props || {};
    return (
      <div className="goods">
      {
        goodList && goodList.map((item,index)=>{
          return(<Show goodsInfo = {item} key={index}/>)
        })
      }
      </div>
    );
  }
}
