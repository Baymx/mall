import React, { Component } from 'react';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import ShowGoods from "../../components/ShowGoods";
import ExcellentHomePage from './components/ExcellentHomePage';

export default class Phone extends Component {
  static displayName = 'Phone';

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const phoneData = {
      banner: {
        src: "https://openfile.meizu.com/group1/M00/06/F1/Cgbj0FxBOImANlnVAAw4W7hGyw4785.jpg",
        path: "/phone"
      }
    };
    return (
      <div className="phone-page">
        <div className="header">
          <Header color='#333' logColor='#00c3f5' />
        </div>
        <Banner src={phoneData.banner.src} />
        <ShowGoods />
        <Footer />
      </div>
    );
  }
}
