<template>
  <div class="car-list">
    <scroll class="content" ref="scroll">
			<van-empty description="购物车空空如也" v-if="cartList.length === 0"/>
      <cart-list-item :item="item" v-for="item in cartList"></cart-list-item>
    </scroll>

  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'

  import scroll from 'components/common/scroll/scroll'

  import cartListItem from './cartListItem.vue'

  export default {

    computed: {
      ...mapGetters(['cartList'])
    },
    components: {
      scroll,
      cartListItem
    },
    activated(){
      this.$refs.scroll.refresh()
    },
  }
</script>

<style scoped>
  .car-list {
    height: calc(100% - 44px - 49px - 49px);
  }

  .content {
    height: 100%;
    overflow: hidden;
  }
</style>
