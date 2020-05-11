<template>
  <div class="tab-control">
    <div
    v-for="(item,index) in titles"
    :key="item" class="tab-control-item"
    :class="{active:isActive === index}"
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      titles: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        isActive: 0
      }
    },
    methods:{
      itemClick(index){
        this.isActive = index
        this.$emit('tabControlClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 1.125rem;
    height: 3rem;
    line-height: 2.5rem;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 0.3125rem;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 0.125rem solid var(--color-tint);
  }
</style>
