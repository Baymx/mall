import React, { Component } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import ShowGoods from "../../components/ShowGoods";
import Recommend from "../../components/Recommend";

export default class Acoustics extends Component {
  static displayName = "Acoustics";

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const voiceData = {
      banner: {
        src:
          "https://openfile.meizu.com/group1/M00/06/FC/Cgbj0VwtxYyAUf3OAAUiVIK-OmM356.jpg",
        path: "/acoustics"
      },
      title : "声学",
      goodList: [
        {
          activityName: "",
          activityColor: "",
          path: "/detail",
          id: 1,
          slideList: [
            {
              slideBg:
                "http://openfile.meizu.com/group1/M00/07/00/Cgbj0Vw8RZKAPw0DAAAJ69zqZ5g670.png",
              goodsLoction:
                "http://openfile.meizu.com/group1/M00/04/17/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png@480x480.jpg"
            },
            {
              slideBg:
                "http://openfile.meizu.com/group1/M00/07/00/Cgbj0Vw8RZKAZdw0AAAJi311VBs869.png",
              goodsLoction:
                "http://openfile.meizu.com/group1/M00/04/08/Cgbj0FrcX6iAfZfmAARPvQUH0FM087.png@480x480.jpg"
            }
          ],
          name: "魅族 HALO 激光蓝牙耳机",
          description: "夜跑神器 随性张扬",
          price: "499"
        },
        {
          activityName: "",
          activityColor: "",
          path: "/detail",
          id: 1,
          slideList: [
            {
              slideBg:
                "http://openfile.meizu.com/group1/M00/06/F0/Cgbj0Fw8RZKAZoWmAAAJazF5kdU895.png",
              goodsLoction:
                "http://openfile.meizu.com/group1/M00/05/11/Cgbj0Fsp-8yATCDFAASWKnb1fdQ339.png@480x480.jpg"
            }
          ],
          name: "POP 真无线蓝牙耳机",
          description: "双无线 零设限",
          price: "449"
        },
        {
          activityName: "",
          activityColor: "",
          path: "/detail",
          id: 1,
          slideList: [
            {
              slideBg:
                "http://openfile.meizu.com/group1/M00/07/00/Cgbj0Vw8RZKAB1cwAAALYzl9O8g861.png",
              goodsLoction:
                "http://openfile.meizu.com/group1/M00/01/D2/Cgbj0Fmb55mABV4HAAKspJD9ivQ842.png@480x480.jpg"
            }
          ],
          name: "魅蓝 EP52 蓝牙耳机",
          description: "轻盈悦耳 动无拘束",
          price: "199"
        },
        {
          activityName: "",
          activityColor: "",
          path: "/detail",
          id: 1,
          slideList: [
            {
              slideBg:
                "http://openfile.meizu.com/group1/M00/07/00/Cgbj0Vw8RZKAWNQ_AAAKCZNpzA4524.png",
              goodsLoction:
                "http://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-SAO6IgAARPVTFhby0701.png@480x480.jpg"
            },
            {
              slideBg:
                "http://openfile.meizu.com/group1/M00/06/F0/Cgbj0Fw8RZKAZoWmAAAJazF5kdU895.png",
              goodsLoction:
                "http://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-OAIlOuAAIlimOCLcA452.png@480x480.jpg"
            },
            {
              slideBg:
                "http://openfile.meizu.com/group1/M00/06/F0/Cgbj0Fw8RZKAXrLjAAAKGDAXl9Q548.png",
              goodsLoction:
                "http://openfile.meizu.com/group1/M00/06/A6/Cgbj0Vui_-SASKMsAAQO9wrBG1Q074.png@480x480.jpg"
            }
          ],
          name: "魅族 EP52 Lite 蓝牙耳机",
          description: "超高性价比创造无线新声代",
          price: "129"
        },
        {
          activityName: "",
          activityColor: "",
          path: "/detail",
          id: 1,
          slideList: [
            {
              slideBg:
                "http://openfile.meizu.com/group1/M00/06/F0/Cgbj0Fw8RZKAEDyYAAAKRl5WFHo684.png",
              goodsLoction:
                "http://openfile.meizu.com/group1/M00/00/A2/Cix_s1gcTHCANftiAAErzSizI8c299.png@480x480.jpg"
            },
            {
              slideBg:
                "http://openfile.meizu.com/group1/M00/06/F0/Cgbj0Fw8RZKAZoWmAAAJazF5kdU895.png",
              goodsLoction:
                "http://openfile.meizu.com/group1/M00/00/A2/Cix_s1gcVpeAOmoaAAGh-ubroNg891.png@480x480.jpg"
            }
          ],
          name: "魅族 EP2X 耳机",
          description: "契合声音的流动之美",
          price: "69"
        },
        {
          activityName: "",
          activityColor: "",
          path: "/detail",
          id: 1,
          slideList: [
            {
              slideBg:
                "http://storeimg.meizu.com/product/1459821457-44363.png",
              goodsLoction:
                "http://storeimg.meizu.com/product/1459849377-64075.png@480x480.jpg"
            }
          ],
          name: "魅族 EP2X 耳机",
          description: "契合声音的流动之美",
          price: "69"
        },
        {
          activityName: "",
          activityColor: "",
          path: "/detail",
          id: 1,
          slideList: [
            {
              slideBg:
                "http://openfile.meizu.com/group1/M00/06/F0/Cgbj0Fw8RZKAZoWmAAAJazF5kdU895.png",
              goodsLoction:
                "http://openfile.meizu.com/group1/M00/06/70/Cgbj0FuZwuGADzVHAAG7wQGHkAM447.png@480x480.jpg"
            }
          ],
          name: "魅族蓝牙音频接收器",
          description: "独立音频芯片音质媲美有线",
          price: "89"
        },
        {
          activityName: "",
          activityColor: "",
          path: "/detail",
          id: 1,
          slideList: [
            {
              slideBg:
                "http://openfile.meizu.com/group1/M00/07/00/Cgbj0Vw8RZKAEKi6AAAJi9-u7vs526.png",
              goodsLoction:
                "http://openfile.meizu.com/group1/M00/03/C9/Cgbj0VrBl16Af2alAAWkq7hK2yI025.png@480x480.jpg"
            }
          ],
          name: "魅族 MC-5N 耳机升级线",
          description: "MMCX插头通用线 Live耳机升级线",
          price: "399"
        },
        {
          activityName: "",
          activityColor: "",
          path: "/detail",
          id: 1,
          slideList: [
            {
              slideBg:
                "http://openfile.meizu.com/group1/M00/07/00/Cgbj0Vw8RZKAELNZAAAJhXIC0vI862.png",
              goodsLoction:
                "http://openfile.meizu.com/group1/M00/02/EE/Cgbj0FpeqUqAYAbBAAJRQlEIMmc702.png@480x480.jpg"
            }
          ],
          name: "魅族 Flow Bass 三单元耳机",
          description: "延续经典，重赋新声",
          price: "399"
        },
        {
          activityName: "",
          activityColor: "",
          path: "/detail",
          id: 1,
          slideList: [
            {
              slideBg:
                "http://openfile.meizu.com/group1/M00/06/F0/Cgbj0Fw8RZKAUbJkAAAKABlplKE020.png",
              goodsLoction:
                "http://openfile.meizu.com/group1/M00/06/20/Cgbj0Ft-WkOAAhCKAAFqcNe6c3M482.png@480x480.jpg"
            }
          ],
          name: "魅族 EP-31 耳机",
          description: "舒适均衡 精致优雅",
          price: "99"
        },
        {
          activityName: "",
          activityColor: "",
          path: "/detail",
          id: 1,
          slideList: [
            {
              slideBg:
                "http://openfile.meizu.com/group1/M00/06/F0/Cgbj0Fw8RZKAZoWmAAAJazF5kdU895.png",
              goodsLoction:
                "http://storeimg.meizu.com/product/1449643421-24522.png@480x480.jpg"
            }
          ],
          name: "魅族 EP21耳机",
          description: "悦耳 声形俱佳",
          price: "89"
        },
        {
          activityName: "",
          activityColor: "",
          path: "/detail",
          id: 1,
          slideList: [
            {
              slideBg:
                "http://openfile.meizu.com/group1/M00/06/F0/Cgbj0Fw8RZKAL6vAAAAJ0DvJx7U298.png",
              goodsLoction:
                "http://openfile.meizu.com/group1/M00/01/1D/Cix_s1ij7KeAdy0cAAbboUvsAC4250.png@480x480.jpg"
            },
            {
              slideBg:
                "http://openfile.meizu.com/group1/M00/06/F0/Cgbj0Fw8RZKAZoWmAAAJazF5kdU895.png",
              goodsLoction:
                "http://openfile.meizu.com/group1/M00/01/1D/Cix_s1ij7KSAMlqTAAdurCvtioI146.png@480x480.jpg"
            }
          ],
          name: "魅族蓝牙小音箱",
          description: "好音感 直达心灵",
          price: "89"
        },
      ]
    };
    return (
      <div className="acoustics-page">
        <div className="header" style={styles.header}>
          <Header color="#333" logColor="#00c3f5" />
        </div>
        <Banner src={voiceData.banner.src} />
        <ShowGoods goodList={voiceData.goodList} title = { voiceData.title }/>
        <Recommend />
        <Footer />
      </div>
    );
  }
}

const styles = {
  header: {
    background: "#fff",
    height: "72px"
  }
};
