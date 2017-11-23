# js格式

> 判断屏幕大小，给html加基础px


		   	var width="640"; //设计尺寸
		   	function orient() {
		   		   
		   	if(document.body.clientWidth<1000)
		   	{
		   		$("body").css("width",document.body.clientWidth);
		   	}
		   	else
		   	{	
		   		$("body").css("width",width);
		   	}
		}
		orient();
	   clientWidth = Math.max(320, document.body.clientWidth);
		document.documentElement.style.fontSize = (clientWidth / (width / 40)) + 'px';


 # less 
 > 40基数，cssrem自动生成数值