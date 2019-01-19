/* eslint no-mixed-operators: 0 */
import React, { Component } from "react";

export default class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="community">
        <div className="communityTitle">
          <h3>{sectionAdv.sectionName}</h3>
          <a href={sectionAdv.path}>
            <img
              src={sectionAdv.src}
              alt=""
            />
          </a>
        </div>
        {this.renderSections(list)}
      </div>
    );
  }
}
