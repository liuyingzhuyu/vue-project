

<template>

  <div class="outmai root-box">
     <div class="outmaiScroll">
     	    <outmai-header :position="position" :showPosition='showPosition'></outmai-header>
		 
				  <outmai-banner :position='position'></outmai-banner> 
				  <outmai-list :position='position' ></outmai-list>
		<!--    过渡-->
		  
     </div>
     
      <transition enter-active-class="animated fadeIn"  leave-active-class="animated fadeOut">
		   	   <outmai-position :showPosition='showPosition'  v-show='isShow'></outmai-position>
		   </transition>
   
   
   
  	 <nav-tap></nav-tap>
  </div>





</template>

<script>
	import {mapState,mapActions} from 'vuex'
	import NavTap from "./NavTap"
	import OutmaiHeader from "./OutmaiComponent/OutmaiHeader"
	import OutmaiPosition from "./OutmaiComponent/OutmaiPosition"
	import OutmaiBanner from "./OutmaiComponent/OutmaiBanner"
	import OutmaiList from './OutmaiComponent/OutmaiList'
export default {
  name: 'outmai',//基本无用
  data () {
    return {
       isShow:false
    }
  },
  
  computed:{
  	...mapState(['position'])//把state中的数据放在这个页面
  	
  },
   methods:{
  	...mapActions(['getPosition']),//把action中的方法放在这个页面
  	showPosition(){
  		this.isShow=!this.isShow
  	}
  },
  components:{//局部注册
  	OutmaiHeader,
  	OutmaiPosition,
	  OutmaiBanner,
	  OutmaiList 
  },
  mounted(){
  	
  	if(!this.position.latitude){
  		this.getPosition() //调用action中的方法
  	//	console.log(this.position)
  	}
  
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .outmai{
  	width: 100%;
  	height: 100%;
  	overflow: auto;
  	
  }
  
  .outmaiScroll{
	  width: 100%;
	  height: 2000px;
		position: absolute;
		left: 0;
		top: 0;
	  
		width: 100%;
	
  }
  
</style>
