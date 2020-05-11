import backTop from 'components/content/backTop/backTop'

export const backTopMixin = {
  components: {
    backTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods:{
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
  }
  
}
