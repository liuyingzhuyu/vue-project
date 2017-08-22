
import Vue from 'vue'
import Vuex from "vuex"
import actions from './actions'
Vue.use(Vuex)

const state={
	position:{
		latitude:null,
		longitude:null,
		address:""
	}
}

const mutations={
	getPosition(state,position){
		//console.log('mutations')
		state.position=position
		//console.log(state.position)
	}
}




const store=new Vuex.Store({
	state,
	actions,
	mutations
})

export default store









