import React, { Component } from 'react';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import ShowGoods from "../../components/ShowGoods";
import Recommend from "../../components/Recommend";
import { getPhoneData } from "../../api/Phone"
export default class Phone extends Component {
  static displayName = 'Phone';

  constructor(props) {
    super(props);
    this.state = {
      phoneData : []
    };
  }

  componentDidMount(){
    getPhoneData().then(res=>{
      console.log(res)
      const phoneData = res.data  ? res.data : [];
      this.setState({
        phoneData : phoneData
      })
    }).catch(error=>{
      console.log(error)
    })
  }

  render() {
    const { banner = {} , title = "", goodList = [] } = this.state.phoneData || {}
    return (
      <div className="phone-page">
        <div className="header">
          <Header color='#333' logColor='#00c3f5' />
        </div>
        <Banner src={ banner.src ? banner.src : '' } />
        <ShowGoods goodList={ goodList } title ={ title} />
        <div className="compare">
          <img src="https://openfile.meizu.com/group1/M00/06/F0/Cgbj0Fw-0c2AJlWqAAXXkghlwcI540.jpg" alt="" />
        </div>
        <Recommend />
        <Footer />
      </div>
    );
  }
}
