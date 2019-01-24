import React, { Component } from 'react';

export default class Banner extends Component {
  render() {
    const { src } = this.props;
    return (
      <div
        className="banner"
      >
        
        <a href="">
        <img src={src} alt="" />
        </a>
      </div>
    );
  }
}
