var LielObject = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/Object/Idle Liel.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
    },
    
});