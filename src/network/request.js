import axios from 'axios'

export function request(config){
  // 创建axios实例
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000/home',
    baseURL: '',
    timeout: 5000
  })

  // axios拦截器
  // 请求时拦截
  instance.interceptors.request.use(config => {
    // 请求成功
    // console.log(config)
    return config
  },err =>{
    // 请求失败
    console.log(err)
  })

  // 响应时拦截
  instance.interceptors.response.use(res => {
    // 响应成功
    // console.log(res)
    return res
  },err => {
    // 响应失败
    console.log(err)
  })

  // 发送请求
  return instance(config)
}
