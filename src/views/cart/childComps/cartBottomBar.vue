<template>
  <div class="bar">
    <van-submit-bar :price="totalPrice" :button-text="'提交订单(' + checkLength + ')'" @submit="onSubmit" class="_bar">
      <van-checkbox v-model="checkAll" :disabled="!isDisabled" checked-color="var(--color-tint)">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
  import { Toast } from 'vant'
  export default{

    methods:{
      onSubmit(){
        // Toast('提示内容');
        if(!this.isDisabled){
          Toast('购物车为空')
        }else if(this.checkLength === 0){
          Toast('请选择商品')
        }else{
					this.$router.push('/profile')
				}

      }
    },
    computed:{
      totalPrice(){
        return this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + (item.price * item.count *100)
        },0)
      },
      checkLength(){
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      isDisabled(){
        return this.$store.state.cartList.length
      },
      checkAll:{
        get(){
          // return !(this.$store.state.cartList.filter(item => !item.checked).length)
          if(this.$store.state.cartList.length === 0) return false
          return !this.$store.state.cartList.find(item => !item.checked)
        },
        set(){
          const checked = !this.checkAll
          this.$store.state.cartList.forEach(item => item.checked = checked)
        }
      }
    }
  }
</script>

<style scoped>
  ._bar{
    position: fixed;
    left: 0;
    bottom: 49px;
    width: 100%;
  }
  .bar{
    height: 49px;
    width: 100%;
    background-color: darkcyan;
    }
</style>
