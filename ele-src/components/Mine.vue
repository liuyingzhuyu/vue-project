<template>

  <div class="mine root-box">
 
 
 <mt-button type="danger" @click="alert">danger</mt-button>
 <mt-button type="primary" @click="alert2">primary</mt-button>
 
 
  	<nav-tap></nav-tap>
  </div>





</template>

<script>
	import { Button } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';//引入加载动画
	
		import NavTap from "./NavTap"
		export default {
		  name: 'mine',
		  data () {
		    return {
		      
		    }
		  },
		  methods:{
		  	alert(){
		  		Toast({
					  message: '提示',
					  position: 'bottom',
					  duration: 5000
					});
		  	},
		  	alert2(){
		  		
		  		Indicator.open({
					  text: '加载中...',
					  spinnerType: 'fading-circle'
					});
					setTimeout(function(){
						Indicator.close();
					},2000)
				
		  	}
		  }
		}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
