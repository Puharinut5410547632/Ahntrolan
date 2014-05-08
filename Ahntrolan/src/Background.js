var Background = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/background/Int1Background.png' );
        
        this.leftWallX = 0;
        this.rightWallX = 1150;
        
     cc.AudioEngine.getInstance().playMusic( 'sfx/bgm/int1.ogg', true );
        
    },
    
});