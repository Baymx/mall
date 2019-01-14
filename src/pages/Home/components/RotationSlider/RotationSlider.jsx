/* eslint no-mixed-operators: 0 */
import React, { Component } from "react";
import { Slider } from "@icedesign/base";

export default class RotationSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const bigSlides = [
      {
        url:
          "https://fms.res.meizu.com/dms/2019/01/08/efc114da-2afc-4e1d-bdff-56bcf1213340.jpg",
      },
      {
        url:
          "https://fms.res.meizu.com/dms/2018/12/29/d05f4885-c98d-41c9-9251-ee213fc15e68.jpg",
      },
      {
        url:
          "https://openfile.meizu.com/group1/M00/06/F3/Cgbj0VwbayCADvymAAhhybLeHtc355.jpg",
      },
      {
        url:
          "https://openfile.meizu.com/group1/M00/06/F1/Cgbj0VwZ-AuAGG2iAAbaHUcx_Hk209.jpg",
      },
      {
        url:
          "https://fms.res.meizu.com/dms/2018/12/29/38df385d-0f54-44d1-a0c1-485d360e8d56.jpg",
      }
    ];
    return (
      
        <Slider
          arrowSize="large"
          autoplay={true}
          arrows={false}
        >
          {bigSlides.map((item, index) => (
            <div
              key={index}
              className="slider-img-wrapper"
              style={styles.slider}
            >
              <img src={item.url} />
            </div>
          ))}
        </Slider>
      
    );
  }
}
const styles = {
  homepage: {
    background: "#fff",
    overflow: "hidden"
  },
  slider: {
    width: document.body.clientWidth+ 10 + "px"
  }
};
