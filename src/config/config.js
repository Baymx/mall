/**
 * 环境选择  config.js
 */
var API_SRC = '';
switch (process.env.srcConfug) {
    case "pro" : //生产环境
        // API_SRC = 'http://120.132.102.178:8080';
        API_SRC = 'https://erp.pingchang666.com';
        break;
    case "pre" : //预发环境
        API_SRC = 'http://www-staging.pingchang666.com:8080';
        break;
    case "test" : //测试环境
        // API_SRC = 'http://www1.pingchang666.com:8098';
        API_SRC = 'http://www1.pingchang666.com:8097';""
        break;
    case "dev" : //开发环境
        API_SRC = 'http://www1.pingchang666.com:8098';
        break;
    default ://默认本地开发
        // API_SRC = 'http://172.16.0.195:8080';
        API_SRC = 'https://www.easy-mock.com/mock/5c6ce92683cf864c74e1f11d';
        break;
}

export const API_SERVER = API_SRC ;

