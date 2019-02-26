import React, { Component } from 'react';
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default class Detail extends Component {
  static displayName = 'Detail';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="detail-page">
        <div className="header">
          <Header color='#333' logColor='#00c3f5' />
        </div>
      </div>
    );
  }
}
