<template>
  <div>
    <h1>分类</h1>
    <div class="wrapper" ref="aa">
      <ul class="content">
        <li v-for="(n,index) in 100">分类{{index}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        scroll: null
      }
    },
    // mounted() {
    //   this.scroll = new BScroll(this.$refs.aa, {
    //     // 默认值为0，1非实时监听，2实时监听，3实时监听包括惯性滑动
    //     probeTyoe: 3,
    //     pullUpLoad: true
    //   })
    //   // console.log('aaa')
    //   // 监听滚动位置
    //   this.scroll.on('scroll', (position) => {
    //     console.log(position);
    //   })

    //   this.scroll.on('pullingUp', () => {
    //     console.log('到底了')
    //   })
    // }
    mounted(){
      this.scroll = new BScroll(this.$refs.aa)
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 50vh;
    background-color: #FF5555;
    overflow: hidden;
  }


  /* 原生滚动 */
  /* ul{
    height: 300px;
    background-color: #FF55FF;
    overflow-y: scroll;
  } */
</style>
