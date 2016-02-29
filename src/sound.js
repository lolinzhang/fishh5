var SoundUtil = {
	playMusic : function(id){
		cc.audioEngine.playMusic(res.Music_menubg_mp3, true);
	},
	
	playEffect : function(id){
		if(cc.sys.os == cc.sys.OS_IOS){
			cc.audioEngine.playEffect(res.Effect_achieve_caf);
		}
	}
};