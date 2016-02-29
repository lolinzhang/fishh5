var GameConfig = {
	SupposeWidth : 960,
	SupposeHeight : 640,
    PathWidth : 1024,
    PathHeight : 768,
    
    UseFont : "Arial",          //通用字体
    
    FishCrypt : true,           //是否进行数据加密
    FishAppId : "",             //appstore的bundle id
    FishIsPayVersion : true,    //是否付费版
    ShowAd : true,              //是否显示广告
    GameChannel : "",           //定义当前运营商
    GameBgCount : 8,            //背景图张数
    
    SystemInitCoins: 200,       //系统初始给玩家的金币数
    LaserBase : 1500,
    BaseLaser : 52,             //每级激光累进金币数
    SystemPerMinGiveCoins : 7,  //系统每分钟赠送的金币数
    SystemServicePerMin : 1,    //系统service每分钟赠送金币数
    SysFishRandomMinTime : 15,   //捕鱼档位随机最少时间，秒
    SysFishRandomMaxTime : 30,  //捕鱼档位随机最多时间，秒
    SystemFishRandomHigh : 0.6, //捕鱼高档位
    SystemFishRandomLow : 1.2,  //捕鱼低档位
    
    ClickMenuSetting : 1,       //主菜单点击设置
    ClickFishSetting : 2,       //捕鱼场景点击设置
    
    CompassStarfish : 1,        //海星标识
    CompassLightning : 2,       //闪电标志
    
    TideIntervalTime : 300,     //潮汐前间隔时间，秒
    
	
    FishEscapeTime : 2,         //捕鱼失败，鱼加速逃跑时间，豪秒
    FishEscapeOdds : 20,        //捕鱼失败，鱼加还逃跑受惊机率
    SevenFishEscapeOdds : 100,  //捕鱼失败，乌贼吐墨机率
    FishEscapeTimeV : 2,        //捕鱼失败，鱼加速逃跑的倍速
    TideBgActivityTime : 2.0,   //潮汐来临背景图展现时间（秒）
    TideFishTimesV : 4,         //潮汐来临时鱼倍速游动
    debug : false,               //是否开启debug
    
    NormalCoinAnimationTime : 1.0,  //普通通金币动画播放时间
    HighCoinAnimationTime : 0.5,    //高分金币动画播放时间
    HundredCoinanimationTime : 7.0, //百分鱼金币播放时间
    AchieveAnimationTime : 5.0,     //成就动画播放时间
    LevelUpAnimationTime : 2.0,     //升级动动播放时间
    LaserFireLastTime : 1.5,        //激光发射持续时间
    CoinsLessThan : 10,             //金币数小于10，背景条闪烁
    
    
    ZFishFire : 1010,               //鱼泡等级变化
    ZFishNet : 1020,                //鱼网
    ZCoinMul : 1030,                //金币乘法，金币动画，低分金币
    ZHighPointCoin : 1040,          //高分金币
    ZLaser : 1050,                  //激光
    ZHundredCoin : 1060,            //百分鱼
    ZAchieve : 1070000,             //成就
    ZDialog : 1070001,              //弹出框
    ZBoxAward : 1111111,            //宝箱奖励
    
    //各种tag
    FishTagFire : 999,              //鱼炮
    FishTagBgLayer : 0,             //
    FishTagGameLayer : 1,
    FishTagTopLayer : 2,
    FishTagPayLayer : 4,
    
    DolphinTag : 16,                //购买页，海豚tag
    DolphinCoins : 50000,           //海豚金币
    GlobeCoins : 20000,             //河豚金币
    GlobeFishTag :  17,                //河豚tag
    
    //toplayer中tag
    SysPerMinGiftAdd : 1000,        //系统每分钟赠送的金币，加号
    SysPerMinGiftNumm : 1001,       //系统每分钟赠送的金币，数目
    
    LaserWidth : 70,                
    
    NetPositionRange : 0.7,         //升级撒网参数,网在屏幕的随机位置，屏幕*0.7的位置
    NetIntervalTime : 0.1,          //撒网间隔时间
//     #define NetPositionMixX (Global::instance()->SupposePhoneWinWidth * (1 - NetPositionRange) / 2)   //最小横坐标
// #define NetPositionMaxX (Global::instance()->SupposePhoneWinWidth - NetPositionMixX)              //最大横坐标
// #define NetPositionMixY (Global::instance()->SupposePhoneWinHeight * (1 - NetPositionRange) / 2)  //最小纵坐标
// #define NetPositionMaxY (Global::instance()->SupposePhoneWinHeight - NetPositionMixY)             //最大纵坐标

    //任务参数
    TaskFreshIntervalTime : 1,      //任务刷新音隔（小时）
    StarfishContinueTime : 60,      //海星持续时间（秒）
    
    //宠物站立时间
    PetMoveMixTime : 5,
    PetMoveMaxTime : 7,
    
    //成就参数
    FireHaveFishValue : 5,          //弹无虚发
    
    //持久化相关
    KeyLastUserId : "ShareFishL", //最后一个玩家ID的键
    KeyLastPetId  : "ShareFishP",
    KeyLastTaskId : "ShareFishT",
    KeyLastAchieveId : "ShareFishA",

    KeyUserInfo : "ShareFishL_%d",
    KeyPetInfo : "ShareFishP_%d",
    KeyAchieve : "ShareFishA_%d",
    KeyTask    : "ShareFishT_%d",

    ShareFishNowCoin : "ShareFish1",                    //当前金币数
    ShareFishCostCoin : "SharedFish2",                 //当前花费金币数
    ShareFishGainCoin : "ShareFish3",                  //捕鱼总金币数
    ShareFishLaserRemainCoins : "ShareFish4",         //当前激光剩余金币数
    ShareFishLevelRemainCoins : "ShareFish5",  //当前级别剩余金币数
    ShareFishGameLevel : "ShareFish6",                //游戏玩家等级
    ShareFishNetLevel : "ShareFish7",                  //当前鱼炮级别
    ShareFishMusicSetting : "ShareFish8",          //当前背景音乐设置
    ShareFishSoundSetting : "ShareFish9",          //当前音效设置
    ShareFishParticleSetting : "ShareFish10",    //粒子效果设置

    ShareFishAchieveOnlineTime : "ShareFish11",            //在线时间
    ShareFishAchieveFireHaveFish : "ShareFish12",        //目前弹无虚发
    ShareFishAchieveFireNoFish : "ShareFish13",            //目前临渊羡鱼
    ShareFishAchieveHighFireHaveFish : "ShareFish14",//当前最高弹无虚发
    ShareFishAchieveHighFireNoFIsh : "ShareFish15",    //当前最高临渊羡鱼
    ShareFishAchieveOneLaserCoins : "ShareFish16",      //单次激光收入

    //数量
    ShareFishAchieveCatch1 : "ShareFish17",        //捕1分鱼
    ShareFishAchieveCatch40 : "ShareFish18",        //捕40分乌龟
    ShareFishAchieveCatch100 : "ShareFish19",    //捕百分鱼
    ShareFishAchieveCatch50 : "ShareFish20",      //捕50分鱼
    ShareFishAchieveCatch7 : "ShareFish21",        //捕7分鱼
    ShareFishAchieveCatch60 : "ShareFish22",      //捕60分鱼
    ShareFishAchieveCatch120 : "ShareFish23",    //捕美人鱼
    ShareFishAchieveCatch70 : "ShareFish24",      //捕70分鱼
    ShareFishAchieveCatch150 : "ShareFish25",    //捕150分鱼
    ShareFishAchieveCatchJelly : "ShareFish26",//捕水母
    ShareFishAchieveCatchForge : "ShareFish27",//捕青蛙
    //是否完成
    ShareFishAchieve1Catch100 : "ShareFish28",  //1级炮打到鲨鱼
    ShareFishAchieve1Catch120 : "ShareFish29",  //1级炮打到美人鱼
    ShareFishAchieve1Catch150 : "ShareFish30",  //1级炮打到鲸鱼
    ShareFishAchieve7Catch100 : "ShareFish31",  //7级炮打到鲨鱼
    ShareFishAchieve8Catch120 : "ShareFish32",  //8级炮打到美人鱼
    ShareFishAchieve9Catch150 : "ShareFish33",  //9级炮打到鲸鱼
    ShareFishAchieveHavePet : "ShareFish34",      //家有宠物
    ShareFishAchieveHave4Pet : "ShareFish35",    //家有4宠

    ShareFishTaskCurrentId : "ShareFish36",        //当前任务ID
    ShareFishTaskTimer : "ShareFish37",                //任务时长，已计时时间
    ShareFishTaskCatchNum : "ShareFish38",          //任务捕鱼数量
    ShareFishTaskAcceptId : "ShareFish39",          //可接任务ID

    ShareFishPropYulei : "ShareFish40",                //当前鱼雷个数
    ShareFishPropLunpan : "ShareFish41",              //当前轮盘个数
    ShareFishPropStarfish : "ShareFish42",          //当前海星个数
    ShareFishStarfishTime : "ShareFish43",          //当前海星倒计时

    ShareFishPetIsUsing : "ShareFish44",              //当前宠物是否使用
    ShareFishNewGameId : "ShareFish45",                //是否有新游戏

    ShareFishMusicOn : "ShareFish46", //音乐是否开启
    ShareFishSoundOn : "ShareFish47", //音效是否开启
    ShareFishParticleOn : "ShareFish48",  //粒子是否开启

    ShareFishAchieveCatchFlyFish : "ShareFish49",      //累计捕飞鱼
    ShareFishPropLightning : "ShareFish50",           //当前闪电
    ShareFishShowLightnign : "ShareFish51",   
    ShareFishLastSysAddCointTime : "ShareFish52",     //上次系统增加金币的时间

    ShareFishLastTaskId : "ShareFish53",          //最后一个任务的ID
    ShareFishLastTaskTime : "ShareFish54",        //上次任务完成时间
    ShareFishCompleteTaskNum : "ShareFish55",     //完成任务个数

    ShareFishOrderNeverShow : "ShareFish56",                 //是否选择不要显示评分
    ShareFishBeginTime : "Sharefish57",           //第一次开始游戏的时间

    //成就是否完成
    ShareFishAchieveCompleteCatch1 : "ShareFish58",   //是否完成捕一分鱼
    ShareFishAchieveCompleteCatch7 : "ShareFish59",   //是否完成捕乌贼
    ShareFishAchieveCompleteCatch35 : "ShareFish60",  //是否完成捕水母
    ShareFishAchieveCompleteCatch40 : "ShareFish61",  //是否完成捕40分
    ShareFishAchieveCompleteCatch50 : "ShareFish62",  //是否完成捕50分
    ShareFishAchieveCompleteCatch60 : "ShareFish63",  //是否完成捕60分
    ShareFishAchieveCompleteCatch70 : "ShareFish64",  //是否完成捕70分
    ShareFishAchieveCompleteCatch100 : "ShareFish65", //是否完成捕100分
    ShareFishAchieveCompleteCatch120 : "ShareFish66", //是否完成捕120分
    ShareFishAchieveCompleteCatch150 : "ShareFish67", //是否完成捕150分
    ShareFishAchieveCompleteCatchForg : "ShareFish68",//是否完成捕蛙
    ShareFishAchieveCompleteCatch45 : "ShareFish69",  //是否完成捕飞鱼


    ShareFishLastAwardTime : "ShareFish70",   //上次给登录奖励时间

    ShareFishAchieveCompleteCatchGoldTurtle : "ShareFish71",  //是否完成捕黄金龟
    ShareFishAchieveCatchGoldTurtle : "ShareFish72",  //捕黄金龟数

    ShareFish1CatchGold : "ShareFish73",  //一级炮打到黄金龟
    ShareFishCatchGold : "ShareFish74",   //打到宝箱

    ShareFishFish20 : "ShareFish75",      //是否购买了海豚
    ShareFishFish21 : "ShareFish76",      //是否购买了河豚

    ShareFishCatchDolpin : "ShareFish77",     //捕到海豚数目
    ShareFishCatchGlobeFish : "ShareFish78",     //捕到河豚数目

    TableNameAchieve : "fish_user_achieve",   //成就表
    TableNameTask : "fish_user_task",         //任务表
    TableNamePet : "fish_user_pet",           //宠物表
    TableNameUser : "fish_user_info",         //人物表
    TableNameSetting : "fish_user_setting",   //设置表

};

