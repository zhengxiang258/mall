import { ADD_COUNT,ADD_CART } from './mutations_type';
export default {
  addCart(context, payload) {
   return new Promise((resolve,reject) => {
     //1.查找carList数组中是否有相应的商品
     let oldProduct = context.state.carList.find(item => item.iid === payload.iid)
     //2.判断oldProduct 是否有值
     if (oldProduct) {
       context.commit(ADD_COUNT, oldProduct)
       resolve("商品数量+1")
     } else {
       payload.count = 1;
       context.commit(ADD_CART, payload)
       resolve("新添加了商品")
     }
   })
  }
}
