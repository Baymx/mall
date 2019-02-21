import qs from 'qs'
import axios from "axios"; 
import { Feedback } from "@icedesign/base";
import { API_SERVER  } from "./config"

const Toast = Feedback.toast;

//axios 数据请求统一配置拦截器
axios.interceptors.request.use(config => {
	var time = new Date().getTime()/1000;
    config.headers['Time'] = time;
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    return config;
},
err => {
    return Promise.reject(err);
});
// respone拦截器
axios.interceptors.response.use(
    response => {
        /**
         * code为非20000是抛错 可结合自己业务进行修改
         */
        const res = response.data;
        if(res.code && res.code == 200){
          return res;
        }else{
          Toast.error( res.msg ? res.msg : '接口参数异常');
        }
    },
    error => {
        console.log('err' + error) // for debug
        Toast.error("" + error);
        return Promise.reject(error)
    }
)


// 通用的get请求
export const get = (url,data) => {
  return axios.get( API_SERVER + url, qs.stringify(data))
};

// 通用的post请求
export const post = (url,data) => {
  return axios.post(API_SERVER + url, qs.stringify(data))
};