import React, { Component } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import ShowGoods from "../../components/ShowGoods";
import Recommend from "../../components/Recommend";

import { getAcousticsData } from "../../api/Acoustics"

export default class Acoustics extends Component {
  static displayName = "Acoustics";

  constructor(props) {
    super(props);
    this.state = {
      voiceData : []
    };
  }
  componentDidMount(){
    getAcousticsData().then(res=>{
      console.log(res)
      const voiceData = res.data  ? res.data : [];
      this.setState({
        voiceData : voiceData
      })
    }).catch(error=>{
      console.log(error)
    })
  }
  render() {
    const { banner = {} , title = '', goodList = [] } = this.state.voiceData || {}
    return (
      <div className="acoustics-page">
        <div className="header" style={styles.header}>
          <Header color="#333" logColor="#00c3f5" />
        </div>
        <Banner src={ banner.src ? banner.src : '' } />
        <ShowGoods goodList={ goodList } title = { title }/>
        <Recommend />
        <Footer />
      </div>
    );
  }
}

const styles = {
  header: {
    background: "#fff",
    height: "72px"
  }
};
