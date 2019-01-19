import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  renderFooterList = data => {
    return (
      <div className="footer-service">
        {data.map((item, index) => {
          return (
            <a key={index}>
              <img src={item.src} alt="" />
              <p>{item.text}</p>
            </a>
          );
        })}
      </div>
    );
  };

  render() {
    const data = [
      {
        src:
          "https://fms.res.meizu.com/dms/2018/07/13/2c69bf7c-2d29-4fd4-852e-0aa497f36f51.png",
        text: "全场顺丰包邮"
      },
      {
        src:
          "https://fms.res.meizu.com/dms/2018/07/13/d28eac8b-b915-49dc-9dbd-80884a07d44f.png",
        text: "100+ 城市次日送达"
      },
      {
        src:
          "https://fms.res.meizu.com/dms/2018/07/13/b21f3e65-f7f4-4693-914c-c070faf96770.png",
        text: "7天无理由退货"
      },
      {
        src:
          "https://fms.res.meizu.com/dms/2018/07/13/1998f0da-a439-4e07-9736-e6a1c39fb0ae.png",
        text: "15天换货保障"
      },
      {
        src:
          "https://fms.res.meizu.com/dms/2018/07/13/420825c1-4763-436d-b3e1-721651ccc70c.png",
        text: "1年免费保修"
      },
      {
        src:
          "https://fms.res.meizu.com/dms/2018/07/13/1c5cfeff-1b35-499e-bc2a-1fd29305be69.png",
        text: "上门快修"
      }
    ];
    return (
      <footer>
        <div className="footer-box">
          {this.renderFooterList(data)}
          <div className="onlive-server">
            <span>周一至周日 7:30-24:00</span>
            <p className="tel">400-788-3333</p>
            <a
              className="onlive-btn"
              href="http://url.meizu.com/ols_PC?click=store_index_bottom_service_online&amp;click=click_entrance_store_service"
              target="_blank"
            >
              在线客服
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
