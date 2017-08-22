<template>
  
  <div class="finder root-box">
        <!--<transition enter-active-class="animated fadeIn"  leave-active-class="animated fadeOut">
		   	   <login :showPosition='showPosition'  v-show='isShow'></login>
		   </transition>
  -->
      <header class="tou">我的</header>
	    <section>
	    	<div class="profile-3g0uv">
	    		<span class="touxiang">
	    			
	    		</span>
	    	<div class="profile-xfCcC">
	    		<router-link to="/login" class="profile-1_mtk">登录/注册</router-link>
	    		<p class="profile-1UP72">
	    			
	    			<span>登录后享受更多特权</span>
	    				
	    			<!---->
	    		</p>
	    	</div>
	    	  <span class="profile-2XuMq">
	    				
	    				
	    		</span>
	    	</div>
	    </section>
	    <div class="index-1G7HV_0">
	    	<a href="/profile/benefit/" class="index-1ryAh_0">
	    		<p>
	    			
	    		</p>
	    		<p class="index-3S6cZ_0">优惠</p>
	    	</a>
	    	<a href="/profile/points/" class="index-1ryAh_0">
	    		<p>
	    			
	    		</p>
	    		<p class="index-3S6cZ_0">积分</p>
	    	</a>
	    </div>
	    <div class="lan"></div>
	    <section>
	    	<a class="index-2MEE" href="">我的订单</a>
	    	<a class="index-2MEE" href="">积分商城</a>
	    	<a class="index-2MEE" href="">饿了么会员卡</a>
	    </section>
	    <div class="lan"></div>
	    <section>
	    	<a class="index-2MEE" href="">服务中心</a>
	    	<a class="index-2MEE" href="">下载饿了么APP</a>
	    </section>
    <nav-tap></nav-tap>
  </div>
  
</template>

<script>
	import NavTap from "./NavTap"
//	import Login from "./Login"
      
export default {
  name: 'mine',
  data () {
    return {
      isShow:false
    }
  },
  methods:{
      show(){
         isShow=!isShow
      }
  },
  components:{
    // Login
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
 .tou{width:100%;height: 50px;background: #2395ff;font-weight: bold;font-size: 20px;line-height: 50px;
 color: #fff;display: flex;justify-content: center;}
 .profile-3g0uv{
 	width: 100%;height: 150px;background: #2395FF;margin-top: 0.5px;
 }
 .touxiang{
 	width: 80px;height: 80px;border-radius: 50%;background: #fff;display: block;float: left;
 	margin-left: 30px;margin-top:40px;
 }
 .profile-1_mtk{font-size: 26px;color: #FFFFFF;font-weight: bold;margin-left: 10px;float: left;
 margin-top: 50px;}
 .profile-1UP72{float:left;color: #FFFFFF;font-size: 16px;font-weight: 200;
 margin-top: 90px;margin-left: -100px;}
 .index-1G7HV_0{width:100%;height: 100px;}
 .index-1ryAh_0{width: 50%;height: 100%;float: left;color: darkgrey;}
 .index-1ryAh_0 p{text-align: center;line-height: 100px;}
 .lan{width: 100%;height: 10px;background: #ddd;}
 .index-2MEE{width: 100%;height: 40px;display: block;padding-left: 40px;line-height: 40px;border-bottom: 1px solid #ddd;}
</style>
