function Fish(){
	this.type = 0;
	this.state = GameConsts.FishState.FishRun;
	this.p = 1.0;				//机率
    this.coin = 5;				//金币数
    this.isAchieve = false;		//成就，弹无虚发
    this.v = 50;          		//速度
   	this.isFrogCatch = false;   //是否青蛙鱼怪捕捉
    this.path = null;     		//路径
	this.filename = "fish01_";
    this.sprite = null;         //主精灵
    this.frameNum = 10;         //游泳帧数
    this.swimAnimation = null; 	//游动动画
    this.catchedAnimation = null;//被捕动画
    this.preAngle = 180; 		//上次角度
    this.accelerate = false;	//潮汐来临加速
    this.escapeTime = 0;		//逃跑时间
    this.pathPosition = 0;
	this.lightning = 1.0;
    this.fishCoin = 0;
    this.startX = 0;
    this.startY = 0;
    this.node = null;
    this.effectWidth = 0;		//有效宽度
    this.effectHeight = 0;		//有效高度
    this.ax = 0.5;              //锚点
    this.ay = 0.5;
    
    this.swimTime = 0.1;		//游泳的动画间隔
    this.catchRepeatNum = 4;	//被抓时动画重复间隔
}

Fish.prototype.print = function(){
	cc.log("this is fish" + this.type);
};

Fish.prototype.init = function(){
    var frames = [];
    for (var i = 1; i <= this.frameNum; i++) {
        var str = (this.filename + "{0}.png").format(GameTool.num2strFix2(i));
        var frame = cc.spriteFrameCache.getSpriteFrame(str);
        // cc.log(str);
        // cc.log(frame);
        frames.push(frame);
    }

   this.swimAnimation = new cc.Animation(frames, this.swimTime);
   
   this.sprite = new cc.Sprite(frames[0]);
   this.setAnchorPt();

};

Fish.prototype.getEffectSize = function(){
    return cc.size(this.effectWidth, this.effectHeight);
}

Fish.prototype.setAnchorPt = function(){
    this.sprite.setAnchorPoint(cc.p(this.ax, this.ay));
};

Fish.prototype.test = function(){
	cc.log("test func");
}

Fish.prototype.catched = function(coin, sX, sY, state){
    this.fishCoin = coin;
    this.startX = sX;
    this.startY = sY;
    this.sprite.stopAllActions();
    this.state = state;
    
    var catchFrames = new Array();
    for(var i = 0; i < this.catchedNum; i++){
        var buff = "{0}{1}.png".format(this.filename + "catch_", GameTool.num2strFix2(i + 1));
        catchFrames.push(cc.spriteFrameCache.getSpriteFrame(buff));
    }

    var animation = new cc.Animation(catchFrames, 0.1);
    var animate = new cc.Animate(animation).repeat(this.catchRepeatNum);
    var fun = cc.callFunc(this.catchedDone, this);
    var action = cc.sequence(animate, fun);
    this.sprite.runAction(action);
};

Fish.prototype.catchedDone = function(){
    this.clear();
    if(this.fishCoin > 0){
        // Global::instance()->coidAnimation(fishCoin, startX, startY);
    }

    // if(FishG->currentTaskId > 0 && FishG->taskCatchFishesType == getFishType()){
    //     FishG->taskCatchFishesNum++;
    //     FishG->setTaskCatchFishes(FishG->currentTaskId);
    // }
};

////向右运动
Fish.prototype.go = function(){
    if(this.pathPosition == 0){
        this.sprite.setPosition(this.path.getPathPoint(0));
        var r = this.path.getRotate(0);
        var dr = this.preAngle - r;
        this.preAngle = r;
        this.sprite.visible = false;
        var rotate = cc.rotateTo(0, dr);
        var s = this.path.getS(0);
        var t = 0;
        t = s / this.v;
        
        var move = cc.moveTo(t, this.path.getPathPoint(1));
        var seq = cc.sequence(rotate, cc.callFunc(this.visible, this), move, cc.callFunc(this.next, this));
        this.sprite.runAction(seq);
        
        var action = new cc.Animate(this.swimAnimation).repeatForever();

        this.sprite.runAction(action);
//        cout << "fish go: fishId_" << fishIdLabel->getString() << endl;
    }
};

////向左运动
Fish.prototype.back = function(){
    this.path.reverse();
    this.go();
};

Fish.prototype.visible = function(){
    this.sprite.visible = true;
};

