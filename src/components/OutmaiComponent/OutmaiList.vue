<template>
	<div class="outmai-list">
	        <ul v-infinite-scroll="getList" infinite-scroll-disabled="false" infinite-scroll-distance="10">
				  <li v-for="(item,index) in slides" class="rice_home"   @click="showInformation(index)">
				  	<div class="ji_left">
				  		<img  src="../../../static/ji.jpeg" />
				  	</div>
				  	 
				  	 <div class="ji_right">
						  	<h4 v-text="item.name"></h4>
						  	<p class="ji_one"><el-rate v-model='value1'></el-rate>{{item.rating}}</p>
						  	<p class="ji_two"><span></span><span v-text='item.piecewise_agent_fee.tips'></span>&nbsp;/&nbsp;<span v-text='item.average_cost'></span></p>
						  	<p class="ji_three"><span class="icon_name icon_color='#70bc46'"></span><span  <!--v-text="item.activities[3].description"--></span></p>
				     </div>
				     
				  </li>
				  
			</ul>
			
		<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    	   <outmai-information ref="son" :position='position' v-if="isInformation" :showInformation="showInformation" :restaurantId_one="restaurantId_one"></outmai-information>
        </transition>
	</div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import axios from 'axios'
import OutmaiInformation from './OutmaiInformation'
	  export default{
	  	   name:'outmai-list',
	  	   props:['position'],
	  	   swiper:null,
	  	   offset:0,
	  	   data(){
	  	   	  return{
	  	   	  	  slides:[],
	  	   	  	  value1:null,
	  	   	  	  notLaod:false,
	  	   	  	  isInformation:false,
	  	   	  	  restaurantId:[],
	  	   	  	  restaurantId_one:null
	  	  
	  	   	  }
	  	   },
	  	   methods:{
	  	   	...mapActions(['getPosition']),
	  	   	   getList(){  //获取饭店信息

	  	   	   	     axios.get('http://localhost:9000/shopping/restaurants?offset=0&limit=20&extras[]=activities&terminal=h5',{
	  	   	   	     	params:{     //params传参数
	  	   	   	     		  latitude:this.position.latitude,
	  	   	   	     		  longitude:this.position.longitude,
	  	   	   	     		  offset:this.$options.offset
	  	   	   	     	}             
	  	   	   	     })
	  	   	   	     .then(function(response){    //获取数据处理
	  	   	   	     	   var data = response.data
	  	   	   	     	   if(data.length==0){
	  	   	   	     	   	   this.notLoad=true
	  	   	   	     	   }
	  	   	   	     	   let that = this ;
	  	   	   	     	   data.forEach((item,i)=>{
	  	   	   	     	     that.slides.push(item) 
	  	   	   	     	     that.restaurantId.push(item.id) 	  	   	   	     	    
	  	   	   	     	   })
	  	   	   	     	   this.$options.offset+=20
	  	   	   	     }.bind(this))
	  	   	   },
	  	   	   showInformation(a){

			  	  	this.isInformation=!this.isInformation;
//			  	  	console.log(this.restaurantId[a]  )
                      this.restaurantId_one=this.restaurantId[a]  
//                    console.log( this.restaurantId_one)
			  	  }
	  	   	  
	  	   },
	  	   mounted(){   //实例化上面的函数
	  	   	   if(this.position&&this.position.latitude){
 	  	   	   	    this.getList() 	  	   	   	    
 	  	   	   	    
	  	   	   }
	  	   },

	  	  watch:{  
	  
	  	   	    position(val){
	  	   	    	if(val){
                         this.getList()
	  	   	    	}
	  	   	    }
	  },
	components:{ 	   
  	   OutmaiInformation
    }
	}
</script>

<style lang='scss'>
     .outmai-list{
     	     background:#fff;
     	     margin-top:10px;
     	     padding-bottom: 1rem;
     	     .rice_home{
     	     	border-bottom: solid 1px #ddd;
     	     	width:100%;
     	     	height:100px;
     	     	display:flex;
     	     	justify-content: space-between;
     	     	.ji_left{
     	     		    padding:0.4rem;
     	     		    width:25%;
     	     		    img{width:100%;}
     	     	}
     	     	.ji_right{
     	     		padding:0.4rem;
     	     		width:75%;
     	     		p{
     	     			font-size:0.2rem;    	     			
     	     		}
     	     		.ji_one{color:orange;}
     	     		.ji_two{color:#666;}
     	     		.ji_three{color:#aaa;margin-top:8px;}
     	     		}
     	     }
     }
	    
</style>