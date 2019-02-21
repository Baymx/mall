import React, { Component } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import ProductFeature from "./components/ProductFeature";
// import CustomMaterials from "./components/CustomMaterials";
// import VisualAssembly from "./components/VisualAssembly";
// import SoftwareDownload from "./components/SoftwareDownload";
// import ChangeLogs from "./components/ChangeLogs";
import RotationSlider from "./components/RotationSlider";
import SectionAd from "./components/SectionAd";
import ProductShowcase from "./components/ProductShowcase";
import { getHomeData } from '../../api/Home'

export default class Home extends Component {
  static displayName = "Home";

  constructor(props) {
    super(props);
    this.state = {
      sliderList : [],
      adList : [],
      productList : []
    };
  }
  componentDidMount(){
    getHomeData().then(res=>{
      console.log(res)
      const sliderList = res.data && res.data.sliderList  ? res.data.sliderList : [];
      const adList = res.data && res.data.adList  ? res.data.adList : [];
      const productList = res.data && res.data.productList  ? res.data.productList : [];
      this.setState({
        sliderList : sliderList,
        adList : adList,
        productList : productList
      })
    }).catch(error=>{
      console.log(error)
    })
  }
  render() {
    const { sliderList, adList, productList } =  this.state || {}
    console.log(sliderList)
    return (
      <div className="home-page" style={styles.homepage}>
        <Header  />
        <RotationSlider sliderList = { sliderList}/>
        <SectionAd  adList = { adList }/>
        <div >
          <ProductShowcase productList = { productList } />
        </div>
        <Footer />
      </div>
    );
  }
}

const styles = {
  homepage: {
    background: "#f4f4f4",
    overflow: "hidden"
  },
  home:{
    
  }
};
