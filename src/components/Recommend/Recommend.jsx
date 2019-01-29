import React, { Component } from 'react';
import SlidesShow  from "./components/SlidesShow"
export default class Recommend extends Component {
  render() {
    return (
      <div className="recommend">
        <div className="recommend-title">为您推荐</div>
        <SlidesShow />
      </div>
    );
  }
}