var GameConsts = {
	FishState : {
		FishOut : 0,
    	FishRun : 1,
    	FishCatched : 2,
    	FishLightning : 3   //被闪电炮抓住
	},
	FishType : {
		FishOne_ : 1,
    	FishTwo_ : 2,
	    FishFour_ : 3,
    	FishSeven_ : 4,
    	FishTen_ : 5,
    	FishTwenty_ : 6,
    	FishThirty_ : 7,
    	FishForty_ : 8,
    	FishFifty_ : 9,
    	FishSixty_ : 10,
    	FishHundred_ : 11,
    	FishSeventy_ : 12,               //剑鱼
    	FishOneHundredAndFifty_ : 13,    //鲸鱼
    	FishJellyFish_ : 14,             //水母
    	FishOneHundredAndTwenty_ : 15,   //美人鱼 
    	FishItem_ : 16,                 //鱼怪
    	FishFly_ : 17,                   //飞鱼
    	FishGoldTurtle_ : 18,             //黄金龟
    	FishDolphin_ : 19,               //海豚
    	FishGlobefish_ : 20,               //河豚
	},
    PetType : {
        PetTypePenguin : 1, //企鹅
        PetTypeCat : 2,     //猫
        PetTypeSeal : 3,    //海豹
        PetTypeBear : 4     //极熊
    },
    FishMessageType : {
        FishMessageBullet : 1,          //捕鱼
        FishMessageAddFire : 2,         //增加鱼炮等级
        FishMessageSubFire : 3,         //减少鱼炮等级
        FishMessageAddCoin : 4,         //加金币
        FishMessageSubCoin : 5,         //减金币
        FishMessageLaser : 6,           //发射激光
        FishMessageCoinAni : 7,         //金币动画
        FishMessageRipple : 8,          //点击捕鱼水波
        FishMessageFlicker : 9,         //金币背景条闪烁，当金币小于10个
        FishMessageAchieve : 10,        //成就动画显示
        FishMessageYulei : 11,          //鱼雷
        FishMessageHaiXing : 12,        //海星粒子
        FishMessageBuyHaixing : 13,     //购买海星
        FishMessageBuyYulei : 14,       //购买鱼雷
        FishMessageLaserFire : 15,      //出激光炮
        FishMessageBuyLightning : 16,   //购买闪电炮
        FishMessageLightningFire : 17,  //使用闪电炮
        FishMessageAddLevel : 18,       //增加等级
	    FishMessageShowNotice : 19,		//显示公告
        FishMessageAtom : 20,           //原子炮
        FishMessageCatchGoldTurtle : 21,    //捕到黄金龟
        FishMessageBuyAtom : 22,        //购买原子炮
        FishMessageBuyFish : 23,        //购买新鱼
    },
    
    ////子弹状态
    BulletState : {
        BulletOut : 0,
        BulletRun : 1,      //运行中
        BulletOpen : 2,     //打开中
        BulletCatched : 3   //已捕获
    },
    
    //数据统计
    DatacenterType:{
    	DataStartGame : 1,		//开始游戏
	   DataEndGame : 2,		//结束游戏
    },


    FishDialogId : {
        FishDialogCode : 1,         //活动码
        FishDialogVersion : 6,      //版本更新
        FishDialogRefreshTask : 9,  //刷新任务
        FishDialogChargePet : 13,   //兑换宠物
        FishDialogResetTask : 15,   //重置任务
        FishDialogBuyFishDolphin : 16,  //购买海豚
        FishDialogBuyFishGlobe : 17,    //购买河豚
    },



    //购买类型
    FishBuyType : {
        FishBuyTypeCoin : 1,        //金币
        FishBuyTypeStarfish : 2,    //海星
        FishBuyTypeYulei : 3,       //鱼雷
        FishBuyTypeLightning : 4,   //闪电
        FishBuyTypePenguin : 5,     //企鹅
        FishBuyTypeCat : 6,         //猫
        FishBuyTypeSeal : 7,        //海豹
        FishBuyTypeBear : 8,        //熊
        FishBuyTypeDolphin : 9,     //海豚
        FishBuyTypeAtom : 10,       //原子炮
        FishBuyTypeGlobefish : 11,  //河豚
    },

    //音乐
    MusicType : {
        MusicCoinAnimate : 1,       //金币动画
        MusicCoinsNone : 2,         //没有金币
        MusicFire : 3,              //发射子弹
        MusicFireChange : 4,        //更换鱼炮
        MusicHighPoints : 5,        //打到高分鱼，40，50等
        MusicHundredPoints : 6,     //百分鱼
        MusicLaserPush : 7,         //推出激光
        MusicLaserFire : 8,         //发射激光
        MusicLaserWait : 9,         //等待发射激光
        MusicLevel : 10,            //升级
        MusicOpenNet : 11,          //打开鱼网
        MusicSystemCoins : 12,      //系统给的金币
        MusicPause : 13,            //暂停
        MusicTide : 14,             //潮汐前的海浪
        MusicSeamaid : 15,          //美人鱼
        MusicAchieve : 16,          //成就
        MusicCamera : 17,           //照相截屏
        MusicYuleiFire : 18,        //鱼怪1发射
        MusicYuleiPush : 19,        //鱼怪1装载
        MusicLunpanSpin : 20,       //点击转轮转动声
        MusicMonster1 : 21,         //打到怪物1青蛙 
        MusicSpinCoin : 22,         //转轮获得金钱
        MusicSpinYulei : 23,        //转轮获得鱼雷
        Musiclunpanbt : 24,         //轮盘按钮声
        MusicLunpanCoin : 25,       //转轮获得金钱
        MusicLunpanYuleiLuodai : 26,//转轮获得鱼雷回滚落袋声音
        MusicLunpanLuodai : 27,     //捕捉到鱼怪回落
        MusicSpinStarfish : 28,     //转轮获得海星
        MusicLunpanStarfishLuodai : 29,//转轮获得海星回滚落袋声音
        MusicStarfishBt : 30,       //点击海星
        MusicPetLevelup : 31,       //宠物升级
        MusicPetPenguin : 32,       //宠物企鹅
        MusicPetBear : 33,          //宠物北极熊
        MusicPetCat : 34,           //宠物猫
        MusicPetSeal : 35,          //宠物海豹
        MusicSpinLightning : 36,    //轮盘获得闪电炮
        MusicLunpanLightingLuodai : 37,
        MusicLightning : 38,
        MusicBoxDown : 39,               //宝箱掉落
        MusicLayCard : 40,               //出牌
        MusicClickCard : 41,              //点牌
        MusicDolphinCatch : 42           //捕到海豚
    },



    FishFactoryType : {
        FishFactoryLow : 0,
        FishFactoryNormal : 1,
        FishFactoryHigh : 2
    },

    //任务状态
    FishTaskStatus : {
        FishTaskCompleted : 1,  //完成
        FishTaskCompleting : 2, //进行中
        FishTaskFail : 3,       //失败或放弃
        FishTaskDelete : 4,     //删除的任务
    },


    //购买页tag
    MyMenuType : {
        MenuHaixing : 6,
        MenuYulei : 7,
        MenuLighting : 8,
    },

    //成就类型
    FishAchieveType : {
        AchieveOnline : 1,      //游戏在线时间
        AchieveCoins : 2,       //捕鱼获得金币数
        AchieveLevel : 3,       //游戏等级
        AchieveHaveFish : 4,    //弹无虚发
        AchieveNoFish : 5,      //临渊羡鱼
        AchieveBulletConsume : 6,//子弹消耗
        AchieveLaserGain : 9,   //单次激光收入
        AchieveOneFireHundred : 10, //一炮打到鲨鱼
        AchieveSumOne : 11,     //累计捕一分鱼
        AchieveSumSixty : 12,   //累计捕60分鱼
        AchieveSumForty : 13,   //累计捕40分鱼
        AchieveSumHundred : 14, //累计捕100分鱼
        AchieveSumFifty : 15,   //累计50分鱼
        AchieveSumSeven : 16,   //累计7分鱼
        AchieveSum120 : 17,     //累计美人鱼
        AchieveSumSeventy : 18,    //累计70分鱼
        AchieveSum150 : 19,     //累计鲸鱼
        AchieveSumJellyfish : 20,  //累计水母
        AchieveOneFireMermaid : 21,//一炮打到美人鱼
        AchieveOneFireWhale : 22,  //一炮打到鲸鱼
        AchieveSevenFire100 : 23,   //7级炮打到鲨鱼
        AchieveEightFire120 : 24,   //8级炮打到美人鱼
        AchieveNineWhale : 25,      //9级炮打到鲸鱼
        AchieveTask : 26,       //累计完成任务
        AchieveOneNetCatchType : 27,//单网捕鱼种类
        AchieveOneNetCatchNum : 28,//单网捕鱼数量
        AchieveOneTorpedoCatchFishs : 29,//单颗鱼雷捕鱼金币
        AchieveSumForg : 30,    //累计青蛙
        AchievePet : 31,        //带着宠物开始捕鱼
        AchievePetLevel10 : 32, //宠物升到10级
        AchieveFourPet : 33,    //成功召唤4个宠物
        AchieveAllPetLevel10 : 34,//4个宠物都升到10级
        AchieveLightningCatchCoin : 35, //闪电炮捕鱼金币
        AchieveLightningCatchNum : 36,  //闪电炮捕鱼数量
        AchieveCatchSumFly : 37,        //累计捕捉飞鱼
        Achieve1CatchGoldTurtle : 38,   //一级炮打到黄金龟
        AchieveCatchGoldTurtle : 39,    //获得宝箱
        AchieveCatchDolphins : 40,//捕海豚
        AchieveCatchGlobeFish : 41, //捕河豚
        AchieveCatchAtom : 42,    //原子炮捕鱼金币
    },

    //每日奖励类型
    AwardType : {
        AwardExp : 1,           //经验
        AwardCoin : 2,          //金币
        AwardLaserExp : 3,      //激光经验
        AwardCorona : 4,        //轮盘
        AwardStarfish : 5,      //海星
        AwardTorpedo : 6,       //鱼雷
        AwardLightning : 7,     //闪电炮
        AwardBox : 8,           //宝箱
        AwardAtom : 9,          //原子炮
        AwardPenguin : 10,      //企鹅
        AwardCat : 11,          //猫
        AwardSeal : 12,         //海豹
        AwardBear : 13          //熊
    },
    
};

