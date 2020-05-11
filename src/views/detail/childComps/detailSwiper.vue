<template>
  <swiper>
    <swiper-item v-for="item in itemImg">
      <img :src="item.pics_big" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {
    Swiper,
    SwiperItem
  } from 'components/common/swiper'
  export default {
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      itemImg: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style>
</style>
