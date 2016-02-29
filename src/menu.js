
var MenuLayer = cc.LayerColor.extend({
    sprite:null,
    ctor:function () {
        this._super(cc.color(255, 255, 255, 255));

        var size = cc.winSize;

        this.sprite = new cc.Sprite(res.Menu_bg_start_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: 1
        });
        this.addChild(this.sprite, 0);
        
        var logo = new cc.Sprite("res/logo.png");
        logo.attr({
            x : size.width / 2,
            y : GameConfig.SupposeHeight - 25
        });
        this.addChild(logo);

        var start = new cc.MenuItemImage(
            "res/main_button1_1.png",
            "res/main_button1_2.png",
            function () {
                cc.log("Menu is clicked!");
                cc.director.runScene(new GameScene());
            }, this);
        
        var starty = logo.getPositionY() - logo.getContentSize().height / 2 - 20;
            
        start.attr({
            x: size.width / 2,
            y: starty,
            anchorX: 0.5,
            anchorY: 0.5
        });

        var menu = new cc.Menu(start);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 1);

        this.touchListener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function (touch, event) {
                cc.log("menu");
                SoundUtil.playEffect(1);
                return true;
            }
        });
        cc.eventManager.addListener(this.touchListener,this);
        
        SoundUtil.playMusic(1);
        
        return true;
    },
    onExit : function(){
        cc.eventManager.removeAllListeners();
        cc.Node.prototype.onExit.call(this);
    }
});

var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MenuLayer();
        this.addChild(layer);
    }
});

