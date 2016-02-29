
var GameLayer = cc.Layer.extend({
    tidePreFlag : false,    //潮汐前
    tideIngFlag : false,    //潮汐中
    isFinish : true,        //是否出鱼
    fisht : 0,
    fishs : new Array(),
    bullets : new Array(),
    msgQueue : new Queue(), //消息队列
    netLevel : 1,
    arrayPosition : 0,
    bg : null,
    touchNum : 0,           //
    clickLaserNum : 0,
    fireCostCoins : 0,      
    fishGainCoins : 0,
    pauseFlag : false,      //暂停标志
    second : 0,        //用于记录点击的秒数
    ruler : undefined,      //出鱼表
    ctor:function () {
        this._super();
        
        var size = cc.winSize;

        this.bg = new cc.Sprite("res/no.png");
        this.bg.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: 1
        });
        this.addChild(this.bg, 0);

        // this.touchListener = cc.EventListener.create({
        //     event: cc.EventListener.TOUCH_ONE_BY_ONE,
        //     onTouchBegan: function (touch, event) {
        //         this.touchBegan(touch, event);
        //         return true;
        //     }
        // });
        // cc.eventManager.addListener(this.touchListener,this);
        cc.eventManager.addListener({
                event:cc.EventListener.TOUCH_ONE_BY_ONE,
                onTouchBegan:this.onTouchBegan.bind(this),

            }, this);
        
        this.scheduleUpdate();
        
        return true;
    },

    onExit : function(){
        cc.eventManager.removeAllListeners();
        this.unscheduleUpdate();
    },
    update : function(dt){
        this.second += dt;
        this.handleMessage(dt);
        this.fishFunc(dt);
        this.collisionFunc(dt);
    },
    
    //处理消息
    handleMessage : function(dt){
        var msg = null;
        if(this.msgQueue.size() > 0){
            var msgSize = this.msgQueue.size();
            var msg;
            var i;
            for(i = 0; i < msgSize; i++){
                msg = this.msgQueue.pop();
                switch(msg.type){
                    case GameConsts.FishMessageType.FishMessageBuyFish:{   //购买新鱼
                        //todo
                        // var type = msg->getX();
                        // Global::instance()->loadNewFish(type);
                        break;
                    }
                    case GameConsts.FishMessageType.FishMessageAddLevel:{  //增加等级
                        // int old = msg->getX();
                        // int newL = msg->getY();
                        // Global::instance()->loadPlist(old, newL);
                        break;
                    }
                    case GameConsts.FishMessageType.FishMessageRipple:{    //水波
                        // Ripple *ripple = Ripple::instance();
                        // ripple->play(bg, msg->getX(), msg->getY());
                        break;
                    }
                    case GameConsts.FishMessageType.FishMessageBullet:{    //子弹
                    
                        if(msg.levelNet){  //升级撒网
                            // Bullet *bullet = NULL;
                            // if(msg->isPetLevel()){
                            //     bullet = Bullet::getBullet(Global::petNet[Global::instance()->nowUsePetLevel() - 1][1], true);
                            // }else{  //游戏升级
                            //     bullet = Bullet::getBullet(Global::levelAndNetPar[Global::instance()->gameLevel() - 1][3], true);
                            // }
                            // if(bullet != NULL){
                            //     bullet->setPosition(ccp(msg->getX(), msg->getY()));
                            //     bullet->setAchieve(true);
                            //     bullets->addObject(bullet);
                            //     bg->addChild(bullet);
                            //     bullet->openLevelUpNet(bullet->getPosition().x, bullet->getPosition().y);
                            // }
                        }else{
                            var fire = FishFire.getFire(this.netLevel);
                            Global.fireScale();
                            //消耗金币 //可能有问题
                            if((fire != null) && (Global.nowCoin >= Global.fireLevel)){
                                this.addBullet(this.bg, msg, fire);
                            }else{
                                if(Global.nowCoin >= 1){
                                    fire.changeToLevel(1);
                                }else{
                                    //没有金币的背景音乐
                                    SoundUtil.playMusic(GameConsts.MusicType.MusicCoinsNone);
                                }
                            }
                        }
                        break;
                    }
                    case GameConsts.FishMessageType.FishMessageLaser:{ //激光
                    //     Fire *fire = Fire::getFire(netLevel);
                    //     float startx = bg->getContentSize().width / 2;
                    //     float starty = (bg->getContentSize().height - Global::instance()->SupposePhoneWinHeight * Global::instance()->retinaScale) / 2 / Global::instance()->scale + fire->getPosition().y / Global::instance()->scale;
                    // float r = Path::getRotate(startx, starty, msg->getX(), msg->getY());
                    // if(r < 10 || r > 170){
                    //     SoundUtil::playMusic(MusicCoinsNone);
                    // }else{
                    //     //激光炮旋转
                    //     Global::instance()->changeFireRotate(r);
                    //     Global::instance()->laseringFlag = true;
                    //     //停止流光发射音乐
                    //     Global::instance()->stopLaserWaitMusic();
                    //     SoundUtil::playMusic(MusicLaserFire);
                    //     Laser *laser = Laser::instance();
                    //     laser->fireLaser(bg, startx, starty, msg->getX(), msg->getY(), r);
                    // }
                        break;
                    }
                    case GameConsts.FishMessageType.FishMessageYulei:{ //鱼雷
                    // Fire *fire = Fire::getFire(netLevel);
                    // float sx = bg->getContentSize().width / 2;
                    // float sy = (bg->getContentSize().height - FishG->SupposePhoneWinWidth * FishRetina) / 2 / FishG->scale + fire->getPosition().y / FishG->scale;
                    // float r = Path::getRotate(sx, sy, msg->getX(), msg->getY());
                    // if(r < 10 || r > 170){
                    //     SoundUtil::playMusic(MusicCoinsNone);
                    // }else{
                    //     FishG->haveYuleiFlag = false;
                    //     Bullet *bullet = Bullet::getBullet(Global::instance()->fireLevel, "images/plist/boom/boom_net.png");
                    //     if(bullet != NULL){
                    //         bullet->setPosition(ccp(msg->getX(), msg->getY()));
                    //         bullet->setYulei(true);
                    //         bullet->yuleiFire(bullet->getPosition().x, bullet->getPosition().y, bg);
                    //         bullets->addObject(bullet);
                            
                    //     }
                    //     //更换渔炮
                    //     Global::instance()->changeFire();
                    //     //鱼雷数量减一
                    //     Global::instance()->propYulei -= 1;
                    // }
                        break;
                    }
                    case GameConsts.FishMessageType.FishMessageAtom:{
                    // FishG->haveAtomFlag = false;
                    // int ex = bg->getContentSize().width / 2;
                    // int ey = bg->getContentSize().height / 2;
                    
                    // Bullet *bullet = Bullet::getBullet(FishG->fireLevel, "images/atom1.png");
                    // if(bullet){
                    //     bullet->setPosition(ccp(ex, ey));
                    //     bullet->isAtom = true;
                    //     bullet->atomFire(ex, ey, bg);
                    //     bullets->addObject(bullet);
                    // }
                    // Global::instance()->changeFire();
                    // FishG->propAtom -= 1;
                    
                        break;
                    }
                    case GameConsts.FishMessageType.FishMessageLightningFire:{
                    // Fire *fire = Fire::getFire(netLevel);
                    // float sx = bg->getContentSize().width / 2;
                    
                    
                    // float sy = (bg->getContentSize().height - FishG->SupposePhoneWinHeight * FishRetina) / 2 / FishG->scale + fire->getPosition().y / FishG->scale;
                    // float r = Path::getRotate(sx, sy, msg->getX(), msg->getY());
                    // if(r < 10 || r > 170){
                    //     SoundUtil::playMusic(MusicCoinsNone);
                    // }else{
                    //     FishG->changeFireRotate(r);
                    //     FishG->haveLightningFlag = false;
                    //     FishG->delayLightingFlag = true;
                    //     SoundUtil::playMusic(MusicLightning);
                    //     CCTexture2D *tex = CCTextureCache::sharedTextureCache()->addImage("images/lightning/lightning_bullet.png");
                    //     CCSpriteFrame *fram = CCSpriteFrame::frameWithTexture(tex, CCRectMake(0, 0, tex->getContentSize().width, tex->getContentSize().height));
                    //     Bullet *bullet = Bullet::getBullet(FishG->fireLevel, fram, false, 800);
                    //     Bullet::type = 8;
                    //     if(bullet != NULL){
                    //         bg->addChild(bullet);
                            
                    //         bullet->setPosition(ccp(msg->getX(), msg->getY()));
                    //         bullet->setLightning(true);
                    //         bullet->fire(sx, sy, msg->getX(), msg->getY());
                    //         bullets->addObject(bullet);
                    //     }
                    //     FishG->propLightning -= 1;
                    // }
                        break;
                    }
                    default:{
                        break;
                    }
                }
            // delete msg;
            // msg = NULL;
            }
        }
    },
    
    //出鱼的方法
    fishFunc : function(dt){
        
        if(!this.tideIngFlag && !this.tidePreFlag){
            if(this.isFinish){
                Global.tideId = -1;
                
                //获得新出鱼表
                this.ruler = Ruler.getRuler();
                this.arrayPosition = 0;
                this.isFinish = false;
            }
        }
        
        this.fisht += dt;
        
        for(var i = this.arrayPosition; i < this.ruler.length; i++){
            var fishInterval = this.ruler[i][0];
            if(i > 0){
                if(this.tideIngFlag){
                    fishInterval = this.ruler[i][1] - this.ruler[i - 1][1];
                }else{
                    fishInterval = (this.ruler[i][1] - this.ruler[i - 1][1]) * 6.0 / 10.0;
                }
                if(this.fisht * 1000 > fishInterval){
                    this.fisht = 0;
                    if(this.ruler[i][0] == -1){
                        this.arrayPosition = i + 1;
                        if(i == (this.ruler.length - 1)){
                            this.isFinish = true;
                        }
                        continue;
                    }
                    var path;
                    GameTool.debug("get fish" + i + "\t" + this.ruler[i][0]);
                    var fish = createFish(this.ruler[i][0]);
                    if(!this.tideIngFlag){   //非潮汐中
                        if(this.ruler[i][0] == GameConsts.FishType.FishHundred_ || this.ruler[i][0] == GameConsts.FishType.FishOneHundredAndTwenty_ 
                        || this.ruler[i][0] == GameConsts.FishType.FishOneHundredAndFifty_){
                            path = createSpecialPath();
                        }else{
                            path = createPath(this.ruler[i][4]);
                        }
                    }else{
                        path = createPath(this.ruler[i][4]);
                    }
                    path.move(this.ruler[i][5], this.ruler[i][6]);
                    if(!this.tideIngFlag){   //非潮汐中
                        fish.v = (this.ruler[i][2] + this.ruler[i][3]) * 6 / 5;
                    }else{
                        fish.v = (this.ruler[i][2] + this.ruler[i][3]);
                    }
                    fish.path = path;
                
                    fish.accelerate = false;
                
                    //测试ID
                    // fish->setFishId(fishId++);
                
                    var zorder = fish.coin;
                    if(fish.type == GameConsts.FishType.FishGoldTurtle_){//黄金龟
                        zorder = 45;
                    }
                    this.bg.addChild(fish.sprite, 2000 - zorder);
                    this.fishs.push(fish);
                    this.arrayPosition = i + 1;
                
                    if(this.ruler[i][7] == 0){
                        fish.back();
                    }else{
                        fish.go();
                    }
                    if(i == (this.ruler.length - 1)){
                        this.isFinish = true;
                    }
                }else{
                    break;
                }
            }
        }
    },
    
    collisionFunc : function(dt){
        var nowClickCoins = 0;      //当前点击捕鱼获得的金币
        var fireHaveFishFlag = false;   //成就
    
        if(this.bullets.length > 0){
            var len = this.bullets.length - 1;
            for(var j = len; j >= 0; j--){
                var bullet = this.bullets[j];
                if(bullet.lightning){
                    //  Lightning *l = bullet->l;
                
                    // l->setScaleX(Path::getS(l->getPosition().x, l->getPosition().y, bullet->getPosition().x, bullet->getPosition().y) / (200 * FishRetina));
                }
            }
        }
        //碰撞检测
        if(this.fishs.length > 0){
            var fishLen = this.fishs.length - 1;
            var i;
            for(i = fishLen; i >= 0; i--){
                var fish = this.fishs[i];
                if(this.tidePreFlag){
                    if(!fish.accelerate){  //没有加速过
                        fish.accelerate = true;
                        fish.v = GameConfig.TideFishTimesV * fish.v;
                    }
                }
                
                if(fish.state == GameConsts.FishState.FishOut){
                    this.fishs.slice(i, 1);
                    continue;
                }else if(fish.state == GameConsts.FishState.FishCatched){
                    this.fishGainCoins += fish.coin;
                    nowClickCoins += fish.coin;
                    this.fishs.slice(i, 1);
                    continue;
                }else if(fish.state == GameConsts.FishState.FishLightning){
                    this.fishs.slice(i, 1);
                    continue;
                }
                var bLen = this.bullets.length;
                if(bLen > 0){
                    var j = bLen - 1;
                    for(; j >= 0; j--){
                        var bullet = this.bullets[j];
                        if(bullet.state == GameConsts.BulletState.BulletOut){
                            this.bullets.slice(j, 1);
                        }else{
                            if(!this.tidePreFlag){//潮汐前10秒，已经加速，没必要恢复原速
                                fish.runAwayEnd();//逃跑后恢复正常速度
                            }
                            
                            var isRect = cc.rectIntersectsRect(fish.sprite.getBoundingBox(), bullet.sprite.getBoundingBox());

                            if(fish.state != GameConsts.FishState.FishCatched && bullet.state != GameConsts.BulletState.BulletCatched && isRect && Collision.checkCollisionFish(fish.sprite, bullet.sprite, fish.getEffectSize())){
                                
                                if(bullet.state == GameConsts.BulletState.BulletRun){
                                    if(!bullet.yulei && !bullet.lighting && !bullet.atom){
                                        bullet.openNet(bullet.sprite.getPosition().x, bullet.sprite.getPosition().y, bullet.sprite.getPosition().y >= fish.sprite.getPosition().y);
                                    }
                                    if(bullet.lighting){
                                        bullet.setState(GameConsts.BulletState.BulletOut);
                                    //     Lightning::genLightning(bullet->getPosition(), fish->getCenterPosition(), 0, bg);

                                    // bullets->removeObject(bullet);
                                    // bullet->removeFromParentAndCleanup(true);
                                    // Lightning::genLightning(fishs, fish, fish->getParent());
                                    break;
                                    }
                                }
                            }
                        }
                    }
                }
            }  
        }
            //加金币
        if(nowClickCoins > 0){
            Global.addCoinBy(nowClickCoins, 1);
        }
        
        var fireHaveFishCoins = 0;  //成就，弹无虚发

        var bulletLen = this.bullets.length;
        var jb = bulletLen - 1;
        for(; jb >= 0; jb--){
            fireHaveFishCoins = 0;
            var bullet = this.bullets[jb];
            if(bullet.state == GameConsts.BulletState.BulletOpen){
                //成就相关
                this.clearOneNetCatchFishType();
                var oneNetCatchFishes = 0;      //成就，单网捕鱼数量
                var oneTorpedoCatchFishesCoins = 0; //成就，单颗鱼雷捕鱼获得金币
                var oneAtomicCatchFishCoins = 0;    //成就，单颗原子炮
                var fcount = this.fishs.length;
                if(fcount > 0){
                    var fi = fcount - 1;
                    for(; fi >= 0; fi--){
                        var fish = this.fishs[fi];
                        if(bullet.achieve){ ////升级炸网
                            fish.achieve = true;
                        }
                        if(bullet.yulei){   //鱼雷炸弹
                            fish.frogCatch = true;
                        }
                        if(fish.state != GameConsts.FishState.FishCatched && bullet.state != GameConsts.BulletState.BulletCatched && Collision.checkCollision(fish.sprite, bullet.sprite, fish.getEffectSize())){
                            var f = false;
                            if(bullet.yulei){
                                f = true;
                                
                            }else if(bullet.atom){
                                f = true;
                            }else{
                                var prob;
                                if(Global.starFishTime > 0){
                                    prob = Global.getProbStarfish(fish.type, bullet.type);
                                }else{
                                    prob = Global.getProb(fish.type, bullet.type);
                                }
                                if(Global.usePet == GameConsts.PetType.PetTypeBear && Global.nowUsePetLevel() > 0){
                                    prob += prob * Global.petAdd[GameConsts.PetType.PetTypeBear - 1][Global.petBearLevel - 1] / 100;
                                }
                                prob *= 100;
                                var rand = GameTool.createRand(1, 10000);
                                f = prob > rand;

                                if(f){  //大于机率
                                    fish.catched(fish.coin, fish.sprite.getPosition().x, fish.sprite.getPosition().y,GameConsts.FishState.FishCatched);
                                    if(!bullet.yulei && !bullet.atom){ //剔除鱼雷成就
                                    
                                        oneNetCatchFishes++;    //单网捕鱼数量
                                        //单网捕鱼种类
                                        // oneNetCatchFishType.insert(pair<int, bool>(fish->getFishType(), true));
                                    
                                    }
                                
                                    //成就
                                    if(!bullet.achieve && !bullet.yulei && !bullet.atom){ //易除升级爆网和激光，剔除鱼雷成就
                                        this.fireHaveFishCoins += fish.coin;
                                        fireHaveFishFlag = true;
                                        fish.achieve();
                                    }
                                    if(bullet.yulei){  //单颗鱼雷捕鱼获得金币
                                        // oneTorpedoCatchFishesCoins += fish->getCoin();
                                    }
                                    if(bullet.atom){ //单颗原子炮获得金币
                                        // oneAtomicCatchFishCoins += fish->getCoin();
                                    }
                                }else{  //鱼加速逃跑
                                    if(!this.tidePreFlag && fish.type <= 5  && GameTool.createRand(1, 100) <GameConfig.FishEscapeOdds){
                                        fish.runAway();
                                    }
                                }
                            }
                        }
                    }
                }
                
                if(!bullet.tom){
                    bullet.state = GameConsts.BulletState.BulletCatched;
                }
                //后面的成就相关
            }
        }    
    },
    
    addBullet : function(parent, msg, fire){
        //发射子弹音乐
        if(Global.fireLevel > Global.fireMaxLevel){
            fire.changeToLevel(Global.fireMaxLevel);
        }
    
        var bullet = fire.fireHandle(msg.x, msg.y, parent);
        if(bullet != null){
            SoundUtil.playMusic(GameConsts.MusicType.MusicFire);
            Global.costCoin += Global.fireLevel;
            Achieve.achieve(GameConsts.FishAchieveType.AchieveBulletConsume, Global.costCoin);
        
            Global.subCoin();
        
            this.fireCostCoins += Global.fireLevel;
            this.bullets.push(bullet);
        }else{
            SoundUtil.playMusic(GameConsts.MusicType.MusicCoinsNone);
        }
    },
                     
    
    onTouchBegan: function (touch, event){

        this.touchNum++;
        if(this.pauseFlag || Global.showDialog){
            return false;
        }

        if(this.second <= 0.1){//点击发生在0.1秒中时忽略,帧数很低时可能会有问题 todo
            return false;
        }
        this.second = 0;
        
        var pos = this.bg.convertToNodeSpace(touch.getLocation());
        var target = event.getCurrentTarget();
        // cc.log("x=" + pos.x + " y= " + pos.y); 
        
        var tw = Global.SupposePhoneWinWidth / 2 - pos.x;
        if(Math.abs(tw) <= 75 && pos.y <= 55){
            //Global::instance()->blankFire();
            cc.log("blankFire");
        }else{
            var m = new FishMessage();
            m.type = GameConsts.FishMessageType.FishMessageRipple;
            m.x = pos.x;
            m.y = pos.y;
            m.msgid = this.touchNum;
            this.msgQueue.push(m);
            
        
            if(Global.nowLaserRemainCoins >= Global.laserProgress){
                this.clickLaserNum++;
                if(this.clickLaserNum >= 3){
                    m = new FishMessage();
                    m.type = GameConsts.FishMessageType.FishMessageLaser;
                    m.x = pos.x;
                    m.y = pos.y;
                    m.msgid = this.touchNum;
                    this.msgQueue.push(m);
                
                    this.clickLaserNum = 1;
                }
            }else if(Global.haveYuleiFlag){   //鱼雷
//            Global::instance()->setHaveYuleiFlag(false);
                m = new FishMessage();
                m.type = GameConsts.FishMessageType.FishMessageYulei;
                m.x = pos.x;
                m.y = pos.y;
                m.msgid = this.touchNum;
                this.msgQueue.push(m);
            }else if(Global.haveLightningFlag){
                m = new FishMessage();
                m.type = GameConsts.FishMessageType.FishMessageLightningFire;
                m.x = pos.x;
                m.y = pos.y;
                m.msgid = this.touchNum;
                this.msgQueue.push(m);
            }else if(Global.haveAtomFlag){  //原子炮
                m = new FishMessage();
                m.type = GameConsts.FishMessageType.FishMessageAtom;
                m.x = pos.x;
                m.y = pos.y;
                m.msgid = this.touchNum;
                this.msgQueue.push(m);
            }else{
                if(!Global.laseringFlag){
                    m = new FishMessage();
                    m.type = GameConsts.FishMessageType.FishMessageBullet;
                    m.x = pos.x;
                    m.y = pos.y;
                    m.msgid = this.touchNum;
                    this.msgQueue.push(m);
                
                }
            }
        }
        
        return true;
    },
    
    //清除单网捕鱼成就
    clearOneNetCatchFishType : function(){
        
    },
    
    //初始化方法
    initFunc : function(){
        
    },
    
    testFunc : function(){
        var size = cc.winSize;

        cc.spriteFrameCache.addSpriteFrames(res.Plist_test);

        var fish = new Fish();
        fish.init();
        fish.sprite.x = size.width / 2;
        fish.sprite.y = size.height / 2;
        this.addChild(fish.sprite);
        
        var fish1 = new Fish();
        fish1.init();
        fish1.sprite.x = 100;
        fish1.sprite.y = 100;
        this.addChild(fish1.sprite);
    },
});

var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var bgLayer = new BgLayer();
        this.addChild(bgLayer, 0);
        
        bgLayer.bake();

        var gameLayer = new GameLayer();
        this.addChild(gameLayer, 1);
        // gameLayer.testFunc();
    }
});

