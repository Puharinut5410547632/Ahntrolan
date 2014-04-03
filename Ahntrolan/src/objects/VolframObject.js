var VolframObject = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/Object/Idle Volfram.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        
        this.convo1 = false;
    },
    
    handleKeyDown: function( e ) {
      if ( VolframObject.KEYMAP[ e ] == 'action' ) {
          
          var point = this.getconvoPoint();
          if( ( this.convo1) ) {
          console.log("Volfram : A no is a no. Go bother Liel instead.");  
          }
          
          if( ( this.convo1 == false ) ) {
          console.log("Enfys : Yo!");
          console.log("Volfram : What is it this time?");
          console.log("Enfys : I'm getting bored of waiting for Gwen.");
          console.log("Enfys : Let's play or something.");
          console.log("Volfram : Go bother Liel or something.");
          this.convo1 = true;
          }
          
      }
        
        },
    
    getconvoPoint: function( player ) {
        
        var point = player.getconvoPoint();
        return point;
        
    },
    
//    setDialogueMode: function ( GameLayer ) {
//     
//       console.log(GameLayer.state);
//        
//    },

});

VolframObject.KEYMAP = {}
VolframObject.KEYMAP[cc.KEY.enter] = 'action';