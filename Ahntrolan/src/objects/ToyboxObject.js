var ToyboxObject = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/Object/Toybox.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
    },
    
    handleKeyDown: function( e ) {
      if ( ToyboxObject.KEYMAP[ e ] == 'action' ) {
          console.log("Enfys : It's a box of toys. There's nothing much to play in it.");
      }
        
        },

});

ToyboxObject.KEYMAP = {}
ToyboxObject.KEYMAP[cc.KEY.enter] = 'action';