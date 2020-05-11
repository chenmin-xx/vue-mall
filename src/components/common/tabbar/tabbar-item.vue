<template>

	<div class="tabbar-item" @click="itemClick">
		<div v-if="!isActive"> 
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon-active"></slot>
		</div>
		<div :style="activeStyle">
			<slot name="item-title"></slot>
		</div>
		<!-- 	<div class="tabbar-item">
					<img src="../../assets/img/tabbar/首页.svg" alt="首页">
					<div>首页</div>
				</div> -->
	</div>






</template>

<script>
	export default{
		props:{
			path: String,
			activeColor:{
				type: String,
				default: '#d4237a'
			}
		},
		data(){
			return {
				// isActive: false,
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle(){
				return this.isActive ? {color: this.activeColor} : {}
			}
		},
		methods:{
			itemClick(){
				// console.log('dd')
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style>
	.tabbar-item {
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
	}

	.tabbar-item img {
		width: 24px;
		height: 24px;
		vertical-align: middle;
		margin-top: 3px;
	}
/* 	.active{
		color: #d4237a;
	} */
</style>
