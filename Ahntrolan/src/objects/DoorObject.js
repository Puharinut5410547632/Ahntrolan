var DoorObject = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/Object/Idle Liel.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        this.player = new Player();
    },
    
 handleKeyDown: function( e ) {
      if ( DoorObject.KEYMAP[ e ] == 'action' ) {
          var point = this.getconvoPoint( this.player );
          
          if( point == 5) {}
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

DoorObject.KEYMAP = {}
DoorObject.KEYMAP[cc.KEY.enter] = 'action';