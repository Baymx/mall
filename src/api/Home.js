import {
  post,
  get
} from "../config/fetch.js";

/**
 * getHomeData  获取主页信息
 * @param  { options }   接口传递数据
 * @param  { callback }   回调函数
 * @return  { Promise }   返回一个Promise
 */
export const getHomeData = (options, callback) => {
  return new Promise((resolve, reject) => {
    get('/home').then(function (res) {
      resolve(res);
    }).catch(function (error) {
      reject(error)
    })
  });
}

/**
 * getHomeData  获取主页信息
 * @param  { options }   接口传递数据
 * @param  { callback }   回调函数
 * @return  { Promise }   返回一个Promise
 */
export const getRecommendData = (options, callback) => {
  return new Promise((resolve, reject) => {
    get('/recommend').then(function (res) {
      resolve(res);
    }).catch(function (error) {
      reject(error)
    })
  });
}