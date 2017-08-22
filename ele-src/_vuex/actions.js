

const actions={
	getPosition({commit}){
		//console.log('getPosition')
		 var map, geolocation;
	    //加载地图，调用浏览器定位服务
	    map = new AMap.Map('container', {
	        resizeEnable: true
	    });
	    map.plugin('AMap.Geolocation', function() {
	        geolocation = new AMap.Geolocation({
	            enableHighAccuracy: true,//是否使用高精度定位，默认:true
	            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
	            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
	            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
	            buttonPosition:'RB'
	        });
	        map.addControl(geolocation);
	        geolocation.getCurrentPosition();
	        AMap.event.addListener(geolocation, 'complete',(data)=>{
	        	let longitude =data.position.getLng()
	            let latitude =data.position.getLat()
	            
	            console.log(longitude,latitude)
	            
	            var lnglatXY = [longitude, latitude]; //已知点坐标
			    //逆地理编码
			        var geocoder = new AMap.Geocoder({
			            radius: 1000,
			            extensions: "all"
			        });        
			        geocoder.getAddress(lnglatXY, function(status, result) {
			            if (status === 'complete' && result.info === 'OK') {
			              var address = result.regeocode.pois[0].name; //返回地址描述
			               // console.log(result.regeocode)
			                console.log(address)
			                
			               let position={
			               	   latitude,
			               	   longitude,
			               	   address
			               }
			              commit('getPosition',position) 
			                
			            }
			        });        
			   
		     });
	      
	    });
       
			
	
	}
}




export default actions