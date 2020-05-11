<template>
  <div>
    <h3  class="info-title">商品信息</h3>
    <table class="goods-info" cellspacing="0">
      <tr v-for="(item,index) in goodsInfo" :key="index">
        <td>{{item.attr_name}}</td>
        <td class="info">{{item.attr_value}}</td>
      </tr>
    </table>
  </div>

</template>

<script>
  export default{
    props:{
      goodsInfo:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .info-title{
    text-align: center;
    margin: 1.25rem 0;
    padding-top: 1rem;
    border-top: 1px solid #565656;
  }
  .goods-info{
    width: 100%;
    text-align: left;
    font-size: 0.875rem;
    padding: 0 20px;
    margin-bottom: 20px;
  }
  .goods-info tr{
    height: 2.25rem;
  }
  .goods-info td{
    padding: 2px 0;
    border-bottom: 1px solid rgba(100,100,100,.5);
    line-height: 2.5;
  }
  .goods-info tr td:first-child{
    width: 40%;
  }
  .goods-info tr td:last-child{
    padding-left: 10px;
    width: 60%;
  }
  .info{
    color: var(--color-high-text);
  }
</style>
