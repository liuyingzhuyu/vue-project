<template>

  <div class="order root-box" id="order">
      <div class="head"><span class="iconfont icon-qianjin-copy  "></span>发现{{position}} </div>
      <div class="content">
	      	<img class="img" src="//fuss10.elemecdn.com/f/18/9fb04779371b5b162b41032baf5f3gif.gif">
	        <h5 class="chakan">登录后查看外卖订单</h5>
	        <button class="logo"> 立即登录</button>
      </div>
      
  	<nav-tap></nav-tap>
  </div>





</template>

<script>
		import NavTap from "./NavTap"
		export default {
		  name: 'order',
		  data () {
		    return {
		      
		    }
		  }
		}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 #order{
    width: 100%;
    height: 100%;
    position:relative;
    display: flex;
    flex-direction: column;
    
    .head{
            z-index: 100;
          width: 100%; 
          height:1.2rem;
          background: #0085ff;
                position: fixed;
                top: 0;
                left: 0;  
                color: #fff;
                font-size:.5rem;
                line-height:1.2rem;
                text-align:center;
                font-weight:bold;
                padding:0 10px;
                .icon-qianjin-copy{
                    position: absolute;
                    top: 0;
                    left: 10px;
                }
    }
    .content{
    	display: flex;
    	flex-direction: column;
    	justify-content: center;
    	align-items: center;
    	padding-top: 3rem;
    	
    	
    	 img{
		    	width:60%;
		    }
		    button{
		    	padding: .2rem .3rem;
		    	outline: none;
		    	border: none;
		    	margin-top: .5rem;
		    	background: #56d176;
		    	color: #fff;
		    }
    }
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 }
</style>
