//鱼炮
var FishFire = {
	sprite : null,
    bullet : null,
	startx : 0,
	starty : 0,
	endx : 0,
	endy : 0,
	
	getFire : function(l){
		if(null == this.sprite){
            var name = "res/plist/pao/net_{0}1.png".format(l);
			this.sprite = new cc.Sprite(name);
            // cc.log(name + "\t" + this.sprite);
		}
		Global.firLevel = l;
		return this;
	},
	
	getNewFire : function(l){
		this.sprite = new cc.Sprite("res/plist/pao/net_{0}1.png".format(l));
		Global.firLevel = l;
		return this;
	},
	
	fireHandle : function(ex, ey, parent){
   		this.startx = parent.getContentSize().width / 2;
    	this.starty = 0;//(parent.getContentSize().height - GameConfig.SupposePhoneWinHeight) / 2 / Global.Scale + this.sprite.getPosition().y / Global.Scale;

        //计算角度
        var r = GameTool.getRotate(this.startx, this.starty, ex, ey);
        // cc.log("sx:" + this.startx + "\tsy" + this.starty + "\tex:" + ex + "\tey:" + ey + "\t:r" + r);
        if(r < 10 || r > 170){
            return null;
        }
    
        var rotate = cc.rotateTo(0.1, 90 - r);
        this.endx = ex;
        this.endy = ey;
        this.bullet = createBullet(Global.fireLevel, false);
        if(Global.fireLevel > 7){
            var array = new Array();
            for(var i = 1; i <= 2; i++){
                var str = "res/plist/bullet/bullet0%d_%d.png".format(GameTool.num2strFix2(Global.firLevel), i);
           
                var texture = cc.textureCache.addImage(str); 
                var rect = cc.rect(0, 0, 0, 0);
                rect.width = texture.width;
                rect.height = texture.height;
                var frame = new cc.SpriteFrame(texture, rect);
                array.push(frame);
            }   
            
            var animation = new cc.Animation(frames, 0.1);
            var hightLevelFireAnimate = new cc.Animate(animation).repeatForever();
        
            parent.addChild(this.bullet.sprite, 3100);
            this.buller.sprite.runAction(hightLevelFireAnimate);
        }else{
            parent.addChild(this.bullet.sprite, 3100);
        }
    
        this.sprite.runAction(rotate);
        this.bullet.fire(this.startx, this.starty, this.endx, this.endy);
        return this.bullet;
    },
    changeToLevel : function(l){
    // SoundUtil::playMusic(MusicFireChange);
    // CCScaleTo *scale = CCScaleTo::actionWithDuration(0.2f, 0.1f * Global::instance()->getTopScale());
    // Global::instance()->setFireLevel(l);
    // CCCallFunc *change = CCCallFunc::actionWithTarget(this, callfunc_selector(Fire::changeTexture));
    // CCScaleTo *scaleBig = CCScaleTo::actionWithDuration(0.3f, 1.0f * Global::instance()->getTopScale());
    // CCDelayTime *delay = CCDelayTime::actionWithDuration(0.5f);
    // CCFiniteTimeAction *action = CCSequence::actions(scale, change, scaleBig, delay, NULL);
    // this->runAction(action);
    },
    
    changeTexture : function(){
    // char buf[100];
    // sprintf(buf, "images/plist/pao/net_%d1.png", Global::instance()->getFireLevel());
    // CCTexture2D *texture = CCTextureCache::sharedTextureCache()->addImage(buf);
    
    // CCSpriteFrame *frame = CCSpriteFrame::frameWithTexture(texture, CCRectMake(0, 0, texture->getContentSize().width, texture->getContentSize().height));
    // this->setDisplayFrame(frame);
    },
    
    add : function(){
        if(Global.fireLevel < Global.fireMaxLevel){
            this.changeToLevel(Global.fireLevel + 1);
        }else{
            this.changeToLevel(1);
        }
    },
    sub : function(){
        if(Global.fireLevel > 1){
            this.changeToLevel(Global.fireLevel - 1);
        }else{
            this.changeToLevel(Global.fireMaxLevel);
        }
    },
};

