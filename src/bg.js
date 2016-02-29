var BgLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;

        var bgPath = "res/bg/fishlightbg_{0}.png".format(Global.bgId);
        this.sprite = new cc.Sprite(bgPath);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: 1
        });
        this.addChild(this.sprite, 0);
        
        

        this.touchListener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function (touch, event) {
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