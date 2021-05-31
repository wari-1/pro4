import axios from 'axios'
import errorCode from '@/const/errorCode'
const request = axios.create({
  timeout: 3000,
  headers: {'X-Custom-Header': 'foobar'}
})

// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  if (process.env.NODE_ENV === 'production') {
    config.baseURL = window.VUE_APP_API_PREFIX || (window.GLOBAL_IS_ORIGIN ? process.env.VUE_APP_API_PREFIX_ORIGIN : window.VUE_APP_API_PREFIX)
  } else {
    config.url = window.GLOBAL_IS_ORIGIN ? (process.env.VUE_APP_API_HOST_ORIGIN + window.VUE_APP_API_PREFIX_ORIGIN) : (process.env.VUE_APP_API_HOST + window.VUE_APP_API_PREFIX) + config.url
  }

  if (!config.url) {
    console.error('接口地址错误')
  }
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(res => {
  const status = Number(res.status) || 200
  const message = res.data.message || errorCode[status] || errorCode['default']
  // 对响应数据做点什么
  if (status === 401) {
    console.error(message)
    return
  } else if (status !== 200) {
    console.error(message)
    return Promise.reject(new Error(message))
  }
  return res
}, error => {
  console.log(error.message)
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default {
  request(config) {
    return request.request(config)
  },
  get(url, params, config = {}) {
   return request({
     method: 'get',
     url,
     params,
     ...config
   })  
  },
  post(url, data, config = {}) {
    return request({
      method: 'post',
      url,
      data,
      ...config
    })  
  },
  delete(url, data, config = {}) {
    return request({
      method: 'delete',
      url,
      data,
      ...config
    })  
  },
  put(url, data, config = {}) {
    return request({
      method: 'put',
      url,
      data,
      ...config
    })  
  },
  patch(url, data, config = {}) {
    return request({
      method: 'patch',
      url,
      data,
      ...config
    })  
  }
}