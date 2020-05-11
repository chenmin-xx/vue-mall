<template>
  <div id="home">
    <!-- 头部 -->
    <navbar class="home-nav">
      <h3 slot="center">蘑菇街</h3>
    </navbar>

    <!-- 解决动画问题的tabcontrol -->
    <tabcontrol ref="tabControl1"
    :titles="['推荐','新品','爆款']"
    v-show="isTabFiexd"
    class="tab-control"
    @tabControlClick="tabControlClick">
    </tabcontrol>

    <!-- 滚动区域 -->
    <scroll class="scroll" ref="scroll" :protoType="3" @scroll="homeScroll" :pull-up-load="true" @pullUpLoad="loadMore">
      <!-- 轮播 -->
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>

      <!-- 推荐 -->
      <recommend-view :recommends="recommends"></recommend-view>

      <!-- 本周流行 -->
      <feature-view></feature-view>

      <!--  -->
      <tabcontrol ref="tabControl" :titles="['推荐','新品','爆款']" @tabControlClick="tabControlClick"></tabcontrol>

      <good-list :goods="goods"></good-list>
      <ol>
        <li v-for="(n,index) in 10">商品{{index}}</li>
      </ol>
    </scroll>

    <!-- 返回顶部 -->
    <back-top @click.native="backTopClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
  import navbar from 'components/common/navbar/navbar'
  import tabcontrol from 'components/common/tabcontrol/tabcontrol.vue'
  import goodList from 'components/content/goods/goodsList'
  import scroll from 'components/common/scroll/scroll'
  import backTop from 'components/content/backTop/backTop'
  import {debounce} from 'common/utils.js'

  import homeSwiper from './childComps/homeSwiper.vue'
  import recommendView from './childComps/reommendView.vue'
  import featureView from './childComps/featureView.vue'

  import {
    getHome,
    getGoods
  } from 'network/home'

  export default {
    components: {
      navbar,
      homeSwiper,
      recommendView,
      featureView,
      tabcontrol,
      goodList,
      scroll,
      backTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: [],
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFiexd: false,
        saveY: 0
      }
    },
    created() {
      getHome().then(res => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
        // console.log(res)
      })
      getGoods().then(res => {
        this.goods = res.data.message.goods
        // console.log(res.data.message.goods)
      })
    },
    mounted(){
      // 监听图片加载完成
      const refresh = debounce(this.$refs.scroll.refresh,50)

      this.$bus.$on('itemImageLoad',()=>{
        // 图片加载完成之后重新计算可滚动范围
        // this.$refs.scroll.refresh()

        // 这里调用外面的refresh函数,只会调用一次,而不是每个图片加载完成都会调用
        refresh()
      })


    },
    methods: {
      backTopClick() {
        // console.log('11')
        this.$refs.scroll.scrollTo(0, 0)
      },
      homeScroll(position) {
        // console.log(position)
        // 判断backtop是否显示
        this.isShowBackTop = -position.y > 668

        // 判断tabControl是否吸顶效果
        this.isTabFiexd = -position.y > this.tabOffsetTop
      },
      loadMore() {
        // console.log('dao di le')
        getGoods().then(res => {
          this.goods.push(...res.data.message.goods)

          //图片加载完成之后重新计算可滚动范围
          // this.$refs.scroll.scroll.refresh()
        })
        // 可多次下拉
        this.$refs.scroll.finishPullUp()

      },

      // 监听轮播图加载完成
      swiperImgLoad(){
        // console.log('~~~')
        // console.log(this.$refs.tabControl.$el.offsetTop)
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      },
      tabControlClick(index){
        this.$refs.tabControl.isActive = index
        this.$refs.tabControl1.isActive = index
      }
    },
    activated(){
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.saveY = this.$refs.scroll.scroll.y
    }
  }
</script>

<style scoped>
  #home {
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /* 下面样式为浏览器原生滚动样式,这里使用第三方滚动插件后不再需要 */
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999; */
  }

  .home-nav h3 {
    font-size: 18px;
  }

  .scroll {
    /* height: 50vh; */
    /* background-color: #F012BE; */
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
  .tab-control{
    position: relative;
    z-index: 99;
    background-color: #fff;
  }
</style>
