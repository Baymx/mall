import React, { Component } from 'react';
import SlidesShow  from "./components/SlidesShow"
import { getRecommendData } from "../../api/Home"
export default class Recommend extends Component {
  static displayName = 'Recommend';

  constructor(props) {
    super(props);
    this.state = {
      Data : []
    };
  }

  componentDidMount(){
    getRecommendData().then(res=>{
      console.log(res)
      const Data = res.data  ? res.data : [];
      this.setState({
        Data : Data
      })
    }).catch(error=>{
      console.log(error)
    })
  }

  render() {
    const { Data = [] } = this.state || {}

    return (
      <div className="recommend">
        <div className="recommend-title">为您推荐</div>
        <SlidesShow  list = { Data }/>
      </div>
    );
  }
}
