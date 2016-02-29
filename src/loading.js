var LoadingLayer = cc.LayerColor.extend({
    sprite:null,
    progress : null,
    percent : 0,
    ctor:function () {
        this._super(cc.color(27, 36, 61, 255));

        var size = cc.winSize;

        this.sprite = new cc.Sprite(res.Loading_bg_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: 1
        });
        this.addChild(this.sprite, 0);
        
        this.progress = new cc.ProgressTimer(new cc.Sprite("res/login_jd.png"));
        this.progress.type = cc.ProgressTimer.TYPE_BAR;
        this.progress.midPoint = cc.p(0, 0);
        this.progress.barChangeRate = cc.p(1, 0);
        this.progress.setAnchorPoint(cc.p(0,0));
        this.progress.attr({
            x: 0,
            y: 0
        });
        this.progress.setPosition(cc.p(200, 60));
        this.sprite.addChild(this.progress);
        var to1 = cc.progressTo(2, 100);
        this.progress.runAction(to1.repeatForever());

        this.touchListener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function (touch, event) {
                cc.log("touch");
                
                return true;
            }
        });
        cc.eventManager.addListener(this.touchListener,this);
        this.scheduleUpdate();
        
        return true;
    },

    onExit : function(){
        cc.eventManager.removeAllListeners();
        this.unscheduleUpdate();
        cc.Node.prototype.onExit.call(this);
    },
    
    test : function(){
        TestCase.loadTest();
    },
    
    update : function(dt){
        this.percent++;
        switch(this.percent){
            case 1:{
                this.progress.setPercentage(5.0);
                Global.preloadSetting();
                break;
            }
            case 2:{
                this.progress.setPercentage(10.0);
            
                Global.preloadPlist6();
                break;
            }
            case 3:{
                this.progress.setPercentage(15.0);
                Global.preloadPlist7();
                break;
            }
            case 4:{
                this.progress.setPercentage(20.0);
                Global.preloadPlist8();
                break;
            }
            case 5:{
                this.progress.setPercentage(30.0);
                Global.preloadPlist2();
                break;
            }
            case 6:{
                this.progress.setPercentage(40.0);
                Global.preloadPlist3();
                break;
            }
            case 7:{
                this.progress.setPercentage(50.0);
                Global.preloadPlist4();
                break;
            }
            case 8:{
                this.progress.setPercentage(65.0);
                Global.preloadPlist5();
                break;
            }
            case 9:{
                this.progress.setPercentage(80.0);
                Global.preloadEffectMusic();
                break;
            }
            case 10:{
                this.progress.setPercentage(95.0);
			    //GameTool::datacenter(DataStartGame);
                break;
            }
            case 11:{
                this.progress.setPercentage(100.0);
                // unschedule(schedule_selector(ProgressScreen::handleMsg));
                Global.preloadDone();  //预加载完成，进行一些计算
                cc.director.runScene(new MenuScene());
    	        // cc.director.setNextScene();
            }
            default:{
                break;
            }
        }
    },
});

var LoadingScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new LoadingLayer();
        this.addChild(layer);
        layer.test();
    }
});

/**
 * 替换默认的加载页
 */
var LoadingResScene = cc.Scene.extend({
    _interval : null,
    _label : null,
    _className:"LoaderScene",
    cb: null,
    target: null,
    /**
     * Contructor of cc.LoaderScene
     * @returns {boolean}
     */
    init : function(){
        var self = this;

        //logo
        var logoWidth = 160;
        var logoHeight = 200;

        // bg
        var bgLayer = self._bgLayer = new cc.LayerColor(cc.color(27, 36, 61, 255));
        self.addChild(bgLayer, 0);


        //image move to CCSceneFile.js
        var fontSize = 24, lblHeight =  -logoHeight / 2 + 100;
        if(cc._loaderImage){
            //loading logo
            cc.loader.loadImg(cc._loaderImage, {isCrossOrigin : false }, function(err, img){
                logoWidth = img.width;
                logoHeight = img.height;
                self._initStage(img, cc.visibleRect.center);
            });
            fontSize = 14;
            lblHeight = -logoHeight / 2 - 10;
        }

        return true;
    },

    _initStage: function (img, centerPos) {
        var self = this;
        var texture2d = self._texture2d = new cc.Texture2D();
        texture2d.initWithElement(img);
        texture2d.handleLoadedTexture();
        var logo = self._logo = new cc.Sprite(texture2d);
        logo.setScale(cc.contentScaleFactor());
        logo.x = centerPos.x;
        logo.y = centerPos.y;
        self._bgLayer.addChild(logo, 10);
    },
    /**
     * custom onEnter
     */
    onEnter: function () {
        var self = this;
        cc.Node.prototype.onEnter.call(self);
        self.schedule(self._startLoading, 0.3);

    },
    /**
     * custom onExit
     */
    onExit: function () {
        cc.Node.prototype.onExit.call(this);
    },

    /**
     * init with resources
     * @param {Array} resources
     * @param {Function|String} cb
     * @param {Object} target
     */
    initWithResources: function (resources, cb, target) {
        if(cc.isString(resources))
            resources = [resources];
        this.resources = resources || [];
        this.cb = cb;
        this.target = target;
    },

    _startLoading: function () {
        var self = this;
        self.unschedule(self._startLoading);
        var res = self.resources;
        cc.loader.load(res,
            function (result, count, loadedCount) {
                /*
                var percent = (loadedCount / count * 100) | 0;
                percent = Math.min(percent, 100);
                self._label.setString("Loading... " + percent + "%");
                */
            }, function () {
                if (self.cb)
                    self.cb.call(self.target);
            });
    }
});

LoadingResScene.preload = function(resources, cb, target){
    var _cc = cc;
    if(!_cc.loaderScene) {
        _cc.loaderScene = new LoadingResScene();
        _cc.loaderScene.init();
    }
    _cc.loaderScene.initWithResources(resources, cb, target);

    cc.director.runScene(_cc.loaderScene);
    return _cc.loaderScene;
};

