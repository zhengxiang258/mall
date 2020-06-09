import {ADD_COUNT,ADD_CART}  from  './mutations_type'
export default {
    //mutations唯一的目的就是修改state中状态
    //mutations中的每个方法尽可能完成的事件比较单一一点
    [ADD_COUNT](state,payload){
      payload.count += 1

    },
    [ADD_CART](state,payload){
      payload.checked = false
      state.carList.push(payload)
    }
  }
