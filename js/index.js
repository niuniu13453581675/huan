$(function(){
         var i = 2
		 var b = i>0 ?  (++i) : 0
		 console.log(b)
	// 创建圆点
	// function circular(){
	// 	$(".dollList").prepend("<li><a href="#"></a></li>");
	// }
	var cur = 0;
	var timer = '';
	  //封装图片自动播放函数
	function changeImg(){
		 timer = setInterval(function(){
		                    if( cur<($(".image-item").length-1) ){
		                        cur++;
		                    }else{
		                        cur=0;
		                    }
		                    changeTo( cur );
		                },2000);        
	}
	  //调用函数
	changeImg();
	  //图片切换函数
	function changeTo( num ){
		$(".image-item").each((i,e)=>{
			
			if(i == num){
				e.style.opacity="1"
				
			}else{
			e.style.opacity="0"
				
			}
		})
		
	}
	
	
		 $('.banner-image').hover(function() {
	            
		           clearInterval(timer);
		        }, function() {
		           changeImg()
		        });
	
	


});
