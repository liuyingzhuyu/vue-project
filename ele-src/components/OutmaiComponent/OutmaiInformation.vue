<template>
	  <div class="outmai-information">  	     	
	  	<header> 
	  		      <p @click="showInformation" class="iconfont icon-qianjin-copy"></p>
	  	     	  <li class="rice_home">
							  	<div class="ji_left">
							  		<img  src="../../../static/ji.jpeg" />
							  	</div>
				  	 
							  	<div class="ji_right">
									  	<h4></h4>
									  	<p class="ji_one"><el-rate ></el-rate></p>
									  	<p class="ji_two"><span></span>&nbsp;/&nbsp;<span></span></p>
									  	<p class="ji_three"><span></span><span></span></p>
							    </div>
				    </li>
	  	     </header>
	  	     <div class="card">
	  	     	      <span>商品</span>
	  	     	      <span>评价</span>
	  	     </div>
	  	     <div class="menu">
	  	     	    <div class="menu_left">
	  	     	         <div class="menu_one" v-for='(one,index) in body' @click='changemenu(index)'>{{one.name}}</div>
	  	     	    </div>
	  	     	    <div class="menu_right">
	  	     	    	  <p></p>
	  	     	    	                                 
	  	     	    	    <div class="one_food" >

	  	     	    	  	<div class="one_food_left"><img src="../../../static/ji.jpeg"></div>
	  	     	    	  	<div class="one_food_right">
	  	     	    	  		       <h4></h4>
	  	     	    	  	</div>	  	     	    	  		  	     	    	  	
	  	     	    	  </div>
	  	     	    </div>
	  	     </div>
	  </div>
</template>

<script>

import axios from 'axios'
import {mapState} from 'vuex'
export default{
	  	   name:'outmai-information',
	  	   props:['showInformation','restaurantId_one'],
	  	   data(){
	  	   	  return{
	  	   	  	   body:null,
	  	   	  	   value1:null,
	  	   	  	   restaurantId:null,
	  	   	  	   menuone:null
	  	   	  }
	  	   },
	  	   methods:{	  	   	  
	  	   	    search(){  //加载下拉菜单列表信息
	  	   	    	    let that = this
	  	   	    	    axios.get('http://localhost:9000/shopping/v2/menu',{
	  	   	    	    	params:{
	  	   	    	    		restaurant_id:this.restaurantId_one,
	  	   	    	    		latitude:this.position.latitude,
	  	   	    	    		longitude:this.position.longitude
	  	   	    	    		 	  	   	    	    		  	   	    	    		
	  	   	    	    	}
	  	   	    	    }).then((res)=>{  //请求成功后的回调函数
			  	   	    	    	that.body = res.data
			  	   	    	    	console.log(that.body)
	  	   	    	    })
	  	   	    },
	  	   	    changemenu(a){
	  	   	    	    this.menuone = a;
	  	   	    	 
	  	   	    	    console.log(this.body[this.menuone])
	  	   	    	    
	  	   	    }
	  	
	  	   },
	  	   computed:{
	  	   	...mapState(['position'])
	  	   },
	  	   mounted(){   //实例化上面的函数

	  	   	  this.restaurantId=this.restaurantId_one
	  	   	  
	  	   	  this.search();
	  	   	  
	  	   },
	  	   updated(){
//	  	   	    this.$options.swiper.update()
	  	   },
	  	   watch:{  //监测数据	  	   	    
	  	   	   
	  	   }
	  	   
	  }
</script>

<style lang='scss'>
@import '../../style/_base.scss';
	  .outmai-information{
	  	      background:#fff;
	  	      width:100%;
		      height:100%;
		      position: fixed;
		      left: 0;
		      top: 0;
		      z-index: 100;
		       header{
			        height:3.5rem;
			     	width:100%;
			     	background-color: rgba(119,103,137,.43);
			     	 .rice_home{
			     	     	width:100%;
			     	     	height:100px;
			     	     	display:flex;
			     	     	justify-content: space-between;
			     	     	.ji_left{
			     	     		padding:0.2rem;
		     	     		    width:25%;
		     	     		    img{width:100%;}
			     	     	}
			     	     	.ji_right{
			     	     		padding:0.4rem;
     	     		            width:75%;
			     	     	}
     	     	       }
			     	}
			     	.card{
			     		 width:100%;height:1.3rem;
			     		 background:#fff;
			     		 display: flex;
			     		 border-bottom: solid 1px #ddd;
			     		 justify-content: space-around;
			     		 align-items: center;
			     		 span{display: block;color:#666;}
			     		 }
			     		.menu{
			     			width:100%;
			     			height:100%;
			     			display: flex;
			     			justify-content: space-between;
			     			align-items: center;
			     		.menu_left{
			     			  width:2.5rem;
			     			  height:100%;
			     			  border-right: solid 1px #ddd;
			     			  background:#f8f8f8;
			     			  .menu_one{
			     			  	   display: flex;
			     			  	   justify-content: space-around;
			     			  	   border-bottom: solid 1px #ddd;
			     			  	   padding:10px 0 10px 0;
			     			  	   color: #666;
			     			  }
			     		}
			     		.menu_right{
			     			   width:100%;height:100%;background:red;
			     			   p{width:100%;height:1rem;background:#eaeaea};
			     			   overflow:scroll;
			     		}
			     		}
	  	      }
</style>