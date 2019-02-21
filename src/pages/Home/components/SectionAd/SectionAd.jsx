/* eslint no-mixed-operators: 0 */
import React, { Component } from "react";

export default class SectionAd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const  { adList } = this.props || {};
    return (
      <div className="section">
        <ul>
          {adList && adList.map((item, index) => (
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
