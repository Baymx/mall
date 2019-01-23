import React, { Component } from 'react';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ExcellentHomePage from './components/ExcellentHomePage';

export default class Phone extends Component {
  static displayName = 'Phone';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="phone-page">
      <div className="header">
        <Header color = '#333' logColor = '#00c3f5' />
      </div>
        <Footer />
      </div>
    );
  }
}