function Bullet(t){
	this.sprite = null;
	this.atom = false;
    this.atomIsFire = false;
    this.achieve = false;
    this.yulei = false;
    this.lightning = false;
    this.levelUp = false;
    this.v = 360;
    this.type = t;
    this.r = 0;
    this.state = GameConsts.BulletState.BulletRun;
    this.l = null;
	this.filename = null;
	this.frame = null;
    this.emitter = null;
    this.particle = null;   //网的粒子
	
	this.init = function(){
		if(this.frame != null){
			this.sprite = new cc.Sprite(this.frame);
		}else{
            if(this.levelUp){
                this.filename = "res/plist/net/net0{0}.png".format(this.type); 
            }else{
                this.filename = "res/plist/bullet/bullet0{0}.png".format(this.type);
            }
            
            this.sprite = new cc.Sprite(this.filename);
            // cc.log(this.filename + "\t" + this.sprite);
        }
	};
    
    this.fire = function(sx, sy, ex, ey){
        var supposeWidth = GameConfig.SupposeWidth
        var supposeHeight = GameConfig.SupposeHeight;
    
        var rot = GameTool.getRotate(sx, sy, ex, ey);
        var s1 = 1;
        if(this.lightning){
        // Lightning *l = Lightning::instance();
        // l->run(ccp(sx, sy), rot, s1, this->getParent());
        // this->l = l;
        }
    
        //看不见的位置
        this.sprite.setPosition(cc.p(sx, sy));
    
        //旋转子弹
        var r1 = GameTool.getRotate(sx, sy, ex, ey);
        this.r = 90 - r1;
    
        //直线的
        var m = (ex - sx) / (ey - sy);
        //鱼网终点的位置
        var y = 0;
        var x = 0;
        //算出子弹和哪个边相交 
        var m1 = (0 - sx) / (supposeHeight - sy);
        var m2 = (supposeHeight - sx) / (supposeHeight - sy);
    
        var radians = GameTool.degrees2radians(r1);
        switch (this.type) {
            case 1:{
                x = supposeWidth / 2 + supposeHeight * 0.5 * Math.cos(radians);
                y = sy + supposeHeight * 0.65 * Math.sin(radians);
                break;
            }
            case 2:{
                x = supposeWidth / 2 + supposeHeight * 0.67 * Math.cos(radians);
                y = sy + supposeHeight * 0.8 * Math.sin(radians);
                break;
            }
            case 3:{
                x = supposeWidth / 2 + supposeHeight * 0.75 * Math.cos(radians);
                y = sy + supposeHeight * 0.9 * Math.sin(radians);
                break;
            }
            case 4:{
                x = supposeWidth / 2 + supposeHeight * 0.88 * Math.cos(radians);
                y = sy + supposeHeight * 0.95 * Math.sin(radians);
                break;
            }
            default:{
                if(m < m1){
                    x = 0;
                    y = sx * (-1) / m + sy;
                }else if(m >= m1 && m < m2){
                    x = (supposeHeight - sy) * m + sx;
                    y = supposeHeight;
                }else{
                    x = supposeWidth;
                    y = (supposeWidth - sx) / m + sy;
                }
                break;
            }
        }
    
        var s = GameTool.calcDistance(sx, sy, x, y);
    
        var moveTo = cc.moveTo(s / this.v, cc.p(x, y));
    
        var action = null;
        if(Global.showParticle && !this.lightning){
            this.emitter = new cc.ParticleSystem("res/plist/bullet.plist");
            this.emitter.setPosition(cc.p(this.sprite.getContentSize().width / 2, 0));
            this.emitter.setRotation(this.r * (-1));
            this.emitter.setAngle(r1 + 180);
            this.emitter.setAnchorPoint(cc.p(0.5, 1));
            this.sprite.addChild(this.emitter, GameConfig.ZFishNet);
        }
        this.sprite.setRotation(this.r);
    
        if(this.type > 4){
            var clear = cc.callFunc(this.clear, this);
            action = cc.sequence(moveTo, clear);
        }else{
            var open = cc.callFunc(this.openNetFunc, this);
            action = cc.sequence(moveTo, open);
        }
        this.sprite.runAction(action);
        this.state = GameConsts.BulletState.BulletRun;
    };
    
    this.clear = function(){
        this.sprite.visible = false;
        this.sprite.removeFromParent(true)
        this.state = GameConsts.BulletState.BulletOut;
    };
    
    this.openNetInPoint = function(ex, ey, f){
        this.openNet(ex, ey, f, false);
    };
    
    this.openNetFunc = function(){
        this.openNet(this.sprite.getPosition().x, this.sprite.getPosition().y, false, true);
    };
    
    this.openNet = function(ex, ey, f, autoOpen){
        var winSize = cc.winSize;
        var parH = 20;
        if(f){  //子弹在鱼上方，不加
            parH = 0;
        }
    
        SoundUtil.playMusic(GameConsts.MusicType.MusicOpenNet);
    
        if(!autoOpen){
            this.sprite.stopAllActions();        
        }
        if(this.emitter != null)
        {
            this.sprite.removeChild(this.emitter,true);
        }
    
        if(Global.showParticle){
            // var buff = "res/plist/net{0}.plist".format(Global.fireLevel);
            // this.particle = new cc.ParticleSystem(buff);
            // this.particle.setSourcePosition(cc.p(0,0));
        }

    
        var play = cc.callFunc(this.playParticle, this);
        
        var bulletWidth = this.sprite.getContentSize().height;
    
        this.r = 90 - GameTool.getRotate(GameConfig.SupposeHeight / 2, 5, ex, ey);
        var x = 0;
        var y = 0;
        var radians = GameTool.degrees2radians(this.r);
        if(this.r <= 90){
            x = ex + Math.cos(radians) * bulletWidth / 2;
            y = (ey + Math.sin(radians) * bulletWidth / 2) + parH;
        }else{
            x = ex - Math.cos(radians) * bulletWidth / 2;
            y = (ey + Math.sin(radians) * bulletWidth / 2) + parH;
        }
        this.sprite.setPosition(cc.p(x, y));
    
        var buff = "res/plist/net/net0{0}.png".format(this.type);
        var texture = cc.textureCache.addImage(buff);
    
        var rect = cc.rect(0, 0, 0, 0);
        rect.width = texture.width;
        rect.height = texture.height;
        var frame = new cc.SpriteFrame(texture, rect);
        this.sprite.setSpriteFrame(frame);
    
        var rotate = cc.rotateTo(0.0, 0.0);
        var scalesmall = cc.scaleTo(0.0, 0.2);
    
        var vi = cc.callFunc(this.visible, this);
    
        var scaleBig = cc.scaleTo(0.1, 1.2);
        var scaleBig2 = cc.scaleTo(0.1, 0.9);
        var scaleBig3 = cc.scaleTo(0.1, 1.0);
        
        var delay = cc.delayTime(1.0);
        var stop = cc.callFunc(this.stopParticle, this);
        var clear = cc.callFunc(this.clear, this);
    
        var action = cc.sequence(rotate, scalesmall, vi, scaleBig, scaleBig2, scaleBig3, play, delay, stop, clear);

        this.sprite.runAction(action);
        this.state = GameConsts.BulletState.BulletOpen;
    };
    
    this.visible = function(){
        this.sprite.visible = true;
    };
    
    this.stopParticle = function(){
        if(this.particle != null){
            this.particle.removeFromParent(true);
        }
    };
    
    this.playParticle = function(){
        if(this.particle != null){
            this.sprite.getParent().addChild(this.particle, GameConfig.ZFishNet);
            this.particle.setPosition(this.sprite.getPosition());
            this.particle.setTexture(cc.textureCache.addImage("res/stars.png"));
        }
    };
}

function createBullet(t, isLevelUp, v){
	var bullet = new Bullet(t);
	bullet.levelUp = isLevelUp;
    if(v != undefined){
        bullet.v = v;
    }
	
	bullet.init();
	
	return bullet;
}