Fish.prototype.next = function(){
    this.pathPosition++;
    var r = this.path.getRotate(this.pathPosition);
    var dr = this.preAngle - r;
    this.preAngle = r;
    
    if(dr > 180){
        dr = dr - 360;
    }else if(dr < -180){
        dr = 360 + dr;
    }
    
    var s = this.path.getS(this.pathPosition);
    var t = 0.0;
    
    t = s / this.v;
    
    var rotate = cc.rotateBy(t, dr);
    this.sprite.runAction(rotate);
    
    var move = cc.moveTo(t, this.path.getPathPoint(this.pathPosition + 1));
    var spawn = cc.spawn(move, rotate);
    var seq;
    if(this.pathPosition == this.path.length() - 2){
//        cout << "fish nextclear: fishId_" << fishIdLabel->getString() << endl;
        seq = cc.sequence(spawn, cc.callFunc(this.clear, this));
        
    }else{
//        cout << "fish nextmove: fishId_" << fishIdLabel->getString() << "  " << path->getPathPoint(pathPosition + 1).x << "," << path->getPathPoint(pathPosition + 1).y << endl;
        seq = cc.sequence(spawn, cc.callFunc(this.next, this));
    }
    this.sprite.runAction(seq);
};

Fish.prototype.clear = function(){
    this.sprite.stopAllActions();
    this.sprite.removeFromParent(true);
};

Fish.prototype.runAway = function(){
    if(this.escapeTime == 0){
        this.v = GameConfig.FishEscapeTimeV * this.v;
        this.escapeTime = GameTool.now();
    }
};

Fish.prototype.runAwayEnd = function(){
    if(this.escapeTime > 0 && (GameTool.now() - this.escapeTime) >= GameConfig.FishEscapeTime){//逃跑结束
        this.v = this.v / GameConfig.FishEscapeTimeV;
        this.escapeTime = 0;
    }
};

Fish.prototype.achieve = function(){
    
};

Fish.prototype.getCenterPosition = function(){
    
};

function FishOne(){
	Fish.call(this);
	this.type = GameConsts.FishType.FishOne_;
    this.coin = 1;
    this.effectWidth = 41;
    this.effectHeight = 6;
    this.filename = "fish01_";
    this.frameNum = 10;
    this.catchedNum = 2;
    
    this.lightning = 0.3;
    this.ax = 0.036;
    this.ay = 0.5;
	
	this.print = function(){
		
		cc.log("this is fishOne" + this.type);
	};
    
    this.achieve = function(){
        
    };
}

FishOne.prototype = new Fish();

function FishTwo(){
	Fish.call(this);
	this.type = GameConsts.FishType.FishTwo_;
    this.coin = 2;
    this.effectWidth = 52;
    this.effectHeight = 8;
    this.filename = "fish02_";
    this.frameNum = 10;
    this.catchedNum = 2;
    
    this.lightning = 0.36;
    this.ax = 0.015;
    this.ay = 0.5;
	
	this.print = function(){
		
		cc.log("this is FishTwo" + this.type);
	};
    
    this.achieve = function(){
        
    };
}

FishTwo.prototype = new Fish();

function FishFour(){
	Fish.call(this);
	this.type = GameConsts.FishType.FishFour_;
    this.coin = 4;
    this.effectWidth = 64;
    this.effectHeight = 7;
    this.filename = "fish03_";
    this.frameNum = 10;
    this.catchedNum = 2;
    
    this.lightning = 0.015;
    this.ax = 0.016;
    this.ay = 0.5;
	
	this.print = function(){
		
		cc.log("this is FishFour" + this.type);
	};
    
    this.achieve = function(){
        
    };
}

FishFour.prototype = new Fish();

function FishSeven(){
	Fish.call(this);
	this.type = GameConsts.FishType.FishSeven_;
    this.coin = 7;
    this.effectWidth = 77;
    this.effectHeight = 13;
    this.filename = "fish04_";
    this.frameNum = 10;
    this.catchedNum = 2;
    
    this.lightning = 0.4;
    this.ax = 0.187;
    this.ay = 0.5;
	
	this.print = function(){
		
		cc.log("this is FishSeven" + this.type);
	};
    
    this.achieve = function(){
        
    };
}

FishSeven.prototype = new Fish();