//一些全局变量
var Global = {
    //系统
	now : new Date(),
    Scale : 1.0,
    ScaleFit : 1.0,
	fishX : 0,
	fishY : 0,
    retina : true,
    
    //数据库id生成器
    dbAchieveId : 1, //用于数据库，生成成就的id
    dbTaskId : 1,
    dbPetId : 1,
    dbUserId : 1,
    
    
    pathW : GameConfig.SupposeWidth / GameConfig.PathWidth,     //路径计算的比值
    pathH : GameConfig.SupposeHeight / GameConfig.PathHeight,
    
    //常用变量
    bgId : 1,	//背景id
    gamep : 0,                   //捕鱼总机率
    tideId : -1,	    //记录当前是否是，-1表示无潮汐，-2表示不需要替换
    
    fishFactoryState : GameConsts.FishFactoryType.FishFactoryNormal,
    
    //公共变量
    topLayer : null,
    gameLayer : null,
    bgLayer : null,
    
    //设置
    showParticle : true,
    musicOn : true,     //音乐是否开启
    effectOn : true,    //音效是否开启
    showCompass : false,    //轮盘显示标志
    showAward : false,      //每日登录是否显示
    showDialog : false, //是否显示弹出框

	//玩家
	level : 1,		//玩家等级
    fireLevel : 1,
    fireMaxLevel : 7,   //鱼炮最高等级
    usePet : 0,         //当前使用的宠物,未使用为0
    nowCoin : 1000,     //
    costCoin : 0,       //花销的金币数，与发射子弹消耗金币相关
    gainCoin : 0,       //捕鱼得到的金币数，与上面的等级进度条和下面的激光进度条相关
    nowLaserRemainCoins : 0,//当前激光剩余金币，与下面的激光进度条相关
    nowLevelRemainCoins : 0,//当前级别剩余金币，与上面等级进度条相关
    laserProgress : 100000000000,  ////激光进度条需要的金币数 
    
    choosePet : 0,      //当前选择的宠物，默认为企鹅
    petPenguinGetType : 0,  //1 兑换，2购买
    petPenguinLevel : 0,    
    petPenguinExp : 0,
    
    petCatGetType : 0,
    petCatLevel : 0,
    petCatExp : 0,
    
    petSealGetType : 0,
    petSealLevel : 0,
    petSealExp : 0,
    
    petBearGetType : 0,
    petBearLevel : 0,
    petBearExp : 0,
    
    fish20 : false,                //是否购买了海豚
    fish21 : false,                //是否购买了河豚
    
    lastSysAddCointTime : 0,     //上次系统增加金币的时间
    lastAwardTime : 0,           //上次给予登录奖励的时间
    onlineTime : 0,              //游戏在线时间，原TopLayer
    starFishTime : 0,            //海星倒计时时间
    propYulei : 0,               //鱼雷个数
    propLunpan : 1,              //轮盘个数
    propStarFish : 2,            //海星个数
    propBox : 0,                 //宝箱个数
    propAtom : 0,               //原子炮个数
    propLightning : 1,
    showPropYulei : 0,           //显示鱼雷个数
    showPropLunpan : 1,          //显示轮盘个数
    showPropStarFish : 2,        //显示海星个数
    showPropBox : 0,             //显示宝箱个数
    showPropLightning : 1,
    showPropAtom : 0,           //显示原子炮
    
    haveYuleiFlag : false,          //鱼雷是否上架标志
    haveAtomFlag : false,           //原子炮是否显示
    atomOpen : false,               //原子炮是否打开
    changeFireFlag : false,         //点击鱼炮标志
    haveLightningFlag : false,
    delayLightingFlag : false,
    petFlag : false,                //宠物
    laserFlag : false,              //激光标志
    
    lightningCatchFishNum : 0,      //
    lightningDelay : 0.0,   
    
    
    laserHaveFishCoins : 0,      //成就，激光哥
    fireHaveFish : 0,            //成就，弹无虚发
    fireNoFish : 0,              //成就，临渊羡鱼
    catchOneCount : 0,           //捕一分鱼
    catchSevenCount : 0,         //捕7分鱼
    catchFortyCount : 0,         //捕40分鱼
    catchFiftyCount : 0,         //捕50分鱼
    catchSixtyCount : 0,         //捕60分鱼
    catchHundredCount : 0,        //捕100分鱼
    catchHundredAndTwentyCount : 0,//捕美人鱼
    catchSeventyCount : 0,       //捕剑鱼
    catchHundredAndFiftyCount : 0,//捕鲸鱼
    catchJellyFishCount : 0,     //捕水母
    catchForgCount : 0,          //捕青蛙
    catchFlyCount : 0,           //捕飞鱼
    catchGoldTurtle : 0,         //捕黄金龟
    catchDolphin : 0,            //捕海豚
    catchGlobleFish : 0,         //捕河豚
    catchFishFlag : false,          //捕鱼机率标志原GameScene
    laseringFlag : false,              //激光射中标志
    seamaidCatched : false,          //美人鱼被抓标志，抓到美人鱼，新的潮汐鱼规则
    
    highestFireHaveFish : 0,    //弹无虚发
    highestFireNoFish : 0,      //临渊羡鱼
    highestOneLaserCoins : 0,   //单次激光收入
    
    achieveIsDisplay : false,   //成就是否显示
    
    atomt : 0,                  //原子炮打开的时间
    
    //任务
    acceptTaskDBId : 0,     //当前接受的任务数据库ID,原FishTaskScreen中
    currentTaskId : 0,      //当前任务ID，原FishTaskImpl中
    taskTimer : 0,          //任务计时时长，已经计时的时间
    taskCatchFishesNum : 0, //任务捕鱼数量
    taskCatchFishesType : 0,//任务捕鱼类型
    taskType : false,          //计时任务true,正常任务false
    acceptTaskId : 0,       //可接任务ID，新任务每次领取相同的任务
    taskLastTime : 0,       //任务持续时间
    
    lastTaskId : 0,         //最后一个任务的ID
    lastTaskTime : 0,      //上次完成任务的时间
    completeTaskNum : 0,    //完成任务个数
    
    
    
    
    //数据
    normal : [
    [26.25,20.0,10.0,2.0,2.0,0.59,0.5,0.4,0.3,0.24,0.09,0.19,0.05,0.45,0.1,0.2,0.31,0.12,0.15,1.3],
    [33.6,25.0,15.0,3.0,5.0,1.98,1.49,0.99,0.69,0.48,0.23,0.38,0.09,1.29,0.24,0.5,0.71,0.3,0.34,3.49],
    [36.75,32.0,30.0,4.0,8.0,3.47,2.18,1.49,1.09,0.71,0.37,0.62,0.18,1.88,0.38,0.8,1.11,0.48,0.54,5.74],
    [49.35,43.0,38.5,5.0,11.0,4.46,2.97,1.98,1.29,0.95,0.46,0.86,0.28,2.48,0.47,1.0,1.31,0.6,0.72,7.7],
    [61.95,54.0,48.0,6.0,14.0,5.94,4.16,2.57,1.78,1.19,0.55,1.05,0.37,3.37,0.56,1.2,1.81,0.72,0.88,10.0],
    [74.55,64.0,55.7,7.0,17.0,7.92,5.45,3.76,2.28,1.43,0.69,1.33,0.51,4.55,0.7,1.5,2.31,0.9,1.1,12.5],
    [87.15,75.0,65.0,8.0,25.0,9.9,6.93,5.35,3.17,1.66,0.92,1.55,0.69,6.14,0.84,1.8,3.21,1.08,1.35,17.5],
    [89.25,77.0,67.0,9.0,25.5,10.89,7.92,6.14,4.16,1.9,1.1,1.71,0.87,7.13,1.01,1.9,4.21,1.14,1.54,18.2],
    [91.35,79.0,69.0,10.0,26.0,11.88,8.91,6.93,5.15,2.14,1.29,1.9,1.06,8.12,1.1,1.95,5.19,1.17,1.75,19.0],
    [93.45,80.0,70.0,11.0,26.5,12.87,9.9,7.72,6.14,2.38,1.38,2.09,1.15,9.11,1.2,2.0,6.24,1.2,1.9,19.7],
    [94.55,81.0,71.0,11.5,27.0,13.46,10.5,8.41,6.95,2.61,1.47,2.28,1.24,10.1,1.29,2.1,7.12,1.26,2.1,20.2],
    [96.0,83.0,72.0,12.0,28.0,14.15,11.0,9.0,7.74,2.83,1.56,2.47,1.33,11.1,1.3,2.79,8.0,1.67,2.2,21],
    ],
    
    petAdd : [
    [ 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0 ],
    [ 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0 ],
    [ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0, 14.0, 16.0, 18.0, 20.0 ],
    [ 5.0, 10.0, 15.0, 20.0, 25.0, 30.0, 35.0, 40.0, 45.0, 50.0 ]
    ],

    petExp : [
        [ 7500, 10500, 14700, 20580, 28812, 40337, 56472, 79061, 110685,
            154959 ],
        [ 8600, 12040, 16856, 23598, 33037, 46252, 64753, 90654, 126916,
            177682 ],
        [ 10900, 15260, 21364, 29910, 41874, 58624, 82074, 114904, 160866,
            225212 ],
        [ 13200, 18480, 25872, 36221, 50709, 70993, 99390, 139146, 194804,
            272726 ]
    ],

    petNet: [[1,5,20],[2,5,20],[3,6,20],[4,6,20],[5,7,20],[6,7,20],[7,8,20],[8,8,20],[9,9,20],[10,9,20]],

    levelAndNetPar : [[1,1238,1238,5,20],[2,1354,2592,5,20],[3,1481,4073,5,20],[4,1620,5693,5,20],[5,1773,7466,5,20],[6,1939,9405,5,20],[7,2122,11527,5,20],[8,2321,13848,5,20],[9,2539,16387,5,20],[10,2778,19165,5,20],[11,3039,22204,6,20],[12,3325,25529,6,20],[13,3637,29166,6,20],[14,3979,33145,6,20],[15,4353,37498,6,20],[16,4762,42260,6,20],[17,5210,47470,6,20],[18,5700,53170,6,20],[19,6235,59405,6,20],[20,6821,66226,6,20],[21,7463,73689,6,20],[22,8164,81853,6,20],[23,8932,90785,6,20],[24,9771,100556,6,20],[25,10690,111246,6,20],[26,11694,122940,6,20],[27,12794,135734,6,20],[28,13996,149730,6,20],[29,15312,165042,6,20],[30,16751,181793,6,20],[31,18326,200119,6,20],[32,20049,220168,6,20],[33,21933,242101,6,20],[34,23995,266096,6,20],[35,26250,292346,6,20],[36,28718,321064,6,20],[37,31417,352481,6,20],[38,34371,386852,6,20],[39,37601,424453,6,20],[40,41136,465589,6,20],[41,45003,510592,7,22],[42,49233,559825,7,22],[43,53861,613686,7,22],[44,58924,672610,7,22],[45,60220,732830,7,22],[46,61545,794375,7,22],[47,62899,857274,7,22],[48,64283,921557,7,22],[49,65697,987254,7,22],[50,67142,1054396,7,22],[51,68619,1123015,8,22],[52,70129,1193144,8,22],[53,71672,1264816,8,22],[54,73249,1338065,8,22],[55,74860,1412925,8,22],[56,76507,1489432,8,22],[57,78190,1567622,8,22],[58,79910,1647532,8,22],[59,81668,1729200,8,22],[60,83465,1812665,8,22],[61,85301,1897966,9,24],[62,87178,1985144,9,24],[63,89096,2074240,9,24],[64,91056,2165296,9,24],[65,93059,2258355,9,24],[66,95106,2353461,9,24],[67,97199,2450660,9,24],[68,99337,2549997,9,24],[69,101523,2651520,9,24],[70,103756,2755276,9,24],[71,106039,2861315,9,24],[72,108372,2969687,9,24],[73,110756,3080443,9,24],[74,113192,3193635,9,24],[75,115683,3309318,9,24],[76,118228,3427546,9,24],[77,120829,3548375,9,24],[78,123487,3671862,9,24],[79,126204,3798066,9,24],[80,128980,3927046,9,24],[81,131818,4058864,9,26],[82,134718,4193582,9,26],[83,137681,4331263,9,26],[84,140710,4471973,9,26],[85,143806,4615779,9,26],[86,146970,4762749,9,26],[87,150203,4912952,9,26],[88,153507,5066459,9,26],[89,156885,5223344,9,26],[90,160336,5383680,9,26],[91,327727,5711407,10,28],[92,334937,6046344,10,28],[93,342306,6388650,10,28],[94,349836,6738486,10,28],[95,357533,7096019,10,28],[96,365398,7461417,11,30],[97,373437,7834854,11,30],[98,381653,8216507,11,30],[99,390049,8606556,11,30]],
	
	//初始化
	init : function(){
		// Math.seedrandom(this.now);
	},
	
	maxFireLevel : function(){
        var level = this.level;
        if(level < 15){
            this.fireMaxLevel = 7;
        }else if(level >= 15 && level < 25){
            this.fireMaxLevel = 8;
        }else if(level >= 25 && level < 35){
            this.fireMaxLevel = 9;
        }else if(level >= 35 && level < 45){
            this.fireMaxLevel = 10;
        }else if(level >= 45 && level < 55){
            this.fireMaxLevel = 11;
        }else if(level >= 55){
            this.fireMaxLevel = 12;
        }
    },
	preloadSetting : function(){
        //加载设置
        this.maxFireLevel();
    },

    preloadPlist2 : function(){
        //鱼
        cc.spriteFrameCache.addSpriteFrames("res/plist/fish1.plist");
    },
    preloadPlist3 : function(){
        //宠物
        this.preloadPetPlist();
    },

    //宠物相关
    preloadPetPlist : function(){
        if(this.usePet == GameConsts.PetType.PetTypePenguin){
            if(this.petPenguinLevel <= 3){
                cc.spriteFrameCache.addSpriteFrames("res/plist/pet_penguin1.plist");
            }else if(this.petPenguinLevel > 3 && this.petPenguinLevel <= 6){
                cc.spriteFrameCache.addSpriteFrames("res/plist/pet_penguin2.plist");
            }else{
                cc.spriteFrameCache.addSpriteFrames("res/plist/pet_penguin3.plist");
            }
        }else if(this.usePet == GameConsts.PetType.PetTypeCat){
            if(this.petCatLevel <= 3){
                cc.spriteFrameCache.addSpriteFrames("res/plist/pet_cat1.plist");
            }else if(this.petCatLevel > 3 && this.petCatLevel <= 6){
                cc.spriteFrameCache.addSpriteFrames("res/plist/pet_cat2.plist");
            }else{
                cc.spriteFrameCache.addSpriteFrames("res/plist/pet_cat3.plist");
            }
        }else if(this.usePet == GameConsts.PetType.PetTypeSeal){
            if(this.petSealLevel <= 3){
                cc.spriteFrameCache.addSpriteFrames("res/plist/pet_seal1.plist");
            }else if(this.petSealLevel > 3 && this.petSealLevel <= 6){
                cc.spriteFrameCache.addSpriteFrames("res/plist/pet_seal2.plist");
            }else{
                cc.spriteFrameCache.addSpriteFrames("res/plist/pet_seal3.plist");
            }
        }else if(this.usePet == GameConsts.PetType.PetTypeBear){
            if(this.petBearLevel <= 3){
                cc.spriteFrameCache.addSpriteFrames("res/plist/pet_bear1.plist");
            }else if(this.petBearLevel > 3 && this.petBearLevel <= 6){
                cc.spriteFrameCache.addSpriteFrames("res/plist/pet_bear2.plist");
            }else{
                cc.spriteFrameCache.addSpriteFrames("res/plist/pet_bear3.plist");
            }
        }
    },

    //删除宠物plist
    removePetPlist : function(petType){
        if(this.usePet == GameConsts.PetType.PetTypePenguin){
            cc.spriteFrameCache.removeSpriteFramesFromFile("res/plist/pet_penguin1.plist");
            cc.spriteFrameCache.removeSpriteFramesFromFile("res/plist/pet_penguin1.plist");
            cc.spriteFrameCache.removeSpriteFramesFromFile("res/plist/pet_penguin1.plist");
        }else if(this.usePet == GameConsts.PetType.PetTypeCat){
            cc.spriteFrameCache.removeSpriteFramesFromFile("res/plist/pet_cat1.plist");
            cc.spriteFrameCache.removeSpriteFramesFromFile("res/plist/pet_cat2.plist");
            cc.spriteFrameCache.removeSpriteFramesFromFile("res/plist/pet_cat3.plist");
        }else if(this.usePet == GameConsts.PetType.PetTypeSeal){
            cc.spriteFrameCache.removeSpriteFramesFromFile("res/plist/pet_seal1.plist");
            cc.spriteFrameCache.removeSpriteFramesFromFile("res/plist/pet_seal2.plist");
            cc.spriteFrameCache.removeSpriteFramesFromFile("res/plist/pet_seal3.plist");
        }else if(this.usePet == GameConsts.PetType.PetTypeBear){
            cc.spriteFrameCache.removeSpriteFramesFromFile("res/plist/pet_bear1.plist");
            cc.spriteFrameCache.removeSpriteFramesFromFile("res/plist/pet_bear2.plist");
            cc.spriteFrameCache.removeSpriteFramesFromFile("res/plist/pet_bear3.plist");
        }
    },

    preloadPlist4 : function(){
        //水草贝売
        cc.spriteFrameCache.addSpriteFrames("res/plist/haicao.plist");
    },
    preloadPlist5 : function(){
        //美人鱼
        cc.spriteFrameCache.addSpriteFrames("res/plist/fish2.plist");
    },

    //水母剑鱼等
    preloadPlist6 : function(){
        //鲨鱼
        cc.spriteFrameCache.addSpriteFrames("res/plist/fish3.plist");
        cc.spriteFrameCache.addSpriteFrames("res/plist/goldturtle.plist");
        if(this.fish20){
            cc.spriteFrameCache.addSpriteFrames("res/plist/fish20.plist");
        }
        
        if(this.fish21){
            cc.spriteFrameCache.addSpriteFrames("res/plist/fish21.plist");
        }
    },

    //美人鱼
    preloadPlist7 : function(){
        if(this.level >= 10){
            cc.spriteFrameCache.addSpriteFrames("res/plist/shuimu.plist");        
        }
        if(this.level >= 20){
            cc.spriteFrameCache.addSpriteFrames("res/plist/jianyu.plist");
        }
        if(this.level >= 30){
            cc.spriteFrameCache.addSpriteFrames("res/plist/jingyu.plist");
            cc.spriteFrameCache.addSpriteFrames("res/plist/jingyu2.plist");
        }
        if(this.level >= 40){
            cc.spriteFrameCache.addSpriteFrames("res/plist/flyfish.plist");
        }
    },
    preloadPlist8 : function(){
        //鱼怪
        cc.spriteFrameCache.addSpriteFrames("res/plist/fish4.plist");
    },
    
    preloadEffectMusic : function(){

    // bgMusic = "raw/menubg.mp3";
	
	// #if (CC_TARGET_PLATFORM == CC_PLATFORM_WIN32)
	// string suffix="mp3";
	// #endif  // CC_PLATFORM_WIN32
	// #if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
	// string suffix="caf";
	// #endif  // CC_PLATFORM_IOS

	// #if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
	// string suffix="ogg";
	// #endif  // CC_PLATFORM_ANDROID
	
    // SoundUtil::preloadEffect((string("raw/achieve.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/camera.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/coinanimate.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/coinsnone.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/fire.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/firechange.")+suffix).c_str());
    
    // SoundUtil::preloadMusic("raw/fishbg1.mp3");
    
    // SoundUtil::preloadMusic("raw/fishbg2.mp3");

	// SoundUtil::preloadMusic("raw/fishbg3.mp3");
    
    // SoundUtil::preloadEffect((string("raw/highpoints.")+suffix).c_str());
    
    // SoundUtil::preloadEffect("raw/hundredpoints.mp3");
    
    // SoundUtil::preloadEffect((string("raw/laserfire.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/laserpush.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/laserwaitfire.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/level.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/lightning.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/lightningluodai.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/lunpanbt.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/lunpangetcoin.")+suffix).c_str());
    
    // SoundUtil::preloadEffect(string(("raw/lunpanluodai.")+suffix).c_str());
    
    // SoundUtil::preloadEffect("raw/lunpanspin.mp3");
    
    // SoundUtil::preloadEffect((string("raw/lunpanstarfishluodai.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/lunpanyulei1luodai.")+suffix).c_str());
    
    // SoundUtil::preloadMusic("raw/menubg.mp3");
    
    // SoundUtil::preloadEffect((string("raw/monster1.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/opennet.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/pause.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/petbear.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/petcat.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/petlevelup.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/petpenguin.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/petseal.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/seamaid.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/spinlightning.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/spinstarfish.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/spinyulei1.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/starfishbt.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/syspermincoins.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/tide.")+suffix).c_str());
    
    // SoundUtil::preloadMusic("raw/tidebg1.mp3");
    
    // SoundUtil::preloadEffect((string("raw/yulei1fire.")+suffix).c_str());
    
    // SoundUtil::preloadEffect((string("raw/yulei1push.")+suffix).c_str());
    },
    preloadDone : function(){
        // GameTool::reportMemory();
        // bulletHeight[0] = CCSprite::spriteWithFile("images/plist/bullet/bullet01.png")->getContentSize().height;
        // bulletHeight[1] = CCSprite::spriteWithFile("images/plist/bullet/bullet02.png")->getContentSize().height;
        // bulletHeight[2] = CCSprite::spriteWithFile("images/plist/bullet/bullet03.png")->getContentSize().height;
        // bulletHeight[3] = CCSprite::spriteWithFile("images/plist/bullet/bullet04.png")->getContentSize().height;
        // bulletHeight[4] = CCSprite::spriteWithFile("images/plist/bullet/bullet05.png")->getContentSize().height;
        // bulletHeight[5] = CCSprite::spriteWithFile("images/plist/bullet/bullet06.png")->getContentSize().height;
        // bulletHeight[6] = CCSprite::spriteWithFile("images/plist/bullet/bullet07.png")->getContentSize().height;
        // bulletHeight[7] = CCSprite::spriteWithFile("images/plist/bullet/bullet08.png")->getContentSize().height;
        // bulletHeight[8] = CCSprite::spriteWithFile("images/plist/bullet/bullet09.png")->getContentSize().height;
        // bulletHeight[9] = CCSprite::spriteWithFile("images/plist/bullet/bullet010.png")->getContentSize().height;
        // bulletHeight[10] = CCSprite::spriteWithFile("images/plist/bullet/bullet011.png")->getContentSize().height;
        // bulletHeight[11] = CCSprite::spriteWithFile("images/plist/bullet/bullet012.png")->getContentSize().height;
    
        // //加载成就
        // FishLocalAchieve::loadSysAchieve();
    },
    
    //计算是否可以替换鱼，fishType为要替换为的鱼的类型
    calcReplaceFish : function(oldFishType, fishType){
        var result = false;
        if(this.tideId == -1 || this.tideId == 7 || this.tideId == 8){
            var rand = GameTool.createRand(1, 100);
            if(fishType == GameConsts.FishType.FishDolphin_ && this.fish20){
                if(oldFishType == GameConsts.FishType.FishSeventy_){
                    if(rand <= 20){
                        result = true;
                    }
                }else if(oldFishType == GameConsts.FishType.FishHundred_){
                    if(rand <= 20){
                        result = true;
                    }
                }else if(oldFishType == GameConsts.FishType.FishOneHundredAndTwenty_){
                    if(rand <= 20){
                        result = true;
                    }
                }else if(oldFishType == GameConsts.FishType.FishOneHundredAndFifty_){
                    if(rand <= 20){
                        result = true;
                    }
                }
            }else if(fishType == GameConsts.FishType.FishGlobefish_ && this.fish21){
                if(oldFishType == GameConsts.FishType.FishTwenty_){
                    if(rand <= 20){
                        result = true;
                    }
                }else if(oldFishType == GameConsts.FishType.FishThirty_){
                    if(rand <= 20){
                        result = true;
                    }
                }else if(oldFishType == GameConsts.FishType.FishJellyFish_){
                    if(rand <= 20){
                        result = true;
                    }
                }else if(oldFishType == GameConsts.FishType.FishFifty_){
                    if(rand <= 10){
                        result = true;
                    }
                }
            }
        }
        return result;
    },
    
    fireScale : function(){
        
    },
    
    subCoin : function(){
        
    },
    
    //捕鱼增加金币，1捕鱼获得，2系统赠送
    addCoinBy : function(addCoin, coinType){
    },
    
    //得到捕获命中率
    getProb : function(fishType, netLevel){
        var gameptmp = this.gamep;
        if(this.level < 15)//15级以上增加机率，减少新用户的难度
        {
            gameptmp = this.gamep+(0.4 - 0.4 * this.level / 15);
        }
        if(this.fishFactoryState == GameConsts.FishFactoryType.FishFactoryLow){
            return this.normal[netLevel - 1][fishType - 1] * 0.8 * (1 - this.level * 0.0005) * gameptmp;
        }else if(this.fishFactoryState == GameConsts.FishFactoryType.FishFactoryNormal){
            return this.normal[netLevel - 1][fishType - 1] * (1 - this.level * 0.0005) * gameptmp;
        }else if(this.fishFactoryState == GameConsts.FishFactoryType.FishFactoryHigh){
            return this.normal[netLevel - 1][fishType - 1] * 1.04 * (1 - this.level * 0.0005) * gameptmp;
        }
        return 0.0;
    },
    
    //海星合中率
    getProbStarfish : function(fishType, netLevel){
        if(this.fishFactoryState == GameConsts.FishFactoryType.FishFactoryLow){
            return this.normal[netLevel - 1][fishType - 1] * 0.8 * (1 - this.level * 0.0005) * this.gamep * (2 - 0.2);
        }else if(this.fishFactoryState == GameConsts.FishFactoryType.FishFactoryNormal){
            return this.normal[netLevel - 1][fishType - 1] * (1 - this.level * 0.0005) * this.gamep * 2;
        }else if(this.fishFactoryState == GameConsts.FishFactoryType.FishFactoryHigh){
            return this.normal[netLevel - 1][fishType - 1] * 1.04 * (1 - this.level * 0.0005) * this.gamep * (2 + 0.05);
        }
        return 0.0;
    },
    nowUsePetLevel : function(){
        if(this.usePet == GameConsts.PetType.PetTypePenguin){
            return this.petPenguinLevel;
        }else if(this.usePet == GameConsts.PetType.PetTypeCat){
            return this.petCatLevel;
        }else if(this.usePet == GameConsts.PetType.PetTypeSeal){
            return this.petSealLevel;
        }else if(this.usePet == GameConsts.PetType.PetTypeBear){
            return this.petBearLevel;
        }
        return 0;
    },
};

Global.init();