var TalkBox = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/Object/Talk.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
    },
    
});