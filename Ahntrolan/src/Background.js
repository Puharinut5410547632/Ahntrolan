var Background = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/background/Int1Background.png' );
        
        this.leftWallX = 0;
        this.rightWallX = 870;
    },
    
});