<template>
  <div class="content" ref="scroll">
    <div>
      <slot></slot>
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
    props: {
      protoType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.scroll, {
        pullUpLoad: this.pullUpLoad,
        click: true,
        probeTyoe: this.protoType
      })

      // 监听滚动
      if(this.protoType == 2 || this.protoType == 3){
        this.scroll.on('scroll',(position)=>{
          // console.log(position)
          this.$emit('scroll',position)
        })
      }

      // 上拉加载更多
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          // console.log('到底了')
          this.$emit('pullUpLoad')
        })
      }

    },
    methods: {
      scrollTo(x, y, time = 500) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      refresh() {
        // console.log('----')
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style>
</style>
