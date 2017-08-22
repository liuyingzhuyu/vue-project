<template>




  <div class="finder root-box" id="finder">
  	  <transition enter-active-class="animated fadeIn"  leave-active-class="animated fadeOut">
		   	   	<finder-food :position='position'  v-if="showFood"></finder-food>
		   </transition>
		   
		   
  	  <transition enter-active-class="animated fadeIn"  leave-active-class="animated fadeOut">
		   	   	<finder-limit :position='position'  v-if="showLimit"></finder-limit>
		   </transition>
		   
		   
  	  <div class="head"><span class="iconfont icon-qianjin-copy  "></span>发现 </div>
  	  
	    	<section id="wrapper">
	
	        <div id="scroller">

		       <div class="jifen">
		       	   <a class="left block">
		       	   	
		       	   	  <p class="title">{{mall?mall[0].title:''}}</p>
		       	   	  <p class="tips" >{{mall?mall[0].subtitle:''}}</p>
		       	   	  <img loading="" class="icon" src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/">
		       	   </a>
		       	   <!--<div class="fenjiexian">
		       	   	
		       	   </div>-->
		       	   <a class="right block">
		       	   	   <div class="top">
		       	   	   	 <p class="title" style="color: rgb(245, 120, 93);">{{mall?mall[1].title:''}}</p>
		       	   	   	 <p class="tips">{{mall?mall[1].subtitle:''}}</p>
		       	   	   	 <img loading="" class="icon" src="https://fuss10.elemecdn.com/e/ff/3b9c4a4dfda1df548dc9274f6a7c1jpeg.jpeg?imageMogr/format/webp/">
		       	   	   </div>
		       	   	   <div class="bottom">
		       	   	   	  <p class="title" style="color: rgb(27, 169, 225);">{{mall?mall[2].title:''}}</p>
		       	   	   	  <p class="tips">{{mall?mall[2].subtitle:''}}</p>
		       	   	   	  <img loading="" class="icon" src="https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/">
		       	   	   </div>
		       	   </a>
		       </div>
		       <div class="hongbao">
		       	<img src="https://fuss10.elemecdn.com/b/6d/656006edcd86033a1b32b23ddea37jpeg.jpeg?imageMogr/format/webp/">
		       </div>
		      <div class="foodPush">
		      	<div class="title">
		      		 <h4><span class="left"></span> <b>美食热推</b><span class="right"></span></h4>
		      		<p>你的口味，我都懂得</p>
		      	</div>
		      	<div class="food">
		      		<div class="one">
		      			 <img src="https://fuss10.elemecdn.com/8/0f/72df7a4186c30b5c3cf53064f42a8jpeg.jpeg?imageMogr/format/webp/"/>
		      			 <p class="tit">{{foods?foods[0].foods[0].name:''}}</p>
		      			 <p class="pri"> {{foods?foods[0].foods[0].price:''}}</p>
		      		</div>
		      		<div class="one">
		      			 <img src="https://fuss10.elemecdn.com/a/6a/5b42eff31b2e03aa7c99725df4777jpeg.jpeg?imageMogr/format/webp/"/>
		      			<p class="tit">{{foods?foods[1].foods[0].name:''}}</p>
		      			 <p class="pri"> {{foods?foods[1].foods[0].price:''}}</p>
		      		</div>
		      		<div class="one">
		      			 <img src="https://fuss10.elemecdn.com/c/d4/35738ac1c1451d71b61adb7769618jpeg.jpeg?imageMogr/format/webp/"/>
		      			 <p class="tit">{{foods?foods[2].foods[0].name:''}}</p>
		      			 <p class="pri"> {{foods?foods[2].foods[0].price:''}}</p>
		      		</div>
		      		
		      		
		      		
		      	</div>
		      	<div class="more" :position='position'  @click="showMoreFood" :showMoreFood='showMoreFood'>
		      		查看更多
		      	</div>
		      	
		      
		      	
		      	
		      </div>
		       <div class="foodPush xianshi">
		      	<div class="title">
		      		 <h4><span class="left"></span> <b>限时好礼</b><span class="right"></span></h4>
		      		<p>小积分换豪礼</p>
		      	</div>
		      	<div class="food">
		      		<div class="one">
		      			<span>{{limit?limit[0].corner_marker:''}}</span>
		      			 <img src="https://fuss10.elemecdn.com/0/53/47a80976e90c99f40b745cde5246fjpeg.jpeg?imageMogr/format/webp/"/>
		      			 <p class="tit">{{limit?limit[0].title:''}}</p>
		      			 <p class="pri">{{limit?limit[0].points_required:''}}</p>
		      		</div>
		      		<div class="one">
		      			 <span>{{limit?limit[1].corner_marker:''}}</span>
		      			 <img src="https://fuss10.elemecdn.com/a/a2/206f0d7fa5af4b349b641fa35e730jpeg.jpeg?imageMogr/format/webp/"/>
		      			 <p class="tit">{{limit?limit[1].title:''}}</p>
		      			 <p class="pri">{{limit?limit[1].points_required:''}}</p>
		      		</div>
		      		<div class="one">
		      			 <span>{{limit?limit[2].corner_marker:''}}</span>
		      			 <img src="https://fuss10.elemecdn.com/2/cb/0409d2097e04488659bf50a5e49d7jpeg.jpeg?imageMogr/format/webp/"/>
		      			 <p class="tit">{{limit?limit[2].title:''}}</p>
		      			 <p class="pri">{{limit?limit[2].points_required:''}}</p>
		      		</div>
		      		
		      		
		      		
		      	</div>
		      	<div class="more" :position='position'  @click="showMoreLimit" :showMoreLimit='showMoreLimit'>
		      		查看更多
		      	</div>
		      
		      </div>
		    
		    </div>
    </section>
  
  
  	<nav-tap></nav-tap>
  	   
  </div>

 



