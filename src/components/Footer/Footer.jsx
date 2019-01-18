import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  renderFooterList = (data) => {
    return (
      data.map((item, index) => {

      })
    )
  }

  render() {
    const data = [];
    return (
      <footer>
        <div className="footer-box">
          {this.renderFooterList(data)}
          <div className="onlive-server">
            <span>周一至周日 7:30-24:00</span>
            <p className="tel">400-788-3333</p>
            <a className="onlive-btn" href="http://url.meizu.com/ols_PC?click=store_index_bottom_service_online&amp;click=click_entrance_store_service" target="_blank">在线客服</a>
          </div>
        </div>
      </footer>
    );
  }
}
