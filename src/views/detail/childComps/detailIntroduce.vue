<template>
  <div>
    <div v-html="introduce"></div>
  </div>
</template>

<script>
  export default {
    props: {
      introduce: {
        type: String,
        default: ''
      }
    },
    updated() {
      setTimeout(() => {
        this.$emit('introduceLoad')
      },500)
    }
  }
</script>

<style>
</style>
