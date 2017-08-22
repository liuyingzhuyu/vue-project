<template>
	<div class="outmai-position">
		<header>
			 <p>
			     <span class="iconfont icon-qianjin-copy" @click="showPosition"></span>
			          选择地址
			 </p>
			 <input @keyup.enter="search" v-model="keyword" type="search" placeholder="请输入地址" autofocus="autofocus" class="search-btn"/>
		</header>
		<div class="info-box">
		<ul> 
		     <li  v-for="a in address" @click="changePosition(a)">
		     	<h4 v-text="a.name"></h4>
		     	<p v-text="a.address"></p>
		     </li>
		</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default{
	  	   name:'outmai-header',
	  	   props:['showPosition'],
	  	   data(){
	  	   	  return{
	  	   	  	   keyword:'',
	  	   	  	   address:[]
	  	   	  }
	  	   },
	  	   methods:{
	  	   	  
	  	   	    search(){  //加载下拉菜单列表信息
	  	   	    	    let that = this
	  	   	    	    axios.get('http://localhost:9000/bgs/poi/search_poi_nearby',{
	  	   	    	    	params:{
	  	   	    	    		keyword:this.keyword,
	  	   	    	    		offset:0,
	  	   	    	    		limit:20,
	  	   	    	    		longitude:this.position.longitude,
	  	   	    	    		latitude:this.position.latitude
	  	   	    	    	}
	  	   	    	    }).then((res)=>{  //请求成功后的回调函数
	  	   	    	    	//console.log(res.data)
	  	   	    	    	that.address = res.data
	  	   	    	    })
	  	   	    },
	  	   	    changePosition(a){  //改变store里面的数据
	  	   	    	this.showPosition()  //关闭搜索地址页面
//	  	   	    	console.log(a)
	  	   	    	this.$store.commit('getPosition',{
	  	   	    		 latitude:a.latitude,
	  	   	    		 longitude:a.longitude,
	  	   	    		 address:a.name
	  	   	    	})
	  	   	    }
	  	   },
	  	   computed:{
	  	   	...mapState(['position'])
	  	   },
	  	   mounted(){   //实例化上面的函数
	  	   	  
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
	     .outmai-position{
	     	width:100%;
	     	height:100%;
	     	position: fixed;
	     	left: 0;
	     	top: 0;
	     	background: #f5f5f5;
	        z-index: 3;
	        overflow: scroll;
	        
	     header{
	        height:2.5rem;
	     	width:100%;
	     	color: #fff;
	     	background-image:-webkit-linear-gradient(left,#0af,#0085ff);
	   	    background-image:linear-gradient(90deg,#0af,#0085ff);
	   	    text-align: center;
	   	    padding-bottom: .32rem;
	   	 p{
	   	    	font-size: .5rem;
	   	    	padding: 15px 0px;
	   	    	position: relative;
                span{
                	position: absolute;
                    left: 15px;
                    font-size: .7;
                    top:12px;
                }
	   	    }
	   	    .search-btn{
	   	   	            display: block;
	   	   	            width:100%;
	   	   	            height:0.8rem;
	   	   	            text-align: center;
	   	   	            border-radius: .96rem;
	   	   	            color: #333;
	   	   	            font-size: .346667rem; 
	   	   	            border: none;
	   	   	            outline: none;
	   	   }
	     }
	     
	     .info-box li{
	     	        background: #fff;
	     	        padding:10px;
	     	        border-bottom: solid 1px #ddd;
	     	        font-size: 0.35rem;
	     	        @include one-pixel;
	     	       p{
	     	         	padding: 6px 0;
	     	         	color:#888;
	     	     } 
	     }
	     
	     
	     
	     }
	     
</style>