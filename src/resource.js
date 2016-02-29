//2dx通过这个文件管理资源
//res中只能存放.png?
var res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",
    Loading_bg_png : "res/login_bg.png",
    Menu_bg_start_png : "res/bg/start.png",
    Menu_bg_fit_png : "res/no.png",
    Menu_log_png : "res/logo.png",
    Plist_test : "res/plist/fish1.plist",
    Plist_test_png : "res/plist/fish1.png",
    
    Plist_bullet : "res/plist/bullet.plist",
    Plist_bullet_png : "res/plist/bullet.png",
    
    Music_bg1_mp3 : "res/raw/fishbg1.mp3",
    Music_bg2_mp3 : "res/raw/fishbg2.mp3",
    Music_bg3_mp3 : "res/raw/fishbg3.mp3",
    Music_hundredpoints_mp3 : "res/raw/hundredpoints.mp3",
    Music_lunpanspin_mp3 : "res/raw/lunpanspin.mp3",
    Music_menubg_mp3 : "res/raw/menubg.mp3",
    Music_tidebg1_mp3 : "res/raw/tidebg1.mp3",

    // Effect_achieve_caf : "res/raw/achieve.caf",
    // Effect_camera_caf : "res/raw/camera.caf",
    // Effect_coinanimate_caf : "res/raw/coinanimate.caf",    
    // Effect_coinsnone_caf : "res/raw/coinsnone.caf",    
    // Effect_fire_caf : "res/raw/fire.caf",    
    // Effect_firechange_caf : "res/raw/firechange.caf",    
    // Effect_highpoints_caf : "res/raw/highpoints.caf",    
    // Effect_laserfire_caf : "res/raw/laserfire.caf",
    // Effect_laserpush_caf : "res/raw/laserpush.caf",    
    // Effect_laserwaitfire_caf : "res/raw/laserwaitfire.caf",    
    // Effect_level_caf : "res/raw/level.caf",    
    // Effect_lightning_caf : "res/raw/lightning.caf",    
    // Effect_lightningluodai_caf : "res/raw/lightningluodai.caf",    
    // Effect_lunpanbt_caf : "res/raw/lunpanbt.caf",    
    // Effect_lunpangetcoin_caf : "res/raw/lunpangetcoin.caf",    
    // Effect_lunpanluodai_caf : "res/raw/lunpanluodai.caf",
    // Effect_lunpanstarfishluodai_caf : "res/raw/lunpanstarfishluodai.caf",
    // Effect_lunpanyuleiluodai_caf : "res/raw/lunpanyulei1luodai.caf",
    // Effect_monster1_caf : "res/raw/monster1.caf",    
    // Effect_opennet_caf : "res/raw/opennet.caf", 
    // Effect_pause_caf : "res/raw/pause.caf",    
    // Effect_petbear_caf : "res/raw/petbear.caf",    
    // Effect_petcat_caf : "res/raw/petcat.caf",        
    // Effect_petlevelup_caf : "res/raw/petlevelup.caf",    
    // Effect_petpenguin_caf : "res/raw/petpenguin.caf",    
    // Effect_petseal_caf : "res/raw/petseal.caf",
    // Effect_seamaid_caf : "res/raw/seamaid.caf",    
    // Effect_spinlightning_caf : "res/raw/spinlightning.caf",    
    // Effect_spinstarfish_caf : "res/raw/spinstarfish.caf",    
    // Effect_spinyulei1_caf : "res/raw/spinyulei1.caf",    
    // Effect_starfishbt_caf : "res/raw/starfishbt.caf",    
    // Effect_syspermincoins_caf : "res/raw/syspermincoins.caf",    
    // Effect_tide_caf : "res/raw/tide.caf",    
    // Effect_yulei1fire_caf : "res/raw/yulei1fire.caf",    
    // Effect_yulei1push_caf : "res/raw/yulei1push.caf"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}