function FishTen(){
	Fish.call(this);
	this.type = GameConsts.FishType.FishTen_;
    this.coin = 10;
    this.effectWidth = 45;
    this.effectHeight = 10;
    this.filename = "fish05_";
    this.frameNum = 10;
    this.catchedNum = 2;
    
    this.lightning = 0.38;
    this.ax = 0.0125;
    this.ay = 0.5;
	
	this.print = function(){
		
		cc.log("this is FishTen" + this.type);
	};
    
    this.achieve = function(){
        
    };
}

FishTen.prototype = new Fish();

function FishTwenty(){
	Fish.call(this);
	this.type = GameConsts.FishType.FishTwenty_;
    this.coin = 20;
    this.effectWidth = 82;
    this.effectHeight = 11;
    this.filename = "fish06_";
    this.frameNum = 10;
    this.catchedNum = 2;
    
    this.lightning = 0.36;
    this.ax = 0.009;
    this.ay = 0.5;
	
	this.print = function(){
		
		cc.log("this is FishTwenty" + this.type);
	};
    
    this.achieve = function(){
        
    };
}

FishTwenty.prototype = new Fish();

function FishThirty(){
	Fish.call(this);
	this.type = GameConsts.FishType.FishThirty_;
    this.coin = 30;
    this.effectWidth = 77;
    this.effectHeight = 13;
    this.filename = "fish07_";
    this.frameNum = 10;
    this.catchedNum = 2;
    
    this.lightning = 0.43;
    this.ax = 0.052;
    this.ay = 0.5;
	
	this.print = function(){
		
		cc.log("this is FishThirty" + this.type);
	};
    
    this.achieve = function(){
        
    };
}

FishThirty.prototype = new Fish();

function FishForty(){
	Fish.call(this);
	this.type = GameConsts.FishType.FishForty_;
    this.coin = 40;
    this.effectWidth = 74;
    this.effectHeight = 30;
    this.filename = "fish08_";
    this.frameNum = 10;
    this.catchedNum = 4;
    
    this.lightning = 0.43;
    this.ax = 0.285;
    this.ay = 0.5;
	
	this.print = function(){
		
		cc.log("this is FishForty" + this.type);
	};
    
    this.achieve = function(){
        
    };
}

FishForty.prototype = new Fish();

function FishFifty(){
	Fish.call(this);
	this.type = GameConsts.FishType.FishFifty_;
    this.coin = 50;
    this.effectWidth = 110;
    this.effectHeight = 29;
    this.filename = "fish09_";
    this.frameNum = 10;
    this.catchedNum = 4;
    
    this.lightning = 0.43;
    this.ax = 0.34;
    this.ay = 0.5;
	
	this.print = function(){
		
		cc.log("this is FishFifty" + this.type);
	};
    
    this.achieve = function(){
        
    };
}

FishFifty.prototype = new Fish();

function FishSixty(){
	Fish.call(this);
	this.type = GameConsts.FishType.FishSixty_;
    this.coin = 60;
    this.effectWidth = 94;
    this.effectHeight = 86;
    this.filename = "fish10_";
    this.frameNum = 10;
    this.catchedNum = 4;
    
    this.lightning = 0.7;
    this.ax = 0.23;
    this.ay = 0.5;
	
	this.print = function(){
		
		cc.log("this is FishSixty" + this.type);
	};
    
    this.achieve = function(){
        
    };
}

FishSixty.prototype = new Fish();

function FishHundred(){
	Fish.call(this);
	this.type = GameConsts.FishType.FishHundred_;
    this.coin = 100;
    this.effectWidth = 280;
    this.effectHeight = 27;
    this.filename = "fish13_";
    this.frameNum = 10;
    this.catchedNum = 2;
    this.catchRepeatNum = 6;    //重复
    
    this.lightning = 0.7;
    this.ax = 0.102;
    this.ay = 0.5;
	
	this.print = function(){
		
		cc.log("this is FishHundred" + this.type);
	};
    
    this.achieve = function(){
        
    };
}

FishHundred.prototype = new Fish();

function FishJelly(){
	Fish.call(this);
	this.type = GameConsts.FishType.FishJelly_;
    this.coin = 35;
    this.effectWidth = 74;
    this.effectHeight = 30;
    this.filename = "fish14_";
    this.frameNum = 10;
    this.catchedNum = 4;
    
    this.lightning = 0.5;
    this.ax = 0.1;
    this.ay = 0.5;
	
	this.print = function(){
		
		cc.log("this is FishJelly" + this.type);
	};
    
    this.achieve = function(){
        
    };
}

FishJelly.prototype = new Fish();

