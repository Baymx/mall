import React, { Component } from 'react';
import { Slider } from '@icedesign/base';
import Img from '@icedesign/img';
export default class SlidesShow extends Component {
  slides = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  }
  render() {
    const { arr } = this.props || {};
    return (
      <div className="slides-show">
        <Slider className="slides-box" slidesToShow={4} slidesToScroll={4} arrows={false}  >
          {
           arr && arr.map((item, index) => {
              console.log(item)
              return (
                <a key={index} className="slides-item" href="">
                  <img className="slides-item-img" src="//openfile.meizu.com/group1/M00/04/15/Cgbj0VrcXw2AL0tBAApTh_xwKKk709.png@480x480.jpg" />
                  <div className="slides-item-desc">
                    <h4 className="slides-item-title">魅族无线充电器</h4>
                    <p className="slides-item-price">
                      <span>￥</span><span className="slides-item-text">99</span>
                    </p>
                  </div>
                </a>
              );
            })
          }
        </Slider>
      </div>
    );
  }
}
