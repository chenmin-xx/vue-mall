<template>
	<tabbar>
		<tabbar-item path="/home">
			<img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="首页">
			<img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="首页1">
			<div slot="item-title">首页</div>
		</tabbar-item>
		<tabbar-item path="/category">
			<img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="分类">
			<img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="分类1">
			<div slot="item-title">分类</div>
		</tabbar-item>
		<tabbar-item path="/cart">
			<img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="购物车">
			<img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="购物车1">
			<div slot="item-title">购物车</div>
		</tabbar-item>
		<tabbar-item path="/profile">
			<img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="我的">
			<img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="我的1">
			<div slot="item-title">我的</div>
		</tabbar-item>
	</tabbar>
</template>

<script>
	import tabbar from 'components/common/tabbar/tabbar.vue'
	import tabbarItem from 'components/common/tabbar/tabbar-item.vue'

	export default{
    name:'mainTabBar',
		components:{
			tabbar,
			tabbarItem
		}
	}
</script>

<style>
</style>