function FishSeventy(){
	Fish.call(this);
	this.type = GameConsts.FishType.FishSeventy_;
    this.coin = 70;
    this.effectWidth = 157;
    this.effectHeight = 17;
    this.filename = "fish16_";
    this.frameNum = 10;
    this.catchedNum = 2;
    
    this.lightning = 0.52;
    this.ax = 0.229;
    this.ay = 0.5;
	
	this.print = function(){
		
		cc.log("this is FishSeventy" + this.type);
	};
    
    this.achieve = function(){
        
    };
}

FishSeventy.prototype = new Fish();

function FishOneHundredAndTwenty(){
	Fish.call(this);
	this.type = GameConsts.FishType.FishOneHundredAndTwenty_;
    this.coin = 120;
    this.effectWidth = 230;
    this.effectHeight = 22;
    var rad = GameTool.createRand(1, 10);
    if(rad < 5){
        this.filename = "fish11_";
    }else{
        this.filename = "fish12_";
    }
    this.swimTime = 0.05;
    
    this.frameNum = 16;
    this.catchedNum = 4;
    this.catchRepeatNum = 6;
    
    this.lightning = 0.5;
    this.ax = 0.121;
    this.ay = 0.5;
	
	this.print = function(){
		
		cc.log("this is FishOneHundredAndTwenty" + this.type);
	};
    
    this.achieve = function(){
        
    };
}

FishOneHundredAndTwenty.prototype = new Fish();

function FishOneHundredAndFifty(){
	Fish.call(this);
	this.type = GameConsts.FishType.FishOneHundredAndFifty_;
    this.coin = 150;
    this.effectWidth = 415;
    this.effectHeight = 44;
    this.filename = "fish17_";

    this.frameNum = 10;
    this.catchedNum = 4;
    this.catchRepeatNum = 6;
    
    this.ax = 0.06;
    this.ay = 0.5;
	
	this.print = function(){
		
		cc.log("this is FishOneHundredAndFifty" + this.type);
	};
    
    this.achieve = function(){
        
    };
}

FishOneHundredAndFifty.prototype = new Fish();

function FishItem(){
	Fish.call(this);
	this.type = GameConsts.FishType.FishItem_;
    this.coin = 0;
    this.effectWidth = 92;
    this.effectHeight = 28;
    this.filename = "fish18_";

    this.frameNum = 10;
    this.catchedNum = 4;
    this.lightning = 0.41;
    
    this.ax = 0.321;
    this.ay = 0.5;
	
	this.print = function(){
		
		cc.log("this is FishItem" + this.type);
	};
    
    this.achieve = function(){
        
    };
}

FishItem.prototype = new Fish();

function FishFly(){
	Fish.call(this);
	this.type = GameConsts.FishType.FishFly_;
    this.coin = 45;
    this.effectWidth = 61;
    this.effectHeight = 35;
    this.filename = "fish15_";

    this.frameNum = 10;
    this.catchedNum = 4;
    this.lightning = 0.38;
    
    this.ax = 0.17;
    this.ay = 0.5;
	
	this.print = function(){
		
		cc.log("this is FishFly" + this.type);
	};
    
    this.achieve = function(){
        
    };
}

FishFly.prototype = new Fish();

function FishGoldTurtle(){
	Fish.call(this);
	this.type = GameConsts.FishType.FishGoldTurtle_;
    this.coin = 0;
    this.effectWidth = 80;
    this.effectHeight = 30;
    this.filename = "fish19_";

    this.frameNum = 10;
    this.catchedNum = 4;
    this.lightning = 0.31;
    
    this.ax = 0.31;
    this.ay = 0.5;
	
	this.print = function(){
		
		cc.log("this is FishGoldTurtle" + this.type);
	};
    
    this.achieve = function(){
        
    };
}

FishGoldTurtle.prototype = new Fish();

function FishDolphin(){
	Fish.call(this);
	this.type = GameConsts.FishType.FishDolphin_;
    this.coin = 90;
    this.effectWidth = 252;
    this.effectHeight = 29;
    this.filename = "fish20_";

    this.frameNum = 10;
    this.catchedNum = 4;
    this.lightning = 0.08;
    
    this.ax = 0.08;
    this.ay = 0.5;
	
	this.print = function(){
		
		cc.log("this is FishDolphin" + this.type);
	};
    
    this.achieve = function(){
        
    };
}

FishDolphin.prototype = new Fish();

