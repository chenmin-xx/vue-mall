<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" :proto-type="3" @scroll="detailScroll" :pull-up-load="true">
    <!-- <scroll class="content" ref="scroll" :protoType="3" @scroll="detailScroll"> -->
      <detail-swiper :itemImg="itemImg"></detail-swiper>
      <detail-goods-info ref="goodsInfo" :goodsInfo="goodsInfo"></detail-goods-info>
      <!-- <div v-html="introduce" @load="introduceLoad"></div> -->
      <detail-introduce ref="introduce" :introduce="introduce" @introduceLoad="introduceLoad"></detail-introduce>

      <detail-recommend ref="recommend"></detail-recommend>

    </scroll>

    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>

    <!-- 返回顶部 -->
    <back-top @click.native="backTopClick" v-show="isShowBackTop" />

  </div>
</template>

<script>
  import { Toast } from 'vant'

  import scroll from 'components/common/scroll/scroll'

  import detailNavBar from './childComps/detailNavBar.vue'
  import detailSwiper from './childComps/detailSwiper.vue'
  import detailIntroduce from './childComps/detailIntroduce.vue'
  import detailGoodsInfo from './childComps/detailGoodsInfo.vue'
  import detailRecommend from './childComps/detailRecommend.vue'
  import detailBottomBar from './childComps/detailBottomBar.vue'


  import {
    getDetail
  } from 'network/detail.js'

  import {backTopMixin} from 'common/mixin.js'

  export default {
    name: 'detail',
    mixins:[backTopMixin],
    components: {
      detailNavBar,
      detailSwiper,
      detailIntroduce,
      detailGoodsInfo,
      detailRecommend,
      detailBottomBar,
      scroll
    },
    data() {
      return {
        itemId: null,
        itemTitle:'',
        itemPrice:0,
        itemImg: [],
        introduce: null,
        goodsInfo: [],
        themeTopYs: [],
        currentIndex: 0
      }
    },
    created() {
      // 保存传入的id
      this.itemId = this.$route.params.itemId

      // 请求商品数据
      getDetail(this.itemId).then(res => {
        // console.log(res.data.message)
        this.itemImg = res.data.message.pics
        this.itemPrice = res.data.message.goods_price
        this.introduce = res.data.message.goods_introduce
        this.goodsInfo = res.data.message.attrs
        this.itemTitle = res.data.message.goods_name

        // console.log(this.itemImg[0].pics_mid)
        // this.$nextTick( () => {
        //   this.themeTopYs = []

        //   this.themeTopYs.push(0)
        //   this.themeTopYs.push(this.$refs.goodsInfo.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.introduce.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.recommend.offsetTop)
        //   console.log(this.themeTopYs)
        // } )
      })
    },
    updated() {
      // this.themeTopYs = []

      // this.themeTopYs.push(0)
      // this.themeTopYs.push(this.$refs.goodsInfo.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.introduce.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      // console.log(this.themeTopYs)
    },
    methods: {
      introduceLoad() {
        // console.log('introduce加载完了')
        this.$refs.scroll.refresh()

        this.themeTopYs = []

        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.goodsInfo.$el.offsetTop)
        this.themeTopYs.push(this.$refs.introduce.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        // console.log(this.themeTopYs)
      },
      titleClick(index) {
        // console.log(index)
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index] + 44)
      },
      detailScroll(position){
        //判断是否显示回到顶部按钮
        this.isShowBackTop = -position.y > 668

        // 获取y值
        const positionY = -position.y+44
        // postitionY的值与主题中的y值对比
        const length = this.themeTopYs.length
        for(let i=0; i<length; i++){
          if(this.currentIndex !== i && (i < length-1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i === length-1 && positionY >= this.themeTopYs[i])){
            // console.log(i)
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      },
      addCart(){
        // console.log('aaa')
        // 获取商品信息
        const product = {}
        // product.img = this.itemImg[0].pics_mid
        product.img = this.itemImg[0] ? this.itemImg[0].pics_mid : 'http://img5.imgtn.bdimg.com/it/u=353651031,4273095768&fm=26&gp=0.jpg'
        product.title = this.itemTitle.slice(0,5)
        product.desc = this.itemTitle
        product.price = this.itemPrice
        product.itemId = this.itemId
        // console.log(product)
        // 将数据添加到购物车
        this.$store.dispatch('addCart',product).then(res => {
          // console.log(res)

          Toast.success(res)
        })

      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 99;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    /* z-index: ; */
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }

  ul li {
    text-align: center;
  }
</style>
