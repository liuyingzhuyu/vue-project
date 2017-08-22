<template>
	<div class="finderFood " id="finderFood">
		<div  class="swiper-container keywordlist">
			
			<ul class="swiper-wrapper" id="list">
				<li class="swiper-slide" :class="[ isActive?'active':'']"  @click="currentView(index,$event)" v-for="(tag, index) in keywords.tags" :tag_id='tag.id'  >{{tag.name}}</li>
			</ul>
			
		</div>
	
		
		<div class="changeTab"  v-if='isShow'   >
			
		   
	         <div id="scroller"  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="false"
  infinite-scroll-distance="10">
			
				<div class="content" v-for="(foodStore,index) in foodStores"  >
					<h3><span v-text="foodStore?foodStore.restaurant.name:''"></span>    <span class="right">￥{{foodStore.restaurant?foodStore.restaurant.piecewise_agent_fee.rules[0].price:''}}元起送/配送费￥{{foodStore.restaurant?foodStore.restaurant.piecewise_agent_fee.rules[0].fee:''}}</span></h3>
					<div class="detail">
						<div class="food" v-for="(food,index) in foodStore.foods">
							<img  src="https://fuss10.elemecdn.com/d/79/0148acabeec46e620d2f7ad1fddd1jpeg.jpeg?imageMogr/format/webp/thumbnail/!220x220r/gravity/Center/crop/220x220/"/>
							<p v-text="food?food.name:''"> </p>
							<p class="price">￥{{food?food.price: ''}}</p>
							<button>去看看</button>
						</div>
					</div>
					
				</div>
			    <div class="no" v-show="no">
			    	没有啦
			    </div>
			
			
			</div>
		
		</div>
		
		
		
<!--//////////////////////////////////////////////////////////////////////////-->


		<div class="other" v-else   v-infinite-scroll="loadMore"
  infinite-scroll-disabled="false"
  infinite-scroll-distance="10">
			<div class="geti" v-for="datas in foodStores" >
				
			
			<div class="food_res" >
				
				<div class="food_box" v-for=" food in datas[0].foods">
					<img src="https://fuss10.elemecdn.com/3/f6/cf1853d8c3eb0ca44b08159ff1749jpeg.jpeg?imageMogr/format/webp/thumbnail/!335x230r/gravity/Center/crop/335x230/">
				    <h4 class="foodItem"  v-text="food.name">牛肉照烧双拼饭</h4>
				    <div class="foodDian" v-text='food.restaurant_name'>上上家（西单店）</div>
				    <div class="foodMoney"><i>¥</i><span v-text="food.price"></span>
				        <ul class="FoodItem-1NOfW" v-for="reson in food.rec_reasons"><li v-text="reson">好评多</li></ul>
				    </div>
				</div>
			  
			    
			</div>
			<div class="food_res" >
				
				<div class="food_box" v-for="food in datas[1].foods">
					<img src="https://fuss10.elemecdn.com/3/f6/cf1853d8c3eb0ca44b08159ff1749jpeg.jpeg?imageMogr/format/webp/thumbnail/!335x230r/gravity/Center/crop/335x230/">
				    <h4 class="foodItem"  v-text="food.name">牛肉照烧双拼饭</h4>
				    <div class="foodDian" v-text='food.restaurant_name'>上上家（西单店）</div>
				    <div class="foodMoney"><i>¥</i><span v-text="food.price"></span>
				        <ul class="FoodItem-1NOfW" v-for="reson in food.rec_reasons"><li v-text="reson">好评多</li></ul>
				    </div>
				</div>
			  
			</div>
			
			
			<div class="ShopItem">
				<div class="left">
				  <img src="https://fuss10.elemecdn.com/1/24/b3fbf584f92303939ddd084c58ca1png.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/">
				
				</div>
				<div class="right">
					<header>
						<h3 class="ShopItem-2nY22 ">
						   <span class="ShopItem-1BhC9">品牌</span>
							<span class="dianName" v-text="datas[2].restaurant.name">周大虾龙虾盖浇饭（广渠门内大街店）</span>
						</h3>
						<ul class="ShopItemJe2">
							<li v-text="datas[2].restaurant.supports[0]?datas[2].restaurant.supports[0].icon_name:''"></li>
							<li v-text="datas[2].restaurant.supports[1]?datas[2].restaurant.supports[1].icon_name:''"></li>
						</ul>	
					</header>
					<div class="score">
						<el-rate
						  v-model="datas[2].restaurant.rating"
						  disabled
						  show-text
						  text-color="#ff9900"
						  text-template="{value}" >
						</el-rate>
                       
					    <span>月售1904单</span>
					    <ul class="ShopItem-ax7Ig">
					    	<li class="ShopItem-3waaq">准时达</li>
					    	<li class="ShopItem-2r_yT active">蜂鸟专送</li>
					    </ul>
					</div>
					 <div class="hot" v-text="'¥'+datas[2].restaurant.piecewise_agent_fee.rules[0].price+'起送|配送费¥'+datas[2].restaurant.piecewise_agent_fee.rules[0].fee  ">
					 	
					 	
					 	<ul class="ShopItem-ax7Ig">
					 		<li class="ShopItem-18u5d">2.09m <span>|</span></li> 
					 		<li class="ShopItem-tkrEr">38分钟</li>
					 	</ul>
					 
					 </div>
					
					<div class="Activity" v-if="datas[2].restaurant.activities?'true':'false'">
						<div class="xin"  v-text="datas[2].restaurant.activities[0]?datas[2].restaurant.activities[0].icon_name:''">新</div>
						<div class="Activity-3Ztac" v-text="datas[2].restaurant.activities[0]?datas[2].restaurant.activities[0].tips:''">(不与其他活动同享)新用户下单立减21.0元</div>
					</div>
					
					
					<div class="Activity" v-if="datas[2].restaurant.activities?'true':'false'">
						<div class="xin reduce" v-text="datas[2].restaurant.activities[1]?datas[2].restaurant.activities[1].icon_name:''">减</div>
						<div class="Activity-3Ztac Activity-3Ztac"  v-text="datas[2].restaurant.activities[1]?datas[2].restaurant.activities[1].tips:''">在线支付满25减8，满40减12，满60减20</div>
					</div>
					
					
				</div>
				
				
			</div>
			
			
			
			
			
		</div>
		<div class="no" v-show="no">
			    	没有啦
		</div>
		
		
		
	  </div>
	</div>
	
	
	
