<template>
  <div class="bottom-bar">
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addToCart" />
      <van-goods-action-button type="danger" text="立即购买" @click="addToCart" />
    </van-goods-action>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';

  export default {
    methods: {
      onClickIcon() {
        // Toast('点击图标');
        this.$router.push('/cart')
      },
     addToCart(){
       this.$emit('addCart')
       // Toast('点击图标');
     }
    },
  }
</script>

<style scoped>
.bottom-bar{
  position: relative;
}
</style>
