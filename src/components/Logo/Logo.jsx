import React, { Component } from 'react';
export default class Logo extends Component {
  render() {
    const { logColor } = this.props;
    const logo = logColor ? logColor : "#ffffff";
    return (
      <div
        className="logo"
        style={{
          height: 32,
          color: '#f40',
          textAlign: 'left',
        }}
      >
        <a href="/" style={{ display: 'block', position: 'relative' }}>
          {/* <img src={logo} width="129" height="35" alt="logo" /> */}
                <svg fill={logo} version="1.1" id="Logo" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="125px" height="24px" viewBox="17.318 5.824 402.048 73.556" space="preserve">
                  <path d="M321.513,5.824H256.91v12.878h51.478l-49.294,44.581c-8.227,7.023-2.872,16.096,3.958,16.096h65.337V66.472
                    h-52.117l48.964-44.554C333.52,14.473,328.535,5.824,321.513,5.824"></path>
                  <rect x="226.517" y="5.824" width="14.426" height="73.556"></rect>
                  <path d="M104.296,5.824h-71.36c-8.576,0-15.618,7.012-15.618,15.588v57.967H31.14V23.743
                    c0-2.711,2.208-5.041,4.92-5.041h25.31v60.677h14.428V18.702h25.312c2.712,0,4.919,2.329,4.919,5.041v55.636h13.86V21.416
                    C119.888,12.841,112.872,5.824,104.296,5.824"></path>
                  <path d="M148.765,23.614c0-2.712,2.199-4.912,4.911-4.912h55.909V5.824h-58.236c-8.576,0-15.592,7.016-15.592,15.592
                    v42.37c0,8.576,7.017,15.592,15.592,15.592h58.236V66.5h-55.909c-2.711,0-4.911-2.199-4.911-4.912V49.042h58.43V36.117h-58.43
                    V23.614z"></path>
                  <path d="M405.506,5.824v55.637c0,2.71-2.22,5.039-4.931,5.039h-39.77c-2.711,0-4.892-2.328-4.892-5.039V5.824h-13.86
                    v57.963c0,8.576,7.018,15.592,15.592,15.592h46.127c8.575,0,15.592-7.017,15.592-15.592V5.824H405.506z"></path>
                </svg>
        </a>
      </div>
    );
  }
}
