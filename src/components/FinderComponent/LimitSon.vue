<template>
	<div class="limitSon">
		<div class="contain">
			<nav>大家都在兑...</nav>
			<ul>
				<li v-for="change in changes">
					<p v-text="change.title">sdfds</p>
					<p v-text="change.credits+'积分'">sdfds</p>
					<img :src="change.image">
				</li>
				<div class="instruction">
						<p>*兑换项和活动皆与设备生产商Apple Inc.无关</p>
						<p>合作请联系：ejifen@ele.me</p>
				</div>

			</ul>
			
		</div>
	</div>
</template>

<script>
	
//https://home.m.duiba.com.cn/floor/1/0?duibaPageId=3&floorId=157&_=1501724443749&callback=jsonp1


//var jsonp = require('jsonp');
import jsonp from 'jsonp'



export default{
		
		data(){
			return{
			   changes:[]
			}
		},
		methods:{
		getChange(){
             //jsonp数据获取
            console.log('00000000000000')
            let that = this
            jsonp('https://home.m.duiba.com.cn/floor/3/0?duibaPageId=3&floorId=155&_=1501754484917',
                  null, 
	              function (err,data) {
						  if (err) {
						    console.error(err.message);
						  }else{
						  	 console.log(data);
						     var data=data.list
						   
						     that.changes=data
						  }
						console.log(that.changes);
					});
			},
	
			
			
		},
		mounted(){
		  this.getChange()
		  
		},
		updated(){
			
			
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
	}

</script>

<style>
	
</style>