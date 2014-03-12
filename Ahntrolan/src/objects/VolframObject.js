var VolframObject = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/Object/Idle Volfram.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
    },
    
    handleKeyDown: function( e ) {
      if ( VolframObject.KEYMAP[ e ] == 'action' ) {
          console.log("What is it?");
      }
        
        },

});

VolframObject.KEYMAP = {}
VolframObject.KEYMAP[cc.KEY.enter] = 'action';