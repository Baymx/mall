import {
  post,
  get
} from "../config/fetch.js";

/**
 * getPhoneData 获取手机设备的信息
 * @param  { options }   接口传递数据
 * @param  { callback }   回调函数
 * @return  { Promise }   返回一个Promise
 */
export const getPhoneData = (options, callback) => {
  return new Promise((resolve, reject) => {
    get('/phone').then(function (res) {
      resolve(res);
    }).catch(function (error) {
      reject(error)
    })
  });
}