<template>
	<div class="finderLimit" id="finderLimit">
		<div id="wrapper">
			<div id='scroller'>

				<div class="swiper-container banner">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="baner in banners">
							<img :src="baner" />
						</div>

					</div>

					<div class="swiper-pagination"></div>

				</div>
				<div class="jifen">
					<span>积分</span>
					<span>兑换记录</span>
				</div>
				<!--<div class="jifen">
					<span>积分</span>
					<span>兑换记录</span>
				</div>-->
				<div class="classify">
					<ul>
						<li v-for="classi in classify">
							<img :src="classi.logo" />
							<p v-text="classi.name"></p>
						</li>
					</ul>
				</div>

				<div class="activity">

					<img v-for="active in actives" :src="active" />

				</div>

				<limit-son></limit-son>

			</div>
		</div>
	</div>
</template>

<script>
	//https://home.m.duiba.com.cn/floor/1/0?duibaPageId=3&floorId=157&_=1501724443749&callback=jsonp1

	import { mapState, mapActions } from 'vuex'
	//var jsonp = require('jsonp');
	import jsonp from 'jsonp'
	import LimitSon from './LimitSon.vue'
	import { Indicator } from 'mint-ui'; //引入加载动画

	export default {
		name: 'finderLimit',
		props: ['position'],
		myscroll: null,
		mySwiper: null,
		data() {
			return {
				banners: [],
				classify: [],
				actives: []
			}
		},
		computed:{
			...mapState(['position'])//把state中的数据放在这个页面
		},
		methods: {

			getBanner() {
				//jsonp数据获取
				
				let that = this
				jsonp('https://home.m.duiba.com.cn/floor/1/0?duibaPageId=3&floorId=157&_=1501734421346',
					null,
					function(err, data) {
						if(err) {
							console.error(err.message);
						} else {

							//console.log(data);
							var data = data.list
							data.forEach(function(val, index) {
								that.banners.push(val.image)
							})
						}
						//console.log( that.banners);
					});
			},
			getClassify() {
				//jsonp数据获取
				console.log('111111111111111')
				let that = this
				jsonp('https://home.m.duiba.com.cn/floor/2/0?duibaPageId=3&floorId=204&_=1501734421348',
					null,
					function(err, data) {
						if(err) {
							console.error(err.message);
						} else {

							// console.log(data);
							var data = data.list
							var obj
							data.forEach(function(val, index) {
								obj = {}
								obj.name = val.name
								obj.logo = val.logo
								that.classify.push(obj)
							})
						}
						//console.log(that.classify);
					});
			},
			getActives() {
				//jsonp数据获取
				//console.log('22222222222222222')
				let that = this
				jsonp('https://home.m.duiba.com.cn/floor/8/0?duibaPageId=3&floorId=24&_=1501734421349',
					null,
					function(err, data) {
						if(err) {
							console.error(err.message);
						} else {
							console.log(data);
							var data = data.list
							data.forEach(function(val, index) {
								that.actives.push(val.image)
							})
						}
						//console.log(that.actives);
					});
			},
			alert2() {

				Indicator.open({
					text: '加载中...',
					spinnerType: 'fading-circle'
				});
				setTimeout(function() {
					Indicator.close();
				}, 1000)

			}

		},
		beforeMount() {
			console.log('alert2')

			this.alert2()
		},
		mounted() {
            console.log(this.position,'00000000000000')
            
			//this.alert2()
			
			if(this.position.latitude){
				this.getBanner()
				this.getClassify()
				this.getActives()
			}
			
			//			if(!this.$options.mySwiper){
			//				this.$options.mySwiper=new Swiper ('.swiper-container', {
			//				    // 如果需要分页器
			//				    pagination: '.swiper-pagination',
			//				   
			//				})      
			//			}

			console.log('实例化')
			this.$options.mySwiper = new Swiper('.swiper-container', {
				// 如果需要分页器
				pagination: '.swiper-pagination',
				autoplay: 2000

			})

		},
		updated() {
			 console.log(this.position,'111111111111')
			//console.log(this.$options.mySwiper)
			this.$options.mySwiper.update()
			if(this.position.latitude){
				this.getBanner()
				this.getClassify()
				this.getActives()
			}

		},
		components: {
			LimitSon
		}

	}
</script>

<style>

</style>