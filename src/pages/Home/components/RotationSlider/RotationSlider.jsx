/* eslint no-mixed-operators: 0 */
import React, { Component } from 'react';
import { Slider } from '@icedesign/base';

export default class Rotation extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const bigSlides = [
      {
        url: "https://fms.res.meizu.com/dms/2018/12/29/d05f4885-c98d-41c9-9251-ee213fc15e68.jpg",
        text: "磁带播放器换肤设计大赛"
      },
      {
        // background-image: -webkit-image-set(url("https://fms.res.meizu.com/dms/2018/12/29/067699fb-28be-4cce-b95e-8509fbdc473c.jpg") 1x, url("https://fms.res.meizu.com/dms/2018/12/29/d05f4885-c98d-41c9-9251-ee213fc15e68.jpg") 2x); width: 1905px; height: 670px;
        url: "https://openfile.meizu.com/group1/M00/06/F3/Cgbj0VwbayCADvymAAhhybLeHtc355.jpg",
        text: "手机淘宝皮肤征集"
      },
      {
        url: "https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg",
        text: "设计赋能公益"
      },
      {
        url: "https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg",
        text: "淘公仔设计大赛"
      }
    ];
    return (
      <div>
        <Slider arrowSize="large" autoplay="true" lazyLoad="true" arrows="false">
          {bigSlides.map((item, index) => (
            <div key={index} className="slider-img-wrapper">
              <img src={item.url} alt={item.text} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}