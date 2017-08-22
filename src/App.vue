<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='scss'>
/*	lang='scss' 设置scss编写模式*/
	
/*写一些通用的样式*/



/*测试scss是否设置成功
$base:red;
body{
	color:$base
}
 */
@import  './style/_base.scss';
@import  './style/_reset.scss';
@import  './style/_common.scss';
@import  './style/_finder.scss';

@import  './style/_findFood.scss';

@import './style/_findLimit.scss';
@import './style/_limitSon.scss';









 
</style>
