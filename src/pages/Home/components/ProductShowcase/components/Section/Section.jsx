/* eslint no-mixed-operators: 0 */
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
@withRouter
export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderSections = (List) => {
    return (
      <ul>
        {
         List &&  List.map((item, index) => {
            return (
              <li className='sections-item' key={index}>
                <a onClick= {this.sectionClick.bind(this,item)} >
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
  sectionClick = (item) =>{
    const { history } = this.props;
    history.push(`${item.path}/${item.id}`)
  }
  render() {
    var { list = [] ,sectionAdv={} } = this.props.data || {};
    return (
      <div className="sections">
        <div className="showcase-adv">
          <h3>{sectionAdv.sectionName ? sectionAdv.sectionName : ''}</h3>
          <a href={sectionAdv.path ? sectionAdv.path : ''}>
            <img
              src={sectionAdv.src ? sectionAdv.src : ''}
              alt=""
            />
          </a>
        </div>
        {this.renderSections(list)}
      </div>
    );
  }
}
