//用数组B中的数据填充结果
var GameTool = {
	batch_replace : function(a, b){
		var c = new Array();
		for(i = 0; i < b.length; i++){
			replaceFrom = "@" + i;
			c[i] = "<!---" + i + "--->";
			a = a.replace(new RegExp(replaceFrom, "g"), c[i]);
		
		}
		for(i = 0; i < b.length; i++){
			a = a.replace(new RegExp(c[i], "g"), b[i]);
		}
		return a;
	},

	//翻译语言
	expand : function(){
		var arg = expand.arguments;
		var line = arg[0];
	
		var c = [];
		for(var i = 1; i < arg.length; i++){
			c[c.length] = arg[i];
		}
		var result = line;
		if(c.length > 0){
			result = batch_replace(result, c);
		}
		return result;
	},
	
	//数字转字符串，不足两位补为两位
	num2strFix2 : function(num){
		if(num < 10){
			return "0" + num;
		}else{
			return num.toString();
		}
	},
	
	//创建随机数
	createRand : function(min, max){
		return Math.floor(Math.random() * (max - min + 1) + min);
	},
	
	//角度－弧度
	degrees2radians : function(ang){
		return ang * 0.01745329252;	// PI / 180
	},
	
	radians2degrees : function(ang){
		return ang * 57.29577951;	// PI * 180
	},
	
	//根据点得到角度
	getRotate : function(x1, y1, x2, y2){
		var rotate = 90;
		
		var a = 0.0;
    	var b = 0.0;
    	var c = 0.0;
    	var t1 = x1 - x2;
    	a = Math.abs(t1);
    	var t2 = y1 - y2;
    	b = Math.abs(t2);
    	if(a == 0){
        	if(y1 > y2){
            	return 270.0;
        	}else{
            	return 90.0;
        	}
    	}
    	if(b == 0){
        	if(x1 > x2){
            	return 180.0;
        	}else{
            	return 360.0;
        	}
    	}
    	c = Math.sqrt(a * a + b * b);
    	rotate = GameTool.radians2degrees(Math.acos((a * a * 2) * 1.0 / (2 * a * c)));
    	if(x1 > x2 && y2 > y1){
        	rotate = 180 - rotate;
    	}else if(x1 > x2 && y1 > y2){
        	rotate = 180 + rotate;
    	}else if(x1 < x2 && y1 > y2){
        	rotate = 360 - rotate;
    	}
    	return rotate;
	},
	
	//计算两点间距离
	calcDistance : function(x1, y1, x2, y2){
		var a = Math.abs(x1 - x2);
		var b = Math.abs(y1 - y2);
		var c = Math.sqrt(a * a + b * b);
		return c;
	},
	
	//当前毫秒数
	now : function(){
		return new Date().getTime();
	},
	
	//测试输出
	debug : function(str){
		if(GameConfig.debug){
			cc.log(str);
		}
		
	}
};

//另一种格式化方法
String.prototype.format = function(){    
    var args = arguments;    
    return this.replace(/\{(\d+)\}/g,                    
        function(m,i){    
            return args[i];    
        });    
};
