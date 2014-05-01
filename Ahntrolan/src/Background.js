var Background = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/background/Int1Background.png' );
        
        this.leftWallX = -30;
        this.rightWallX = 790;
        
        cc.AudioEngine.getInstance().playMusic( 'sfx/bgm/int1.mp3', true );
    },
    
});