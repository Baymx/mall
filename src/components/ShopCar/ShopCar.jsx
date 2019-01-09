import React, { Component } from "react";
import { Icon, Badge, Balloon } from '@icedesign/base';

export default class ShopCar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5
    };
  }
  
  render() {
    const shopcar = (
      <a href="/shopCar" style={{ display: "block", position: "relative" }}  id="shopcar">
          <Badge count={this.state.count}>
            <Icon
              type="cart"
              style={{ color: "#fff", marginLeft: "20px", marginRight: "10px" }}
            />
          </Badge>
        </a>
    );
    return (
      <div
        style={{
          height: 32,
          color: "#f40",
          textAlign: "left"
        }}
      >
        <Balloon
          trigger={shopcar}
          align="br"
          alignment="edge"
          triggerType="hover"
          style={{ width: 300 }}
        >
          1234
      </Balloon>
    </div>
    );
  }
}
