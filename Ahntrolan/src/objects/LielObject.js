var LielObject = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/Object/Idle Liel.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
    },
    
 handleKeyDown: function( e ) {
      if ( LielObject.KEYMAP[ e ] == 'action' ) {
          console.log("Liel : How may I help?");
      }
        
        },

});

LielObject.KEYMAP = {}
LielObject.KEYMAP[cc.KEY.enter] = 'action';