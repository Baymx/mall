import {
  post,
  get
} from "../config/fetch.js";

/**
 * getAcousticsData 获取声乐设备的信息
 * @param  { options }   接口传递数据
 * @param  { callback }   回调函数
 * @return  { Promise }   返回一个Promise
 */
export const getAcousticsData = (options, callback) => {
  return new Promise((resolve, reject) => {
    get('/acoustics').then(function (res) {
      resolve(res);
    }).catch(function (error) {
      reject(error)
    })
  });
}