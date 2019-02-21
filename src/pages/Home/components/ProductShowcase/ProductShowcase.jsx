/* eslint no-mixed-operators: 0 */
import React, { Component } from "react";
import Section from './components/Section';
import { withRouter } from 'react-router-dom';
@withRouter
export default class ProductShowcase extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderBigProducts = List => {
    return (
      <div className="big-products">
        {List.map((item, index) => {
          if(item.isBig && item.isBig == true){
            return (
              <a onClick={this.sectionClick.bind(this, item)} key={index}>
                <span className={item.activityColor}>
                  {item.activityName}
                </span>
                <div className='h2'>{item.name}</div>
                <div className='p'>{item.description}</div>
                <div className='price'>¥{item.price}</div>
                <img src={item.src} alt="" />
              </a>
            );
          }
        })}
      </div>
    );
  };
  renderSmallProducts = List => {
    return (
      <div className="small-products">
        {List.map((item, index) => {
          if(!item.isBig){
            return (
              <a href={item.path} key={index}>
                <span className={item.activityColor}>
                  {item.activityName}
                </span>
                <img src={item.src} alt="" />
                <div className='h2'>{item.name}</div>
                <div className='p'>{item.description}</div>
                <div className='price'>¥{item.price}</div>
              </a>
            );
          }
        })}
      </div>
    );
  }

  sectionClick = (item) => {
    const { history } = this.props;
    history.push(`${item.path}/${item.id}`)
  }
  render() {
    var { homePhoneList = {} } = this.props.productList || {};
    var { voiceData = {} } = this.props.productList || {};
    return (
      <div className="showcase">
        <div className="showcase-adv">
          <h3>{ homePhoneList.title ? homePhoneList.title : '' }</h3>
          <a href={homePhoneList.path ? homePhoneList.path : ''}>
            <img
              src={homePhoneList.src ? homePhoneList.src : ''}
              alt=""
            />
          </a>
        </div>
        {this.renderBigProducts(homePhoneList.list ? homePhoneList.list : [])}
        {this.renderSmallProducts(homePhoneList.list ? homePhoneList.list : [])}

        <Section data={ voiceData } />
      </div>
    );
  }
}
