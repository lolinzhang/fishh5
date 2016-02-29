function FishMessage(){
	this.msgid = 0;			//用于测试
	this.x = 0;
	this.y = 0;
	this.achieve = null;
	this.coinType = 0;		//金币类型，1捕鱼获得，2系统赠送
	this.coin = 0;			//金币数目
	this.levelNet = false;	//升级撒网
	this.petLevel = false;	//宠物升级
}

function Queue(){
	this.list = new Array();
	this.first = 0;
	this.last = -1;
	
	//增加到队尾
	this.push = function(obj){
		this.last++;
		this.list[this.last] = obj;
	};
	
	//返回并移除头
	this.pop = function(){
		var f = this.first;
		if(f > this.last){
			cc.log("Error!!!队列为空！");
		}
		var obj = this.list[this.first];
		this.list[this.first] = null;
		this.first++;
		return obj;
	};
	
	//返回头
	this.peek = function(){
		var f = this.first;
		if(f > this.last){
			cc.log("Error!!!队列为空！");
		}
		var obj = this.list[this.first];
		return obj;
	};
	
	//返回长度
	this.size = function(){
		var sz = this.last - this.first;
		return sz + 1;
	}
}

function AchieveDomain(){
    this.oid = 0;        //序号
    this.name = "";    //成就名
    this.desc = "";    //成就描述
    this.ofpts = 0;      //成就点数
    this.pic = "";     //成就图片
    this.type = 0;       //成就类型
    this.sysid = 0;      //系统成就ID
    this.value = 0;      //成就值
    this.completeTime = 0;  //完成时间
    this.label = null;
    this.coins = 0;
	this.toString = function(){
		return JSON.stringify(this);
	};
    this.initFromString = function(str){
		
	};
};

function TaskDomain(){
    this.oid = 0;            //序号
    this.taskid = 0;         //任务ID
    this.acceptTime = 0;    //接受时间
    this.completeTime = 0;  //完成时间，初始为0
    this.isComplete = 0;     //状态
    this.toString = function(){
		return JSON.stringify(this);
	};
    this.initFromString = function(str){
		
	};
};

function UserInfoDomain(){
    this.oid = 0;                //ID
    this.level = 0;     //等级
    this.exp = 0;       //经验
    this.yulei = 0;     //鱼雷
    this.lunpan = 0;    //轮盘
    this.haixing = 0;   //海星
    this.lightning = 0; //
    this.atom = 0;      //原子炮
    this.box = 0;       //宝箱
    this.toString = function(){
		return JSON.stringify(this);
	};
    this.initFromString = function(str){
		var t = JSON.parse(str);
		this.oid = t["oid"];
		this.level = t["level"];
		this.exp = t["exp"];
		this.yulei = t["yulei"];
		this.lunpan = t["lunpan"];
		this.haixing = t["haixing"];
		this.lightning = t["lightning"];
		this.atom = t["atom"];
		this.box = t["box"];
	};
};

function PetDomain(){
    this.petId = 0;      //宠物ID
    this.level = 0;      //等级
    this.exp = 0;        //经验
    this.type = 0;       //类型
    this.toString = function(){
		return JSON.stringify(this);
	};
    this.initFromString = function(str){
		
	};
};