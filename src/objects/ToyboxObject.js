var ToyboxObject = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/Object/Toybox.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
    },
    
});