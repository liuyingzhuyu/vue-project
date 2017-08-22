<template>
  <div class="hello">
  	<p>经过1秒更改数据</p>
    <button @click="reduceNumber">-</button>
    <span>{{num}}</span>
    <span>{{doble_num}}</span>
     <button @click="addNumber">+</button>
  </div>
</template>

<script>
	
import {mapState,mapGetters,mapActions} from 'vuex'  //导入'vuex'暴露某些的东西
export default {
  name: 'hello',
  data () {
    return {
      //num:3
    }
  },
  
  //组件使用store上管理的状态方法
  //***方式一：
		/*computed:{
			num:function(){
				return  this.$store.state.num
			}
		},*/
	//***方式二：获取多个数据
    //	computed:mapState(['a','num']),
	//***方式三:起别名，防止名字冲突
   /*	computed:mapState({
			 _num:'num'
		}),*/
	//方式四：
	computed:{
		...mapState(['num']),
		
		
//		doble_num:function(){//getter使用
//			return this.$store.getters.doublenum
//		}
    ...mapGetters({
    	doble_num:'doublenum'
    })




		
	},
  mounted(){
  	//console.log(this.$store.state.num)
  },
  methods:{
  	addNumber:function(){
    //直接调用store
		//	this.$store.commit('addNumber')//出发store的addNumber方法
	  //this.$store.commit('addNumber',5) //可以传递参数
	  
	  console.log('组件调用actions')
	  
	  //调用action
	  // this.$store.dispatch('addNumber') //组件调用action
	   this.$store.dispatch('addNumber',4) //组件调用action
		},
//		reduceNumber:function(){
//			this.$store.dispatch('reduceNumber')
//		}
    ...mapActions(['reduceNumber'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
