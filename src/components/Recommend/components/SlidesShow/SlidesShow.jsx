import React, { Component } from 'react';
import { Slider } from '@icedesign/base';
export default class SlidesShow extends Component {
  slides = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  }
  render() {
    const { list } = this.props || {};
    return (
      <div className="slides-show">
        <Slider className="slides-box" slidesToShow={4} slidesToScroll={4} arrows={false}  >
          {
           list && list.map((item, index) => {
              console.log(item)
              return (
                <a key={index} className="slides-item" href="">
                  <img className="slides-item-img" src={item.src} />
                  <div className="slides-item-desc">
                    <h4 className="slides-item-title">{item.name}</h4>
                    <p className="slides-item-price">
                      <span>￥</span><span className="slides-item-text">{item.price}</span>
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
