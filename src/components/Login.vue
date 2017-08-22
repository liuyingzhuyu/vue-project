<template>
  <div class="login root-box">
  	<div class="top">
  		<p>饿了么</p>
  		<p>美好生活 触手可得</p>
  	</div>
    <div class="fenlei">
    	<p>短信登录</p>
    	<p>密码登录</p>
    </div> 
    <input id="uname" class="shoujihao" type="text" placeholder="手机号" /><button class="yanzhengma">获取验证码</button>
    <input id="upwd" type="text" placeholder="验证码" />
    <div class="jinggao">
    	<p>温馨提示：未注册饿了么账号的手机号，登录时将自动注册且代表您已同意<a href="">《用户服务协议》</a></p>
    </div>
    <button class="success">登录</button>
    <a href="" class="guanyu">关于我们</a>
  </div>
</template>

<script>
//import NavTap from './NavTap'
import Vue from 'vue'
import axios from  'axios'
export default {
  name: 'login',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.top{width: 100%;height: 120px;text-align: center;}
	.top p{line-height: 60px;font-size: .6rem;color: cornflowerblue;}
  .fenlei{width:100%;height: 80px;display: block;}
  .fenlei :first-child{color: cornflowerblue;border-bottom: 2px cornflowerblue solid;}
  .fenlei p{float: left;display: block;margin-left: 25%;margin-top: 10%;}
  .shoujihao{width: 40%;idth: 60%;height: 40px;margin-left: 20%;outline: medium;opacity: 0.5;margin-bottom: 20px;border-radius: 5px;}
  input{width: 60%;height: 40px;margin-left: 20%;outline: medium;opacity: 0.5;margin-bottom: 20px;border-radius: 5px;}
  .yanzhengma{height: 40px;opacity: 0.5;}
  .jinggao{width: 60%;height: 40px;display: block;margin-left: 20%;margin-top: 5%;color: darkgrey;}
  .jinggao a{color: deepskyblue;}
  .success{width: 60%;height: 40px;border-radius: 5px;background: #00d762;margin: 10% 0 0 20%;font-size: .5rem;
  color: #fff;outline: medium;}
  .guanyu{display: block;text-align: center;margin: 8% 0 0 0;font-size: .3rem;opacity: 0.5;}
</style>
