import React, { Component } from 'react';
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
        <ExcellentHomePage />
      </div>
    );
  }
}
