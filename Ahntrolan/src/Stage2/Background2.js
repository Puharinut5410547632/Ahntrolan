var Background2 = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/background/Stage2PlaceHolder.png' );
        
        this.leftWallX = -30;
        this.rightWallX = 790;
        
        cc.AudioEngine.getInstance().playMusic( 'sfx/bgm/int1.mp3', true );
    },
    
});