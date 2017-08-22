export default{
//	addNumber({commit}){
//		console.log('actions调用mutations，可以写异步操作 ')
//		
//		//异步操作可以写载这里，然后更改数据
//		
//		setTimeout(function(){
//			commit('addNumber') //actions尝试调用mutations的方法
//		},1000)
//		
//		
//	}

    //传递参数addNUM
	addNumber({commit},addNUM){
		console.log('actions调用mutations，可以写异步操作 ')
		
		//异步操作可以写载这里，然后更改数据
		
		setTimeout(function(){
			commit('addNumber',addNUM) //actions尝试调用mutations的方法
		},1000)
		
		
	},
	
	
	reduceNumber({commit}){
		commit('reduceNumber')
	}
	
	
}
