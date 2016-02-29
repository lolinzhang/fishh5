var TopLayer = cc.LayerColor.extend({
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
        
        

        this.touchListener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function (touch, event) {
                cc.log("menu");
                return true;
            }
        });
        cc.eventManager.addListener(this.touchListener,this);
        
        return true;
    },
    onExit : function(){
        cc.eventManager.removeAllListeners();
    }
});