import {request} from './request.js'

// 请求首页数据
export function getHome(){
  return request({
    url: 'http://123.207.32.32:8000/home/multidata'
  })
}

// 请求首页商品列表
export function getGoods(){
  return request({
    url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/search'
  })
}
