var LielObject = cc.Sprite.extend({
    ctor: function( layer ) {
        this._super();
        this.initWithFile( 'images/Object/Idle Liel.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
    },
    
 handleKeyDown: function( e ) {
      if ( LielObject.KEYMAP[ e ] == 'action' ) {
          console.log("Liel : How may I help?");
      }
        
        },
    
    getconvoPoint: function( player ) {
        
        var point = player.getconvoPoint();
        return point;
        
    },
    
     setPlayer: function ( player ) {
        
        this.player = player;
        
    },

});

LielObject.KEYMAP = {}
LielObject.KEYMAP[cc.KEY.enter] = 'action';