</template>

<script>
	
	import axios from 'axios'
	import { TabContainer, TabContainerItem } from 'mint-ui';
    import { InfiniteScroll } from 'mint-ui';
    import { Indicator } from 'mint-ui';//引入加载动画

	
	export default{
		name:'finderFood',
		props:['position'],
		keySwiper:null,
		
		offset:0,
		
		data(){
			return{
				keywords:[],
				shili:true,
				isActive:false,
				currentV:null,
				restaurants:null,
				foods:null,
				foodStores:[],
				tag_id:-1,
				isShow:true,
				no:false
				
//				dataArray:[],
				
			}
		},
		methods:{
		
			
			getKey(){//https://mainsite-restapi.ele.me/hotfood/v1/guess/banner?latitude=39.90469&longitude=116.407173&request_id=61028acc-08db-4c2a-acaf-c6aed9314a6d
				var that=this
				 axios.get('http://localhost:9000/hotfood/v1/guess/banner',{
				 	params:{
				 		latitude:this.position.latitude,
				 		longitude:this.position.longitude,
				 		request_id:'ae13439b-7141-40e2-9e8b-0c7b22f4d796'
				 	}
				 }).then(function(res){
                    console.log(res.data,'-------get')
                     that.keywords= res.data

				 })
			},
			
			
			firstView(){
				var olist=document.getElementById('list').children				
				olist[0].setAttribute('class','active')
			//	console.log('firstView')
				
			},
			currentView(index,e){
				   //console.log(index,'+++++++++++++++++++')
				   this.no=false
				   this.$options.offset=0
				   if(index!=0){
				   	 this.isShow=false
				   }
				   if(index==0){
				   	 this.isShow=true
				   }
				    var olist=document.getElementById('list').children
					this.tag_id=e.target.getAttribute('tag_id')
					//console.log(this.tag_id)
					 var len=olist.length
					 for(var i=0 ;i<len;i++){
						olist[i].removeAttribute('class','active')
					 }
					 e.target.setAttribute('class','active')
					
				
			
			},
			loadMore(){
				console.log(this.tag_id,'获取数据')
				console.log(this.$options.offset,'获取数据')
				var that=this
				this.$options.offset+=9
				//console.log(this.$options.offset,'4444444444444444444')
				axios.get("http://localhost:9000/hotfood/v1/guess/likes?limit=10&columns=2&request_id=c00f3031-1e6f-4633-9665-f4c1f827aef0&extras=%5B%22activities%22%5D",{
					params:{
						latitude:this.position.latitude, //子组件使用props接受的数据
  				        longitude:this.position.longitude,
  				        tag_id:this.tag_id,
  				        offset:this.$options.offset
     
					}
				}).then(function(res){
					if(that.tag_id==-1){
						console.log(res.data,'loadmore')
						var data=res.data
						if(data.length==0){
							that.no=true
						}
					    data.forEach((item,i)=>{
							that.foodStores.push(item)
							console.log('----------------1')
						})
					}else{
						console.log(res.data,'xin')
						var data=res.data
						if(data.length==0){
							that.no=true
						}
						var arr=[]
						for(var i=0; i<data.length;i++){
							arr.push(data[i])
							if(i%3==2){
								that.foodStores.push(arr)
								arr=[]
							}
						}
						console.log(that.foodStores)
						
					}
					
				
				})
			},
			alert2(){//懒加载
	  		
	  		   Indicator.open({
				  text: '加载中...',
				  spinnerType: 'fading-circle'
				});
				setTimeout(function(){
					Indicator.close();
				},1000)
			
		  	}
		
		},
		beforeMount(){
			console.log('alert2')
			
			this.alert2()
		},
		mounted(){
			this.alert2()
			setTimeout(function(){
				this.firstView()	//第一个关键词变色	
			}.bind(this),1000)
			
		    this.getKey()
            this.loadMore()
//			this.$options.myscroll=new iScroll("wrapper"); 
            if(!this.$options.keySwiper){
            	this.$options.keySwiper=new Swiper('.keywordlist',{
				    slidesPerView:'auto',
				    slideToClickedSlide:true
				})
            }
			
	
		},
	    
		watch:{
			position:function(val){
				if(val){
				 this.getKey()
				 this.loadMore()
				}
			},
			tag_id:function(val){
				if(val){
				   console.log('改变id')
				  this.loadMore()
				  this.foodStores=[] //改变tag_id后，改变url的地址，清空原有的数组foodStores
				}
			}
			
		},
		updated(){

           
            if(this.position.latitude){
            	var that=this
            	setTimeout(function(){
            		  //console.log('4444444444444444444')
            		  //console.log(that.$options.keySwiper)
		             that.$options.keySwiper.update()
//		             that.$options.myscroll.refresh()
		             

            	})
	           
            }

		}
		
	}
	








</script>

<style>
</style>