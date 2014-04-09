var VolframObject = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/Object/Idle Volfram.png' );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        this.player = new Player();
        this.gameLayer = new GameLayer();
        this.convo1 = false;
    },
    
    handleKeyDown: function( e ) {
      if ( VolframObject.KEYMAP[ e ] == 'action' ) {
          
         //Get point to decide stage of convo 
          var point = this.getconvoPoint( this.player );
          
          if( ( point == 0 ) &&  ( this.convo1) ) {
          console.log("Volfram : A no is a no. Go bother Liel instead.");
              this.player.convoPoint++;
          }
          
          else if( ( point == 0 ) && ( this.convo1 == false ) ) {
          console.log("Enfys : Yo!");
          console.log("Volfram : What is it this time?");
          console.log("Enfys : I'm getting bored of waiting for Gwen.");
          console.log("Enfys : Let's play or something.");
          console.log("Volfram : Go bother Liel or something.");
          this.convo1 = true;
          }
          
          else if ( point == 1 ) {
              
          console.log("Volfram : Woof..woof."); 
//          if(this.gameLayer.getState() == 2) this.gameLayer.setWalkState();
//          else if(this.gameLayer.getState() == 1) this.gameLayer.setDialogueState();
      
              
        
          }
          
      }
        
        },
    
    getconvoPoint: function( player ) {
        
        var point = player.getconvoPoint();
        return point;
        
    },
    
    setPlayer: function ( player ) {
        
        this.player = player;
        
    },
    
    setGameLayer: function ( gameLayer ) {
        
        this.gameLayer = gameLayer;
        
    }
    
//    setDialogueMode: function ( GameLayer ) {
//     
//       console.log(GameLayer.state);
//        
//    },

});

VolframObject.KEYMAP = {}
VolframObject.KEYMAP[cc.KEY.enter] = 'action';