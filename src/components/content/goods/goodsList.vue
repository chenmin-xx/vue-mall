<template>
  <div class="goods">
  <good-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item"/>
  </div>
</template>

<script>
  import goodListItem from './goodsListItem.vue'

  export default{
    components:{
      goodListItem
    },
    props:{
      goods:{
        tpye: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0.125rem;
  }

</style>
