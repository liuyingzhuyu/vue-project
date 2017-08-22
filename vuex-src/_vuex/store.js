
//store 存放数据
import Vue from 'vue'
import Vuex from 'vuex'

import action  from './actions'


Vue.use(Vuex)//全局使用


const state={
	num:1,
	a:1,
	b:2
}

//****************************************
const mutations={//更改state中的数据
	//	addNumber:function(){
	//		console.log(1)
	//	    
	//		state.num++
	//	}
	addNumber:function(state,a){
		//console.log(arguments) 第一个参数 是statte，第二个及以后是传递的参数
	    a=a||2
		state.num+=a
		console.log('mutations 更改数据')
	},
	reduceNumber:function(){
		state.num--
	}
}

//*******************************/



const getters={//对  state中的数据进行二次封装，就是getters
	doublenum:function(state){
		return state.num*2
	}
}




const store=new Vuex.Store({
//	state:state
    state,
    mutations,
    getters,
    actions:action
})

export default store














