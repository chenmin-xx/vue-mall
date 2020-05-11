export default{
  // 商品数量+1
  addCounter(state, payload) {
    payload.count++
  },
  // 添加到购物车
  addToCart(state, payload) {
    payload.checked = false
    state.cartList.push(payload)
  },

  // 改变选中状态
  checked(payload){
    payload.checked = !payload.checked
  },

  // // 数量增加
  // plus(payload){
  //   payload.count++
  // },
  // // 数量减少
  // minus(payload){
  //   payload.count--
  // }

	// 删除购物车商品
	delItem(state ,goodsId){
		// console.log(state,goodsId)
    let index = state.cartList.indexOf(state.cartList.find(item => item.itemId === goodsId))
    // console.log(state.cartList.indexOf(state.cartList.find(item => item.itemId === goodsId)))
    state.cartList.splice(index,1)
	}
}