</template>

<script>
   	import axios from "axios"
  	import {mapState,mapActions} from 'vuex'
		import NavTap from "./NavTap"
		import FinderFood from './FinderComponent/FinderFood'  
		import FinderLimit from './FinderComponent/FinderLimit'  
		import { Indicator } from 'mint-ui';//引入加载动画
		export default {
		  name: 'finder',
		  myscroll:null,
		  data () {
		    return {
		    	 showFood:false,
		    	 mall:null,
		       foods:null,
		       limit:null,
		       showLimit:false
		    }
		  },
		  computed:{
		  	...mapState(['position']),
		  	
		  	fn(){
		  	console.log(this.position)
		  	}
		  },
		  methods:{
		  	showMoreFood(){
		  		this.showFood=!this.showFoods
		  		console.log(this.showFood)
		  			console.log('showMoreFood')
		  		
		  	},
		  	showMoreLimit(){
		  	  	this.showLimit=!this.showLimit
		  	  	console.log(this.showLimit)
		  			console.log('showMoreLimit')
		  			
		  		
		  	},
		    ...mapActions(['getPosition']),
		  	getMall(){
		  		//https://mainsite-restapi.ele.me/member/v1/discover?platform=1&block_index=0&latitude=40.1136918&longitude=116.2444134
		  			  var that=this
				  		axios.get("http://localhost:9000/member/v1/discover",{
				  			params:{
				  				platform:1,
				  				block_index:0,
				  				latitude:this.position.latitude, 
				  				longitude:this.position.longitude
				  				
				  			}
				  		})
				  		.then(function(res){
				  			
				  			//console.log(res.data)
				  		  //console.log(res.data[1])
				  			that.mall=res.data[1]
	
				  		}.bind(this))
			  	
		  	
			   },
			
			  getFood(){
			   	//https://mainsite-restapi.ele.me/hotfood/v1/guess/likes?latitude=40.1136918&longitude=116.2444134&offset=0&limit=3&request_id=ae13439b-7141-40e2-9e8b-0c7b22f4d796&tag_id=-1&columns=1
		  		var that=this
			  		axios.get("http://localhost:9000/hotfood/v1/guess/likes?offset=0&limit=3&request_id=ae13439b-7141-40e2-9e8b-0c7b22f4d796&tag_id=-1&columns=1",{
			  			params:{
			  				latitude:this.position.latitude, //子组件使用props接受的数据
			  				longitude:this.position.longitude
			  				
			  			}
			  		})
			  		.then(function(res){
			  			//console.log(res.data)
			  			//console.log(res.data[0])
             this.foods=res.data
			  		}.bind(this))
			  
			   
			  },
			  //https://mainsite-restapi.ele.me/member/gifts/suggest
			  getLimit(){
			   	
				  		  var that=this
					  		axios.get("http://localhost:9000/member/gifts/suggest")
							  		.then(function(res){
							  			  
								  		//	console.log(res.data)
								  			
					              this.limit=res.data
							  		}.bind(this))
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
			
		  },
		  beforeMount(){
			console.log('alert2')
			
			this.alert2()
		},
		  mounted(){
		  	  this.alert2()
		  		if(!this.position.latitude){
			  	   	this.getPosition() //调用action中的方法
			  		//console.log(this.position,'00')
			  	}
  
			  	this.getMall()
			  	this.getFood()
			    this.getLimit()
		  	
		  	
		     this.$options.myscroll=new iScroll("wrapper");
		    	console.log(this.showFood)
		  	 //console.log('ppppppppppppppppppp')
		  },
		  updated(){
		  	
		  	
		    	 this.$options.myscroll.refresh()
		  	  
		  },
		  components:{
		  	FinderFood,
		  	FinderLimit
		  }
		  
		}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 


</style>
