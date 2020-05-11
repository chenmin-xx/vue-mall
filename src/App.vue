<template>
	<div id="app">
    <keep-alive exclude="detail">
      <router-view />
    </keep-alive>
		<main-tab-bar class="tab-bar"></main-tab-bar>
	</div>
</template>

<script>

	import mainTabBar from 'components/content/mainTabBar/mainTabBar.vue'

	export default {
		name: 'App',
		components: {
		mainTabBar
		},
	}
</script>

<style>
	@import "assets/css/base.css";
 .tab-bar{
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
  }
</style>
