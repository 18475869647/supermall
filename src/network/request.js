import axios from 'axios'

export function request(config) {
  // 1、创建axios实例
  const instance  = axios.create({
    // baseURL:'http://47.115.139.117:8080',
    baseURL:'http://123.207.32.32:8000/api/h8',
    timeout:5000
  })
  // 2、axios拦截器 -- 对数据进行处理  是否符合需求（token）
  instance.interceptors.request.use(config => {
    // ...处理数据后再返回出去
    return config
  }, err => {
    console.log(err)
  })

  // 3、响应拦截  拿到服务器响应后的结果
  instance.interceptors.response.use(res => {
    // ...对拦截的数据进行处理后再返回出去
    return res.data
  }, err => {
    console.log(err)
  })
  return instance(config)   //返回的是一个promise
}
