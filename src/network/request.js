import axios from 'axios'

export function request (config){
  //1.创建axios实例 
  const instance = axios.create({
    baseURL:"http://152.136.185.210:8000/api/n3/",
    timeout:5000
  })

  //2请求拦截  interceptors
  instance.interceptors.request.use(config => {
    // console.log(config)
    return config
  },err => {
    console.log(err)
  })

  //响应拦截
  instance.interceptors.response.use(config => {
    return config
  },err => {
    console.log(err)
  })

  //发送网络请求
  return  instance(config)
}
