import React, { Component } from 'react';

export default class Detail extends Component {
  static displayName = 'Detail';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="detail-page">
      详情页面
      </div>
    );
  }
}
