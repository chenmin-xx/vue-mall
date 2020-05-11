import {request} from './request.js'

export function getDetail(itemId){
  return request({
    url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail',
    params:{
      goods_id:itemId
    }
  })
}
