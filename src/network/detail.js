import {request} from './request.js'

export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid,
    }
  })
}

export function getRecommends(){
  return request({
    url:'/recommend',
  })
}

export class Goods{
  constructor(itemInfo,columns,services) {
      this.title = itemInfo.title
      this.desc = itemInfo.desc
      this.newPrice = itemInfo.price
      this.oldPrice = itemInfo.oldPrice
      this.discount = itemInfo.discountDesc
      this.desc = itemInfo.desc;
      this.columns = columns
      this.services = services
      this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop{
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParameter{
  constructor(info,rule) {
      //注：images可能没有值(某些商品没有值，某些没有值)
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
  }
}
