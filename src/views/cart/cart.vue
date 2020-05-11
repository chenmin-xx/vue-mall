<template>
  <div id="cart">
    <navbar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </navbar>
    <cart-list></cart-list>
    
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'

  import navbar from 'components/common/navbar/navbar'

  import cartBottomBar from './childComps/cartBottomBar.vue'
  import cartList from './childComps/cartList.vue'

  export default {
    components: {
      navbar,
      cartBottomBar,
      cartList
    },
    computed: {
      ...mapGetters([
        'cartLength'
      ])
    }
  }
</script>

<style scoped>
  #cart {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: #FFFfFF;
    font-size: 1.3rem;
  }
</style>
