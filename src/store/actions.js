export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 判断cartList中是否已有该商品
      let oldProduct = context.state.cartList.find(item => item.itemId === payload.itemId)

      // 如果没有则添加，如果有则数量+1
      if (oldProduct) {
        context.commit('addCounter', oldProduct)
        resolve('商品数量加一')
      } else {
        payload.count = 1
        context.commit('addToCart', payload)
        resolve('添加了新商品')
      }
    })
  }
}
