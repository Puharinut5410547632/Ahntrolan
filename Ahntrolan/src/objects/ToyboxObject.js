var ToyboxObject = cc.Sprite.extend({
    ctor: function( layer ) {
        this._super();
        this.initWithFile( 'images/Object/Toybox.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
//        this.player = new Player();
    },
    
    handleKeyDown: function( e ) {
      if ( ToyboxObject.KEYMAP[ e ] == 'action' ) {
          
          var point = this.getconvoPoint( this.player );
          
          if (this.player.convoPoint == 1) 
          console.log("Enfys : It's a box of toys. There's nothing much to play in it.");
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

ToyboxObject.KEYMAP = {}
ToyboxObject.KEYMAP[cc.KEY.enter] = 'action';