<template>
  <div class="goods-item" @click="itemCilck">
    <img v-lazy="goodsItem.goods_big_logo" :alt="goodsItem.goods_name" @load="imgageLoad">
    <div class="goods-info">
      <p>{{goodsItem.goods_name}}</p>
      <span class="price">￥{{goodsItem.goods_price}}</span>
      <span class="collect">{{goodsItem.goods_id}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      goodsItem: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods:{
      imgageLoad(){
        this.$bus.$emit('itemImageLoad')
      },
      itemCilck(){
        // console.log('aaaS')
        // console.log(this.goodsItem.goods_id)
        this.$router.push('/detail/'+ this.goodsItem.goods_id)
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 0.75rem;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
