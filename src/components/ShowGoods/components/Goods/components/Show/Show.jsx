import React, { Component } from "react";
export default class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }
  slideClick = loction => {
    const { item } = this.state || {};
    item &&  item.showPic ? item.showPic = loction : '';
    this.setState({
      item: item
    });
  };
  componentDidMount() {
    const { goodsInfo } = this.props || {};
    if(goodsInfo){
      goodsInfo.showPic =
      goodsInfo && goodsInfo.slideList && goodsInfo.slideList[0].goodsLoction
          ? goodsInfo.slideList[0].goodsLoction
          : "";
      this.setState({
        item: goodsInfo
      });
    }
    
  }
  render() {
    const { item } = this.state || {};
    return (
      <div>
        <a className="Show">
          <p className={`item-hot-sale ${item.activityColor}`}>
            {item.activityName}
          </p>
          <img className="item-pic" src={item.showPic} />
          <ul className="item-slide">
            {item.slideList &&
              item.slideList.map((element, index) => {
                return (
                  <li key={index}>
                    <img
                      onClick={this.slideClick.bind(this, element.goodsLoction)}
                      src={element.slideBg}
                      data-imgsrc={element.goodsLoction}
                      alt=""
                    />
                  </li>
                );
              })}
          </ul>
          <h3 className="item-title">{item.title}</h3>
          <p className="item-desc">{item.desc}</p>
          <p className="item-price">
            <em>￥</em>
            <span className="vm-price">{item.price}</span>
          </p>
        </a>
      </div>
    );
  }
}
