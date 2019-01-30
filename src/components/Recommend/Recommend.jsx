import React, { Component } from 'react';
import SlidesShow  from "./components/SlidesShow"
export default class Recommend extends Component {
  render() {
    const Data = [
      {
        name: "魅族 16th",
        description: "骁龙845 AI加速 屏幕下指纹 AI双摄光学防抖",
        price: 2498,
        path: '/detail',
        id: "00003",
        activityName: "领卷",
        activityColor: "blue",
        typeAdvFlag: true,
        originalPrice: 3000,
        color: '#ebce6b',
        src:
          "https://openfile.meizu.com/group1/M00/06/CC/Cgbj0VvINL-AGM20AAw4GirVtYA698.png"
      },
      {
        name: "魅族 16 X",
        description: "高通骁龙710 屏幕下指纹 旗舰双摄",
        price: 1798,
        activityName: "热卖",
        activityColor: "red",
        path: '/detail',
        id: "00003",
        src:
          "https://openfile.meizu.com/group1/M00/06/CC/Cgbj0VvINL-AGM20AAw4GirVtYA698.png"
      },
      {
        name: "魅族 16th",
        description: "骁龙845 AI加速 屏幕下指纹 AI双摄光学防抖",
        price: 2498,
        activityName: "领卷",
        activityColor: "blue",
        path: '/detail',
        id: "00003",
        src:
          "https://openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png"
      },
      {
        name: "魅族 16 X",
        description: "高通骁龙710 屏幕下指纹 旗舰双摄",
        price: 1798,
        type: "offer",
        activityName: "领卷",
        activityColor: "blue",
        path: '/detail',
        id: "00003",
        src:
          "https://openfile.meizu.com/group1/M00/06/CC/Cgbj0VvINL-AGM20AAw4GirVtYA698.png"
      },
      {
        name: "魅族 16th",
        description: "骁龙845 AI加速 屏幕下指纹 AI双摄光学防抖",
        price: 2498,
        activityName: "热卖",
        activityColor: "red",
        path: '/detail',
        id: "00003",
        src:
          "https://openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png"
      },
      {
        name: "魅族 16 X",
        description: "高通骁龙710 屏幕下指纹 旗舰双摄",
        price: 1798,
        activityName: "领卷",
        activityColor: "blue",
        path: '/detail',
        id: "00003",
        src:
          "https://openfile.meizu.com/group1/M00/06/CC/Cgbj0VvINL-AGM20AAw4GirVtYA698.png"
      },
      {
        name: "魅族 16th",
        description: "骁龙845 AI加速 屏幕下指纹 AI双摄光学防抖",
        price: 2498,
        activityName: "领卷",
        activityColor: "blue",
        path: '/detail',
        id: "00003",
        src:
          "https://openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png"
      },
      {
        name: "魅族 16th",
        description: "骁龙845 AI加速 屏幕下指纹 AI双摄光学防抖",
        price: 2498,
        activityName: "领卷",
        activityColor: "blue",
        path: '/detail',
        id: "00003",
        src:
          "https://openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png"
      },
      {
        name: "魅族 16th",
        description: "骁龙845 AI加速 屏幕下指纹 AI双摄光学防抖",
        price: 2498,
        activityName: "领卷",
        activityColor: "blue",
        path: '/detail',
        id: "00003",
        src:
          "https://openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png"
      }
    ];
    return (
      <div className="recommend">
        <div className="recommend-title">为您推荐</div>
        <SlidesShow  list = { Data }/>
      </div>
    );
  }
}
