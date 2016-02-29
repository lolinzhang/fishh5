function H5DB(){
	this.ls = cc.sys.localStorage;
	this.userKey = GameConfig.TableNameUser + "1";
	this.userInfos = new Array();
	this.petInfos = new Array();
	this.achieves = new Array();
	
	//检查数据库初始状态	
	this.initDB = function(){
		var u = this.ls.getItem(this.userKey);
		cc.log("user:" + u);
		if(u != null){
			var user = new UserInfoDomain();
			user.initFromString(u);
			cc.log("user exp:" + user.exp);
			this.userInfos.push(user);
		}else{
			var user = new UserInfoDomain();
			user.oid = 1;
			user.level = 1;
			user.exp = 400;
			user.yulei = 1;
			user.lunpan = 1;
			user.haixing = 1;
			user.lightning = 0;
			user.atom = 0;
			this.ls.setItem(this.userKey, user.toString());
			this.userInfos.push(user);
		}
	};
	
	this.getCurrentUser = function(){
		return this.userInfos[0];
	};
	
	this.initDB();
}

//数据库单例
var DBTool = {
	instance : new H5DB(),
};