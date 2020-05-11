<template>
  <div>
    <navbar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="返回">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="index" :class="{active: index === currentIndex}" class="title-item"
          @click="titleClick(index)">
          <b>{{item}}</b>
        </div>
      </div>
    </navbar>
  </div>
</template>

<script>
  import navbar from 'components/common/navbar/navbar'

  export default {
    components: {
      navbar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      backClick() {
        this.$router.back()
      },
      titleClick(index) {
        this.currentIndex = index
        // console.log(index)
        this.$emit('titleClick', index)
      }
    },
  }
</script>

<style scoped>
  .title {
    display: flex;
    padding: 0 25px;
    font-size: 1.2rem;
  }

  .title-item {
    flex: 1;
  }

  .back img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 45%;
  }

  .active {
    color: var(--color-high-text);
  }
</style>