function FishGlobefish(){
	Fish.call(this);
	this.type = GameConsts.FishType.FishGlobefish_;
    this.coin = 15;
    this.effectWidth = 83;
    this.effectHeight = 12;
    this.filename = "fish21_";

    this.frameNum = 10;
    this.catchedNum = 4;
    this.lightning = 0.13;
    
    this.ax = 0.13;
    this.ay = 0.5;
	
	this.print = function(){
		
		cc.log("this is FishGlobefish" + this.type);
	};
    
    this.achieve = function(){
        
    };
}

FishGlobefish.prototype = new Fish();

function createFish(fishType){
    var fish = null;
    switch(fishType){
        case GameConsts.FishType.FishOne_:{
            fish = new FishOne();
            break;
        }
        case GameConsts.FishType.FishTwo_:{
            fish = new FishTwo();
            break;
        }
        case GameConsts.FishType.FishFour_:{
            fish = new FishFour();
            break;
        }
        case GameConsts.FishType.FishSeven_:{
            fish = new FishSeven();
            break;
        }
        case GameConsts.FishType.FishTen_:{
            fish = new FishTen();
            break;
        }
        case GameConsts.FishType.FishTwenty_:{
            if(Global.calcReplaceFish(GameConsts.FishType.FishTwenty_, GameConsts.FishType.FishGlobefish_)){
                fish = new FishGlobefish();
            }else{
                fish = new FishTwenty();
            }
            break;
        }
        case GameConsts.FishType.FishThirty_:{
            if(Global.calcReplaceFish(GameConsts.FishType.FishThirty_, GameConsts.FishType.FishGlobefish_)){
                fish = new FishGlobefish();
            }else{
                fish = new FishThirty();
            }
            break;
        }
        case GameConsts.FishType.FishForty_:{
            fish = new FishForty();
            break;
        }
        case GameConsts.FishType.FishFifty_:{
            if(Global.calcReplaceFish(GameConsts.FishType.FishFifty_, GameConsts.FishType.FishGlobefish_)){
                fish = new FishGlobefish();
            }else{
                fish = new FishFifty();
            }
            break;
        }
        case GameConsts.FishType.FishSixty_:{
            fish = new FishSixty();
            break;
        }
        case GameConsts.FishType.FishHundred_:{
            if(Global.calcReplaceFish(GameConsts.FishType.FishHundred_, GameConsts.FishType.FishDolphin_)){
                fish = new FishDolphin();
            }else{
                fish = new FishHundred();
            }
            break;
        }
        case GameConsts.FishType.FishJellyFish_:{
            if(Global.calcReplaceFish(GameConsts.FishType.FishJellyFish_,GameConsts.FishType.FishGlobefish_)){
                fish = new FishGlobefish();
            }else{
                fish = new FishJelly();
            }
            break;
        }
        case GameConsts.FishType.FishSeventy_:{
            if(Global.calcReplaceFish(GameConsts.FishType.FishSeventy_, GameConsts.FishType.FishDolphin_)){
                fish = new FishDolphin();
            }else{
                fish = new FishSeventy();
            }
            break;
        }
        case GameConsts.FishType.FishOneHundredAndTwenty_:{
            if(Global.calcReplaceFish(GameConsts.FishType.FishOneHundredAndTwenty_, GameConsts.FishType.FishDolphin_)){
                fish = new FishDolphin();
            }else{
                fish = new FishOneHundredAndTwenty();
            }
            break;
        }
        case GameConsts.FishType.FishOneHundredAndFifty_:{
            if(Global.calcReplaceFish(GameConsts.FishType.FishOneHundredAndFifty_, GameConsts.FishType.FishDolphin_)){
                fish = new FishDolphin();
            }else{
                fish = new FishOneHundredAndFifty();
            }
            break;
        }
        case GameConsts.FishType.FishItem1_:{
            fish = new FishItem();
            break;
        }
        case GameConsts.FishType.FishFly_:{
            fish = new FishFly();
            break;
        }
        case GameConsts.FishType.FishGoldTurtle_:{
            fish = new FishGoldTurtle();
            break;
        }
        case GameConsts.FishType.FishGlobefish_:{
            fish = new FishGlobefish();
            break;
        }
        case GameConsts.FishType.FishDolphin_:{
            fish = new FishDolphin();
            break;
        }
        default:{
            break;
        }
    }
    if(fish == null){
        fish = new FishOne();
    }
    fish.init();
    //fish.autorelease();
    return fish;
}