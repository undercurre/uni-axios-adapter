import { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';

const getResponse = (
  res: UniApp.RequestSuccessCallbackResult | UniApp.GeneralCallbackResult,
  config: InternalAxiosRequestConfig
): AxiosResponse => {
  let statusCode = 401;
  let header = null;
  let data = null;
  if ('statusCode' in res) {
    statusCode = res.statusCode;
    header = res.header;
    data = res.data;
  }
  const { errMsg } = res;
  const response: AxiosResponse = {
    ...res,
    data: data,
    status: statusCode,
    statusText: errMsg ?? 'No Msg',
    headers: header,
    config,
    request: null
  };

  return response;
};

const uniAdapter = (config: InternalAxiosRequestConfig) => {
  if (!uni) {
    throw new Error('please use this in uni-app project!');
  }
  return new Promise((resolve, reject) => {
    const { baseURL, url, headers, data, params, method } = config;

    const uniConfig: UniApp.RequestOptions = {
      url: (baseURL || '') + url,
      data: data, // 可选
      header: headers, // 可选
      method: ['OPTIONS', 'GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'TRACE', 'CONNECT'].includes(
        method === undefined ? 'GET' : method
      )
        ? (method as 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT')
        : 'GET', // 可选
      timeout: config.timeout // 可选// 可选
    };

    if (data || params) {
      try {
        uniConfig.data = JSON.parse(data || params);
      } catch (e) {
        uniConfig.data = data || params;
      }
    }
    uni.request({
      ...uniConfig,
      success(res) {
        const response = getResponse(res, config);
        resolve(response);
      },
      fail(res) {
        const response = getResponse(res, config);
        reject(response);
      }
    });
  });
};

export default uniAdapter;
