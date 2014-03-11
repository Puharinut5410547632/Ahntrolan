var VolframObject = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/Object/Idle Volfram.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
    },
    
});