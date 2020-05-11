<template>
  <div>
    <h1>我的</h1>

    <scroll class="scroll" :protoType="3" :pull-up-load="true" @pullUpLoad="loadmore">
      <ul>
      	<li v-for="n in 100"> 我的{{n}}</li>
      </ul>
    </scroll>
  </div>

</template>

<script>
  import scroll from 'components/common/scroll/scroll'
  export default{
    components:{
      scroll
    },
    methods:{
      loadmore(){
        console.log('加载更多')
      }
    }
  }
</script>

<style scoped>
  .scroll{
    height: 50vh;
    background-color: #D35400;
    overflow: hidden;
    color: #FFF0FF;
  }
</style>
