<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  // 导入轮播图
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default{
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      banners:{
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        isLoad: false
      }
    },
    methods:{
      imgLoad(){
        if(!this.isLoad){
          this.$emit('swiperImgLoad')
          this.isLoad = true
          // console.log('--')
        }
      }
    }
  }
</script>

<style>
</style>
