<template>
  <div class="item">
    <!-- :price="item.price" -->
    <!-- <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"> -->
    <van-swipe-cell class="swipe">
      <!-- <van-checkbox class="checkbox" v-model="item.checked" @change="change" checked-color="var(--color-tint)" /> -->
      <van-card class="card" :num="item.count" :price="item.price + '.00'" :desc="item.desc" :title="item.title" :thumb="item.img">
        <template #tag>
          <van-checkbox v-model="item.checked" checked-color="var(--color-tint)" @change="change"></van-checkbox>
        </template>
        <template #footer>
          <van-stepper v-model="item.count" @plus="plus" @minus="minus" />
        </template>
      </van-card>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" @click="delItem" />
      </template>
    </van-swipe-cell>
  </div>

</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      change() {
        this.$store.commit('checked')
      },
      plus() {
        // this.$store.commit('plus')
        // console.log(11)
      },
      minus() {
        // this.$store.commit('minus')
      },
      delItem() {
        // console.log(this.item.itemId)
        const goodsId = this.item.itemId
        this.$store.commit('delItem', goodsId)
      }
    }
  }
</script>

<style scoped>
  .item {
    margin: 5px 0;
  }

  .delete-button {
    height: 100%;
  }
  .checkbox{
    display: inline;
  }
</style>
