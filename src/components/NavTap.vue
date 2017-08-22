<template>

 <footer class="nav-tap">
     <router-link to="/outmai">
     	  <span class="iconfont  icon-changyonglogo40"></span>
     	  外卖
     </router-link>
     <router-link to="/finder">
     	  <span  class="iconfont icon-comiisfaxian"></span>
     	  发现
     </router-link>
     <router-link to="/order">
     	  <span class="iconfont  icon-icon"></span>
     	  订单
     </router-link>
      <router-link to="/mine">
     	  <span  class="iconfont icon-wode"></span>
     	  我的
     </router-link>
     
     
 </footer>




</template>

<script>
	import Vue from "vue"
	
	 const NavTap=Vue.extend({//创建组件
	 	  name:"navtap"
	 })

	Vue.component('nav-tap',NavTap) //全局注册
	export default  NavTap



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

.nav-tap{
	background: #fff;
	position: fixed;
	left: 0;
	bottom:0;
	width: 100%;
	height: 1.333333rem;
  box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
  display: flex;
  a{
  	flex-grow: 1;
  	display: flex;
  	flex-direction: column;
  	justify-content: space-around;
  	align-items: center;
  	color: #777;
  	font-size: 0.2rem;
  	.iconfont{
  		font-size: 0.6rem;  
  		
  	}
  	&.router-link-active{
  		color: #0089dc;
  	}
  
  }
}





</style>
