/* eslint no-mixed-operators: 0 */
import React, { Component } from "react";
import { Item } from "../../../../../../../node_modules/@icedesign/menu";

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderSections = (List) => {
    return (
      <ul>
        {
          List.map((item, index) => {
            return (
              <li className='sections-item' key={index}>
                <a href={item.path}>
                  <img src={item.src} className={item.typeAdvFlag ? 'typeAdv' : ''} />
                  {
                    item.typeAdvFlag ?
                      <div className='sections-item-AdvInfo'>
                        <div className="goods-name">{item.name}</div>
                        <div className="goods-desc" >{item.description}</div>
                        <div className="goods-price">
                          <i style={{ color: item.color }} >￥{item.price}</i><em></em>
                          {
                            item.originalPrice ? <s>￥{item.originalPrice}</s> : ''
                          }
                        </div>
                      </div> :
                      <div className='sections-item-info'>
                        <div className="goods-name">{item.name}</div>
                        <div className="goods-desc" >{item.description}</div>
                        <div className="goods-price">
                          <i style={{ color: item.color }} >￥{item.price}</i><em></em>
                          {
                            item.originalPrice ? <s>￥{item.originalPrice}</s> : ''
                          }
                        </div>
                      </div>
                  }
                </a>
              </li>
            )
          })
        }
      </ul>
    );
  }

  render() {
    var { data } = this.props;
    var { list } = data;
    var { sectionAdv } = data;
    return (
      <div className="sections">
        <div className="showcase-adv">
          <h3>{sectionAdv.sectionName}</h3>
          <a href={sectionAdv.path}>
            <img
              src={sectionAdv.src}
              alt=""
            />
          </a>
        </div>
        {this.renderSections(list)}
      </div>
    );
  }
}