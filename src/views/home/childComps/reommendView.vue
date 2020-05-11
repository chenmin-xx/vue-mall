<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      recommends:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    padding: 0.625rem 0 1.25rem;
    border-bottom: 8px solid #eee;
    font-size: 0.75rem;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 5rem;
    margin-bottom: 0.625rem;
  }
</style>
