<template>
 <div class="outmai-header">
   <header>
   	  <p class="info">
   	    <span  @click="showPosition"   v-text="position.address? position.address:'获取位置中...'"></span>
   	     <span  class="weather" >{{weather?weather.temperature:''}} °</span>
   	  </p>
   	 <input type="text" placeholder="搜索商家、商品" aria-label="搜索商家、商品" class="search-inf">
   	
   	 <div class="swiper-container header-nav">
   	 	<div class="swiper-wrapper">
   	 		<div class="swiper-slide"  v-for="nav in navs">{{nav.word}}</div>
   	 	</div>
   	 </div>
   	
   </header>
 	
 	
 </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'outmai-header',
  props:["position",'showPosition'],
  swiper:null,
  data () {
    return {
       weather:null,
       navs:[]
    }
  },
  methods:{
  	//https://mainsite-restapi.ele.me/bgs/weather/current
  	getWeather(){
  		axios.get("http://localhost:9000/bgs/weather/current",{
  			params:{
  				latitude:this.position.latitude, //子组件使用props接受的数据
  				longitude:this.position.longitude
  				
  			}
  		})
  		.then(function(res){
  			console.log(res)
  			this.weather=res.data
  			
  		}.bind(this))
   },
   getNavs(){
   	//https://mainsite-restapi.ele.me/shopping/v3/hot_search_words
  		axios.get("http://localhost:9000/shopping/v3/hot_search_words",{
  			params:{
  				latitude:this.position.latitude, //子组件使用props接受的数据
  				longitude:this.position.longitude
  				
  			}
  		})
  		.then(function(res){
  			//console.log(res)
  			this.navs=res.data
  			
  		}.bind(this))
   }
  },
  mounted(){
  	 
  	  // console.log(this.position.latitude)
  	   if(this.position.latitude){//如果position存在，获取天气，和关键词
	  	   	this.getWeather()
	    	this.getNavs()
	    	
  	   }
  	  
       this.$options.swiper=new Swiper('.header-nav', {
				 slidesPerView : 'auto'
		})
   // console.log(this.$options.swiper,'00000000000000000')
		    	
   },
   updated(){
//  	this.$options.swiper.update()
   },
   watch:{//监听
   	navs(val){
   		let that=this
   		setTimeout(()=>{
   			
   			that.$options.swiper.update()
   		},0)
   	},
   	position(val){
   		if(val){
   			this.getWeather()
	        this.getNavs()
   		}
   		
   	}
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
   header{
   	    width: 100%;
	   	padding: .266667rem .373333rem;
	    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
	    background-image: linear-gradient(90deg,#0af,#0085ff);
	    color: #fff;
	    height: 3.253333rem;
	   .info{
	    	display: flex;
	    	justify-content: space-between;
	    	align-items: center;
	    	font-size: .5rem;
	    	padding:8px 0;
	    }
	    .search-inf{
	    	margin: 10px 0;
    	    display: block;
		    margin: .2rem 0;
		    width: 100%;
		    height: .96rem;
		    text-align: center;
		    border-radius: .96rem;
		    box-shadow: 0 0.026667rem 0.066667rem 0 rgba(0,0,0,.2);
		    color: #333;
		    font-size: .346667rem;
		    border:none;
		    outline: none;
	    }
	    .header-nav{
	    	padding: 0.1rem 0;
	    	 .swiper-slide{
		    	width: auto ;
		    	padding: 0 0.3rem;
		    	font-size: .3rem;
		    }
	    }
	   
   }
</style>
